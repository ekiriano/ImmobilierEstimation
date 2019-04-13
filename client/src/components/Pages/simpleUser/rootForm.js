
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class rootForm extends Component {
  render() {
    return (
      <div className="columns">
       <div className="column is-6">
          <div className="column">
          <Link to="/estimmation/simple/appartement" className="property_type_select">Appartement</Link> 
          </div>
          <div className="column">
          <Link to="/estimmation/simple/maison" className="property_type_select">Maison</Link>
          </div>
        </div>
      </div>
    )
  }
}
