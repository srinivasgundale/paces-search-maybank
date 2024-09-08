
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "./../redux/actions/search";
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
