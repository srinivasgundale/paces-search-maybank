const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

const fetchGooglePlacesData = async (type, params = {}) => {
  const url = new URL(`https://maps.googleapis.com/maps/api/place/${type}/json`);
  url.searchParams.append("key", apiKey);

  Object.keys(params).forEach((key) => {
    url.searchParams.append(key, params[key]);
  });

  try {
    const response = await fetch(url.toString(), { mode: "cors" });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPlaceDetails = async (placeId) => {
  return fetchGooglePlacesData("details", { place_id: placeId });
};

export const getPlaceSuggestions = async (query) => {
  return fetchGooglePlacesData("autocomplete", { input: query });
};
