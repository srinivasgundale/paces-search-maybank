import { mockPlaces } from "../../utils/mockData";
import { getPlaceSuggestions } from "../../services/googlePlacesService";

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setSearchQuery = (query) => ({
  type: "SET_SEARCH_QUERY",
  payload: query,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const addSelectedResult = (result) => ({
  type: 'ADD_SELECTED_RESULT',
  payload: result,
});

export const fetchSearchResults = (query) => async (dispatch) => {
  dispatch(setSearchQuery(query));
  try {
    const results = await getPlaceSuggestions(query);
    dispatch(setSearchResults(results.predictions));
  } catch (error) {
    console.error("Google Places API failed, using mock data.", error);
    const filteredMockResults = mockPlaces.filter((place) =>
      place.description.toLowerCase().includes(query.toLowerCase())
    );
    dispatch(setSearchResults(filteredMockResults));
  }
};
