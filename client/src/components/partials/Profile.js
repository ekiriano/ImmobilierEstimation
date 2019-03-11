import React, { Component } from "react";
import { Link } from "react-router-dom";
class Profile extends Component {
  render() {
    return (
      <div>
        <h3>John Doe</h3>
        <p>Simple User</p>

        <Link to="#" className="profileLink">
          Saved Estimation
        </Link>
      </div>
    );
  }
}

export default Profile;
