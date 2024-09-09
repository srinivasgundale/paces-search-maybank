import React from "react";
import { useSelector } from "react-redux";

const SelectedResultsList = () => {
  
  const selectedResults = useSelector((state) => state.search.selectedResults);
  console.log("🚀 ~ SelectedResultsList ~ selectedResults:", selectedResults)

  return (
    <div>
      {selectedResults.length === 0 ? (
        <p>No results selected</p>
      ) : (
        <ul>
          {selectedResults.map((result, index) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectedResultsList;
