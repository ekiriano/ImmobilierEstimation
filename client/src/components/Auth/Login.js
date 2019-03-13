import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";

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
<head>
	   <link rel="stylesheet" href="Register.css">
	</head>
      <div className="login">
        <div className="row">
          <div className="columns">
            <div className="column">
              <h1 className="display-4 text-center">Log In</h1>
              <form onSubmit={this.onSubmit}>
                <div1 className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                  />

                </div1>
                <br></br>
                <p1>Forgot your password?</p1>
                                <br></br>

                <div2 className="form-group">
                  <input
                    type="password"

                    placeholder="Password"
                    name="password"

                  />

                </div2>
                <br></br>
                <input
                  type="submit"
                  value="Sign in"
                  className="btn btn-success btn-block mt-4"
                />
              </form>
            </div>
            <div className="column homepage hero" />
          </div>
        </div>
      </div>
      <br></br>
            <br></br>

      <p>Don't have an account?</p><p4> Sign up now.</p4>

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
