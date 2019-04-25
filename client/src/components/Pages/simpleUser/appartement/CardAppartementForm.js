import React, { Component } from "react";
import MultiStepDefaultAppartement from "../appartement/AppartementMasterForm";
import Map from "../../Map";
class CardAppartementForm extends Component {
  render() {
    return (
      <div>
        <div className="column is-12 mt-is-5percent">
          <div className="dashboard-main">
            <div className="dashboard-main-header" />
            <div className="row">
              <div className="columns dashboard-body-header">
                <div className="column is-8">
                  {" "}
                  <MultiStepDefaultAppartement />
                </div>
                <div className="column is-4 pb-0">
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardAppartementForm;
