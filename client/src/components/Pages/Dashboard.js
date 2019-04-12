import React, { Component } from "react";
import { connect } from "react-redux";





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
           <p>something else here</p>
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
