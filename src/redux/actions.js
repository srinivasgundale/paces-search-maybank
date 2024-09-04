import { getPlaceSuggestions } from "../api/googlePlacesAPI";

export const setSearchResults = (results) => ({
  type: "SET_SEARCH_RESULTS",
  payload: results,
});

export const setError = (error) => ({
  type: "SET_ERROR",
  payload: error,
});

export const fetchSearchResults = (query) => async (dispatch) => {
  try {
    const results = await getPlaceSuggestions(query);
    dispatch(setSearchResults(results));
  } catch (error) {
    dispatch(setError("Failed to fetch search results"));
  }
};
