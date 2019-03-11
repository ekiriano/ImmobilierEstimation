import React, { Component } from "react";
import MultiStep from "../Pages/simpleUser/maison/MaisonMasterForm";
import Map from "../Pages/Map";
class Dashboard extends Component {
  render() {
    return (
      <div className="primary-bg">
        <div className="row">
          <div className="columns">
            <div className="column is-2">
              <h1>Profile</h1>
            </div>
            <div className="column is-10">
              <div className="dashboard-main">
                <div className="dashboard-main-header" />
                <div className="row">
                  <div className="columns dashboard-body-header">
                    <div className="column is-6">
                      {" "}
                      <MultiStep />
                    </div>
                    <div className="column is-6">
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
export default Dashboard;
