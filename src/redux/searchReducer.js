// const initialState = {
//   results: [],
//   error: null,
// };

// const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "SET_SEARCH_RESULTS":
//       return {
//         ...state,
//         results: action.payload,
//       };
//     case "SET_ERROR":
//       return {
//         ...state,
//         error: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default searchReducer;

// reducers/searchReducer.js

const initialState = {
  queries: "",
  results: [],
  error: null,
  loading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        queries: action.payload,
        //queries: [action.payload, ...state.queries],
        loading: true,
      };
    case "SET_SEARCH_RESULTS":
      return {
        ...state,
        results: action.payload,
        loading: false,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default searchReducer;
