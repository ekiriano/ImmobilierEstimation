import React, { Component } from "react";
import MapGL from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder'
import 'mapbox-gl/dist/mapbox-gl.css'
import './map.css'



const TOKEN =
  "pk.eyJ1IjoidGVyMjAxOSIsImEiOiJjanJsdjhxczMwYnE1M3lvNWM3MHo5bHZrIn0.4jZb3pG3_OwR8dY2w7qJEA";


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: 676,
        height: 700,
        latitude: 43.6,
        longitude: 3.8833,
        zoom: 9.5,
      }
  }

  }

  componentWillReceiveProps(nextProps){
    console.log('updated props', nextProps);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if(nextProps.coordinates){
      this.setState({
        latitude : nextProps.coordinates.latitude,
        longtitude: nextProps.coordinates.longtitude
      });
    }
  }

  mapRef = React.createRef();
  geocoderContainerRef = React.createRef();

  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.resize)
  // }
  //
  // resize = () => {
  //   this.handleViewportChange({
  //     width: window.innerWidth,
  //     height: window.innerHeight
  //   })
  // }

  // componentWillMount(nextProps) {
  //   if(this.state.latitude !== this.nextProps.coordinates.latitude)
  //       this.setState({
  //         latitude: this.nextProps.coordinates.latitude,
  //         longitude: this.nextProps.coordinates.longtitude
  //       });
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
    // console.log('coordinates', this.props);
    return (
      <div>

      <MapGL
        ref={this.mapRef}
        {...this.state.viewport}
        onViewportChange={this.handleViewportChange}
        mapboxApiAccessToken={TOKEN}>

      </MapGL>
      </div>
    )
  }
}
export default Map;
