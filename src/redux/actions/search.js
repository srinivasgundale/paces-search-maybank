import { getPlaceSuggestions } from "../../services/googlePlaces";
import { mockPlaces } from "../../utils/mockData";

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
    dispatch(setSearchResults(results));
  } catch (error) {
    // If Google Places API fails, use mock data
    console.error("Google Places API failed, using mock data.", error);
    const filteredMockResults = mockPlaces.filter((place) =>
      place.description.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setSearchResults(filteredMockResults));
  }
};
