import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../../redux/actions";
import { useDebounce } from "./useDebounce";

export const useSearch = (initialQuery = "", debounceDelay = 500) => {
  const [query, setQuery] = useState(initialQuery);
  const dispatch = useDispatch();

  const debouncedQuery = useDebounce(query, debounceDelay);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(fetchSearchResults(debouncedQuery));
    }
  }, [debouncedQuery, dispatch]);

  return {
    query,
    setQuery,
  };
};
