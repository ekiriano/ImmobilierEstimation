import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Link } from "react-router-dom";

import logo from "../partials/logo.png";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
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
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history);
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="columns">
        <div className="column is-8 is-paddingless min-is-100vh">
          <div className="homepage hero is-paddingless" />
        </div>
        <div className="login column is-4 is-paddingless centerall">
          <div id="card_log" className="card-content has-background-white">
            <section className="section">
              <div className="has-text-centered">
                <img src={logo} alt="logo" width="60%" />
              </div>
              <br />
              <form noValidate onSubmit={this.onSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left">
                    <input
                      type="text"
                      className={classnames(
                        "form-control input form-control-lg",
                        {
                          "is-invalid": errors.name
                        }
                      )}
                      placeholder="Name"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-user" />
                    </span>
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      className={classnames(
                        "form-control input form-control-lg",
                        {
                          "is-invalid": errors.email
                        }
                      )}
                      placeholder="Email Address"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope" />
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
                      type="password"
                      className={classnames(
                        "form-control  input form-control-lg",
                        {
                          "is-invalid": errors.password
                        }
                      )}
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-key" />
                    </span>
                    {errors.password && (
                      <div className="invalid-feedback">{errors.password}</div>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control has-icons-left">
                    <input
                      type="password"
                      className={classnames(
                        "form-control input form-control-lg",
                        {
                          "is-invalid": errors.password2
                        }
                      )}
                      placeholder="Confirm Password"
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}
                    />
                    <span className="icon is-small is-left">
                      <i className="fa fa-key" />
                    </span>
                    {errors.password2 && (
                      <div className="invalid-feedback">{errors.password2}</div>
                    )}
                  </div>
                </div>
                <div className="has-text-centered">
                  <button
                    type="submit"
                    className="button is-vcentered is-primary is-outlined"
                  >
                    Sign Up!
                  </button>
                </div>
                <div className="has-text-centered">
                  <p>
                    Already have an account?
                    <Link to="login">Log in now !</Link>
                  </p>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
