import React from "react";
import { useSelector } from "react-redux";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapLayout = () => {
  const mapInfo = useSelector((state) => state.home.mapInfo);
  const markInfo = useSelector((state) => state.home.markInfo);
  const Map = compose(
    withProps({
      googleMapURL: "https://google-maps-geocoding.p.rapidapi.comhttps://maps.googleapis.com/maps/api/js?key=AIzaSyCDgCqSP7r9bnQ_oxU4uVk_eSZYSLcoGkc&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: (
        <div
          id="myMap"
          style={{
            height: `100%`,
            width: `100%`,
          }}
        />
      ),
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) => {
    return (
      <GoogleMap defaultZoom={5} defaultCenter={mapInfo}>
        {markInfo.length > 0 &&
          markInfo.map((mark, ind) => (
            <Marker key={`${ind}-marker`} position={mark} />
          ))}
      </GoogleMap>
    );
  });

  return <Map />;
};

export default MapLayout;
