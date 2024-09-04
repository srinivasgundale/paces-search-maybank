import { SAVE_SEARCH_RESULTS } from "./actions";

const initialState = {
  searchResult: {},
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH_RESULTS:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      return state;
  }
};
