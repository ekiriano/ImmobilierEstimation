
import React, { Component } from 'react'
import { Link } from "react-router-dom";
export default class rootForm extends Component {
  render() {
    return (
      
      <div>
        <div className="columns">
          <div className="column">
            <Link to="/estimmation/simple/appartement" className="button is-info is-medium">Appartement</Link>          
          </div>
          <div className="column">
            <Link to="/estimmation/simple/maison" className="button is-success is-medium">Maison</Link>
          </div>
        </div>
      </div> 
       
      
    )
  }
}
