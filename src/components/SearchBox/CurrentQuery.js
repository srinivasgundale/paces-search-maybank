import React from "react";
import { useSelector } from "react-redux";

const CurrentQuery = () => {
  const query = useSelector((state) => state.search.queries);

  return <div>Current Search Query: {query}</div>;
};

export default CurrentQuery;

