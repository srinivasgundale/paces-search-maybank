import { mockPlaces } from "../../utils/mockData";
import { getPlaceSuggestions } from "../../services/googlePlacesService";
export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});
const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
});
export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(setSearchQuery(query));
  try {
    const results = await getPlaceSuggestions(query);
    console.log("🚀 ~ fetchSearchResults ~ results:", results)
    
    dispatch(setSearchResults(results.predictions));
  } catch (error) {
    // If Google Places API fails, use mock data
    console.error("Google Places API failed, using mock data.", error);
    const filteredMockResults = mockPlaces.filter((place) =>
      place.description.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setSearchResults(filteredMockResults));
  }
};
