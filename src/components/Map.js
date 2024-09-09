import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ selectedLocations }) => {
  const center = selectedLocations.length
    ? selectedLocations[0]
    : { lat: -34.397, lng: 150.644 };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {selectedLocations.map((location, index) => (
          <Marker
            key={index}
            position={{
              lat: location.lat,
              lng: location.lng,
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
