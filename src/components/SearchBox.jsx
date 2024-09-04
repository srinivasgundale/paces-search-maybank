// import React, { useState, useEffect } from "react";
// import { Input } from "antd";
// import { useDispatch } from "react-redux";
// import { fetchSearchResults } from "../redux/actions";

// const SearchBox = () => {
//   const [query, setQuery] = useState("");
//   const [debouncedQuery, setDebouncedQuery] = useState(query);
//   const dispatch = useDispatch();

//   // Debounce effect
//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedQuery(query);
//     }, 500); // 500ms debounce delay

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [query]);

//   // Fetch results when debouncedQuery changes
//   useEffect(() => {
//     if (debouncedQuery) {
//       dispatch(fetchSearchResults(debouncedQuery));
//     }
//   }, [debouncedQuery, dispatch]);

//   const handleSearch = (e) => {
//     setQuery(e.target.value);
//   };

//   return (
//     <Input
//       placeholder="Search for places..."
//       value={query}
//       onChange={handleSearch}
//     />
//   );
// };

// export default SearchBox;

// components/SearchBox.js

import React from "react";
import { Input } from "antd";
import { useSearch } from "./hooks/useSearch";

const SearchBox = () => {
  const { query, setQuery } = useSearch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Input
      placeholder="Search for places..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default SearchBox;
