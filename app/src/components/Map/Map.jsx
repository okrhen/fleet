import React from "react";
import { compose, withProps } from "recompose";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";
import { node, shape } from "prop-types";

const defaultOptions = {
  defaultZoom: 12,
  defaultCenter: { lat: 1.3371503, lng: 103.7954661 },
  fullscreenControl: false,
  defaultOptions: {
    fullscreenControl: false
  }
};

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq0n0ndyTTqIH34Ve9tbbRGoiN_c7Yw4Y&v=3.exp&libraries=places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(({ children, mapProps }) => (
  <GoogleMap {...defaultOptions} {...mapProps}>
    {children ? children : null}
  </GoogleMap>
));

Map.propTypes = {
  children: node,
  mapProps: shape({})
};

Map.defaultProps = {
  children: undefined,
  mapProps: {}
};

export default Map;
