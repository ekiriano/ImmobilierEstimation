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
      zoom: 9.5,
    }
  }

  mapRef = React.createRef();
  geocoderContainerRef = React.createRef();

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.resize)
  // }

  // resize = () => {
  //   this.handleViewportChange({
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   })
  // }

  handleViewportChange = (viewport) => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  handleGeocoderViewportChange = (viewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 2000 }

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    })
  }

  render() {
    return (
      <div>
      <div
          ref={this.geocoderContainerRef}
          style={{
            height: 50,
            background: "black",
            display: "flex",
            alignItems: "center",
            paddingLeft: 4
          }}
        />
      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this.handleViewportChange}
        mapboxApiAccessToken={TOKEN}>
        <Geocoder
        mapRef={this.mapRef}
        containerRef={this.geocoderContainerRef}
        onResult={this.handleOnResult}
        onViewportChange={this.handleGeocoderViewportChange}
        mapboxApiAccessToken={TOKEN}
        placeholder='Please enter your adress'
        />
      </MapGL>
      </div>
    )
  }
}
export default Map;
