import React, { Component } from "react";
import { connect } from "react-redux";

import MultiStepDefaultMaison from "../Pages/simpleUser/maison/MaisonMasterForm";
import MultiStepDefaultAppartement from "../Pages/simpleUser/appartement/AppartementMasterForm";

import Map from "../Pages/Map";
import Profile from "../partials/Profile";

// TODO ADD CONDITIONAL RENDERING ++> FACTORIN  USER TYPE AND ESTIMATION TYPE


class Dashboard extends Component {
  render() {
    return (
      <div className="primary-bg">
        <div className="row">
          <div className="columns">
            <div className="column is-2">
              <Profile />
            </div>
            <div className="column is-10">
              <div className="dashboard-main">
                <div className="dashboard-main-header" />
                <div className="row">
                  <div className="columns dashboard-body-header">
                    <div className="column is-6">
                      {" "}
                      <MultiStepDefaultMaison />
                    </div>
                    <div className="column is-6" id="map-container">
                      <Map />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

export default connect(mapStateProps)(Dashboard);
