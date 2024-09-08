import React from "react";
import { Input } from "antd";
import { useSearch } from "../../hooks/useSearch";

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
