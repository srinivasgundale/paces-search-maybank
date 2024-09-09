import React from "react";
import { List, Spin, Alert } from "antd";
import { useSelector } from "react-redux";
import {  getPlaceDetails } from "../../services/googlePlacesService";
const ResultsList = ({ onSelectResult }) => {
  const { results, loading, error } = useSelector((state) => state.search);
  if (loading) return <Spin tip="Loading results..." />;
  if (error) return <Alert message={error} type="error" />;
  const handleItemClick = async (item) => {
    console.log("🚀 ~ handleItemClick ~ item:", item);
    const locarionName = item.description;
    const placeId = item.place_id;
    if (placeId) {
      try {
        const data = await getPlaceDetails(placeId);
        console.log("🚀 ~ handleItemClick ~ place details:", data);

        if (data && data.result && data.result.geometry) {
          let loc = data.result.geometry.location;
          const location = {
            location: loc,
            description: locarionName
          }
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
    <>
    {/* <p>Click on a result to view it on the map.</p> */}
    <List
      bordered
      dataSource={results}
      style={{ cursor: 'pointer' }}
      renderItem={(item) => (
        <List.Item onClick={() => handleItemClick(item)}>
          {item.description}
        </List.Item>
      )}
    />
    </>
  );
};

export default ResultsList;
