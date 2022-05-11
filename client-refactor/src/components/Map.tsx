import { Map as MapGL } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { Component, createRef } from "react";

const TOKEN = process.env.MAP_GL_TOKEN;

type Viewport = {
  width: string;
  height: number;
  latitude: number;
  longitude: number;
  zoom: number;
};

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 600,
      latitude: 43.5981932,
      longitude: 3.9009796999999935,
      zoom: 17,
    },
  };

  mapRef = createRef();
  geocoderContainerRef = createRef();

  handleViewportChange = (viewport: Viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  };

  handleGeocoderViewportChange = (viewport: Viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 2000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides,
    });
  };

  componentWillReceiveProps(nextProps: {
    coordinates: { latitude: number; longitude: number };
  }) {
    if (nextProps.coordinates) {
      const nextViewport = {
        width: "100%",
        height: 600,
        latitude: nextProps.coordinates.latitude,
        longitude: nextProps.coordinates.longitude,
        zoom: 16,
      };
      this.setState({ viewport: nextViewport });
    }
  }

  render() {
    return <div></div>;
  }
}
