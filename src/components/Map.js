import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const Map = ({ selectedLocation }) => {
  const center = selectedLocation || { lat: -34.397, lng: 150.644 };

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {selectedLocation && (
          <Marker
            position={{
              lat: selectedLocation.lat,
              lng: selectedLocation.lng,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
