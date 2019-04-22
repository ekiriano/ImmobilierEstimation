import React, { Component } from 'react'

import MultiStepDefaultMaison from "../maison/MaisonMasterForm";
import Map from "../../Map";
import "../../map.css"

export default class CardMaisonForm extends Component {
  render() {
    return (

        <div>
         <div className="column is-12">
              <div className="dashboard-main">
                <div className="dashboard-main-header" />
                <div className="row">
                  <div className="columns dashboard-body-header">
                    <div className="column is-8">
                      {" "}
                      <MultiStepDefaultMaison />
                    </div>
                    <div className="column is-4 pb-0">
                      <Map />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>

    )
  }
}
