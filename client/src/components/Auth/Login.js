import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

import {toast} from 'react-toastify';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    const { errors } = this.state;
    return (
      <div className="column homepage hero is-paddingless">
        <div className="login column is-4 is-offset-8 is-paddingless">
          <div className="card-content has-background-white">
            <section className="section has-background-white">
              <div className="column">
                <div className="has-text-centered">
                  <img src="/static/media/estimmo_logo.bd1438a3.png" alt="logo" width="70%"/>
                </div>
                <form onSubmit={this.onSubmit}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div class="control has-icons-left">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      <span className="icon is-small is-left">
                        <i className=" far fa-envelope"></i>
                      </span>
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left">
                      <input
                        className="input "
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      <span class="icon is-small is-left">
                        <i class=" fas fa-key"></i>
                      </span>
                      {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </div>
                  </div>
                  <br />
                  <div className="has-text-centered">
                    <button type="submit" className="button is-vcentred">
                      Sign In
                    </button>
                  </div>
                  <div className="has-text-centered">
                    <p>
                      Dont have an account?
                      <Link to="register">Sign up now.</Link>
                    </p>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
