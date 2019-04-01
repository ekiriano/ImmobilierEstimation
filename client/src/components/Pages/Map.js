import React, { Component } from "react";
import MapGL from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'

// import DeckGL, { GeoJsonLayer } from "deck.gl";



const TOKEN =
  "pk.eyJ1IjoidGVyMjAxOSIsImEiOiJjanJsdjhxczMwYnE1M3lvNWM3MHo5bHZrIn0.4jZb3pG3_OwR8dY2w7qJEA";

class Map extends Component {
  state = {
    viewport: {
      width: 569,
      height: 600,
      latitude: 43.6,
      longitude: 3.8833,
      zoom: 10,
    }
  }

  mapRef = React.createRef()

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize)
  }

  resize = () => {
    this.handleViewportChange({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 3000 }

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }

  render() {
    return (
      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this.handleViewportChange}
        mapboxApiAccessToken={TOKEN}>
        <Geocoder
          mapRef={this.mapRef}
          onViewportChange={this.handleGeocoderViewportChange}
          mapboxApiAccessToken={TOKEN}
        />
      </MapGL>
    )
  }
}
export default Map;
