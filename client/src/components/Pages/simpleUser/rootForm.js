
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class rootForm extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
        <Link to="/estimmation/simple/appartement">Appartement</Link> 
        </div>
        <div className="column">
        <Link to="/estimmation/simple/maison">Maison</Link>
        </div>
      </div>
    )
  }
}
