
const initialState = {
    queries: "",
    results: [],
    error: null,
    loading: false,
    selectedResults: [], 
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
      case 'ADD_SELECTED_RESULT':
        return {
          ...state,
          selectedResults: [...state.selectedResults, action.payload],
        };
        
      default:
        return state;
    }
  };
  export default searchReducer;
  