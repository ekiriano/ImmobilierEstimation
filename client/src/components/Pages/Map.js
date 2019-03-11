import React, { Component } from "react";
import ReactMapGL from "react-map-gl";

const TOKEN =
  "pk.eyJ1IjoidGVyMjAxOSIsImEiOiJjanJsdjhxczMwYnE1M3lvNWM3MHo5bHZrIn0.4jZb3pG3_OwR8dY2w7qJEA";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 400,
        height: 725,
        latitude: 43.611474,
        longitude: 3.868325,
        zoom: 13
      }
    };
  }
  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
        mapStyle="mapbox://styles/mapbox/outdoors-v9"
        mapboxApiAccessToken={TOKEN}
      />
    );
  }
}

export default Map;
