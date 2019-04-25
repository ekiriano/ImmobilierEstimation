import React, { Component } from "react";
import MapGL from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import PropTypes from "prop-types";
import { connect } from "react-redux";

//const TOKEN = "pk.eyJ1IjoidGVyMjAxOSIsImEiOiJjanJsdjhxczMwYnE1M3lvNWM3MHo5bHZrIn0.4jZb3pG3_OwR8dY2w7qJEA";
const TOKEN =
  "pk.eyJ1IjoibWVpbGxldXJzYWdlbnRzIiwiYSI6ImNqMWV5YnRpMDAwMHkyeXRnd3JkdXRiaDEifQ.emcFsn3Ox6WcKmOHhbTOPQ";

class Map extends Component {
  state = {
    viewport: {
      width: "100%",
      height: 600,
      latitude: 43.5981932,
      longitude: 3.9009796999999935,
      zoom: 17
    }
  };

  mapRef = React.createRef();
  geocoderContainerRef = React.createRef();

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 2000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.coordinates) {
      const nextViewport = {
        width: "100%",
        height: 600,
        latitude: nextProps.coordinates.latitude,
        longitude: nextProps.coordinates.longitude,
        zoom: 16
      };
      this.setState({ viewport: nextViewport });
    }
  }

  render() {
    return (
      <div>
        <MapGL
          ref={this.mapRef}
          {...this.state.viewport}
          onViewportChange={this.handleViewportChange}
          mapboxApiAccessToken={TOKEN}
          mapStyle="mapbox://styles/meilleursagents/cjfm7js7u0o552snxqa6g7vxr"
        />
      </div>
    );
  }
}

Map.propTypes = {
  coordinates: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  coordinates: state.map.coordinates
});

export default connect(mapStateToProps)(Map);
