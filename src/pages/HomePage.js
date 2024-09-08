import React, { useState } from "react";
import SearchBox from "../components/SearchBox";
import CurrentQuery from "../components/SearchBox/CurrentQuery";
import ResultsList from "./../components/ResultsList";
import Map from "./../components/Map";
const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <>
      <SearchBox />
      <CurrentQuery />
      <ResultsList
        onSelectResult={(location) => setSelectedLocation(location)}
      />
      <Map selectedLocation={selectedLocation} />
    </>
  );
};

export default HomePage;
