// hooks/useSearch.js

// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchSearchResults } from "./../../redux/actions";
// import { useDebounce } from "./useDebounce";

// export const useSearch = (debounceDelay = 5000) => {
//   const query = useSelector((state) => state.search.query);
//   const dispatch = useDispatch();

//   const debouncedQuery = useDebounce(query, debounceDelay);

//   useEffect(() => {
//     if (debouncedQuery) {
//       dispatch(fetchSearchResults(debouncedQuery));
//     }
//   }, [debouncedQuery, dispatch]);

//   const setQuery = (value) => {
//     dispatch({ type: "SET_SEARCH_QUERY", payload: value });
//   };

//   return {
//     query,
//     setQuery,
//   };
// };

// hooks/useSearch.js

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../redux/actions";
import { useDebounce } from "./useDebounce";

export const useSearch = (debounceDelay = 500) => {
  const dispatch = useDispatch();

  // Local state to handle input change before debouncing
  const [inputValue, setInputValue] = useState("");

  // Get the debounced value of the input
  const debouncedInputValue = useDebounce(inputValue, debounceDelay);

  // Fetch the query from Redux store
  const query = useSelector((state) => state.search.query);

  // Update Redux state when the debounced input value changes
  useEffect(() => {
    if (debouncedInputValue) {
      dispatch({ type: "SET_SEARCH_QUERY", payload: debouncedInputValue });
      dispatch(fetchSearchResults(debouncedInputValue));
    }
  }, [debouncedInputValue, dispatch]);

  // Function to set the input value
  const setQuery = (value) => {
    setInputValue(value); // This will be debounced automatically
  };

  return {
    query,
    setQuery,
  };
};
