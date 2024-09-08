import { useState, useCallback } from "react";

const useGooglePlacesApi = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (type, params = {}) => {
    setLoading(true);
    setError(null);

    const url = new URL(`https://maps.googleapis.com/maps/api/place/${type}/json`);
    url.searchParams.append("key", apiKey);

    Object.keys(params).forEach((key) => {
      url.searchParams.append(key, params[key]);
    });

    try {
      const response = await fetch(url.toString(), { mode: "cors" });
      const data = await response.json();
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.error("Error fetching data:", error);
    }
  }, [apiKey]);

  const getGooglePlacesData = useCallback(
    ({ placeId = null, query = null }) => {
      if (placeId) {
        return fetchData("details", { place_id: placeId });
      }
      if (query) {
        return fetchData("autocomplete", { input: query });
      }
      return null;
    },
    [fetchData]
  );

  return {
    getGooglePlacesData,
    loading,
    error,
  };
};

export default useGooglePlacesApi;
