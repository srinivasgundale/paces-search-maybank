export const getPlaceSuggestions = async (query) => {
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${apiKey}`,{
      mode: 'cors'
    }
  );
  const data = await response.json();
  return data.predictions;
};
