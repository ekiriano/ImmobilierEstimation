import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { withRouter } from "react-router-dom";

import logo from "./logo_navbar.png";

class Nav extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("/");
  }

  render() {
    const auth = (
      <div>
        <Link className="button is-primary" to="/register">
          <strong>Sign up</strong>
        </Link>
        <Link className="button is-light" to="/login">
          Log in
        </Link>
      </div>
    );

    const logout = (
      <Link
        onClick={this.onLogoutClick.bind(this)}
        className="button is-danger"
        to="/logout"
      >
        <strong>Log Out</strong>
      </Link>
    );

    const dashboard = (
      <Link
      to="/dashboard"
      className="button is-info"
      >
        <strong> Dashboard </strong>
      </Link>
    )

    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={logo}
              
              alt="logo"
            />
          </Link>

          <Link
            to="#"
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Link>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/estimmation/simple" className="navbar-item">
              Estimmer votre bien gratuitement
            </Link>

            {this.props.isLoggedIn ? (
               <Link to="/premium" className="navbar-item">
               Devenir un utilisateur Premium
              </Link>

            ) : null} 

           

          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
              {this.props.isLoggedIn ? dashboard : null}
                {this.props.isLoggedIn ? logout : auth}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Nav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Nav));
