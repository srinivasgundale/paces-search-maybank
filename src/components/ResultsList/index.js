import React from "react";
import { List, Spin, Alert } from "antd";
import { useSelector } from "react-redux";

const ResultsList = ({ onSelectResult }) => {
  const { results, loading, error } = useSelector((state) => state.search);
  if (loading) return <Spin tip="Loading results..." />;
  if (error) return <Alert message={error} type="error" />;
  const handleItemClick = async (item) => {
    console.log("🚀 ~ handleItemClick ~ item:", item);

    const placeId = item.place_id;
    if (placeId) {
      try {
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${apiKey}`
        );
        const data = await response.json();
        console.log("🚀 ~ handleItemClick ~ place details:", data);

        if (data && data.result && data.result.geometry) {
          const location = data.result.geometry.location;
          console.log("🚀 ~ handleItemClick ~ location:", location);
          onSelectResult(location);
        } else {
          console.error(
            "Failed to fetch place details or location data is missing"
          );
        }
      } catch (error) {
        console.error("Error fetching place details:", error);
      }
    }
  };

  return (
    <List
      bordered
      dataSource={results}
      renderItem={(item) => (
        <List.Item onClick={() => handleItemClick(item)}>
          {item.description}
        </List.Item>
      )}
    />
  );
};

export default ResultsList;