import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="ui container">
          <div className="ui secondary inverted menu">
            <Link to="#" className="toc item">
              <i className="sidebar icon" />
              Dev Quick Links
            </Link>

            <div className="right item">
              <Link to="#" className="ui inverted button login-trigger">
                Log in
              </Link>
              <Link to="#" className="ui pink button sign-up-trigger">
                Sign Up
              </Link>
            </div>

            <div className="right item">
              <Link to="#" className="ui item">
                Faire une estimation
              </Link>
              <Link to="profile.php" className="ui item">
                Mon profile
              </Link>
              <Link to="#" className="ui item">
                mes estimations{" "}
                <div className="floating ui circular pink label">3</div>
              </Link>
              <Link to="#" className="ui item logout">
                deconnecter
              </Link>

              <div className="compact menu">
                <div className="ui dropdown item">
                  <i className="world icon" />
                  Languages
                  <i className="dropdown icon" />
                  <div className="menu">
                    <div className="item">
                      <i className="flag gb" />
                      English
                    </div>
                    <div className="item">
                      <i className="flag fr" />
                      Français
                    </div>
                    <div className="item">
                      <i className="flag es" />
                      Español
                    </div>
                    <div className="item">
                      <i className="flag de" />
                      Deutsch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
