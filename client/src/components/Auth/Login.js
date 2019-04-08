import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { loginUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css"

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
			<div class="bg-img">
				<div class="columns">
					<div class="login column is-4 is-offset-8 is-paddingless">
								<div class="card-content has-background-white">
									<section class="section">
										<form onSubmit={this.onSubmit}>
										<div class="has-text-centered">
											<img class="login-logo"/>
										</div>
										<div class="field">
											<label class="label">Email</label>
											<div class="control has-icons-left">
												<input 
													class="input" 
													type="email" 
													placeholder="Email" 
													name="email" 
													value={this.state.email} 
													onChange={this.onChange}
												/>
												<span class="icon is-small is-left">
													<i class=" far fa-envelope"></i>
												</span>
											</div>
												{errors.email && (
													<div className="invalid-feedback">{errors.email}</div>
												)}										
										</div>
										<div class="field">
											<label class="label">Password</label>
											<div class="control has-icons-left">
												<input
													class="input"
													type="password"
													placeholder="Password"
													name="password"
													value={this.state.password}
													onChange={this.onChange}
												/>
												<span class="icon is-small is-left">
													<i class="fa fa-key"></i>
												</span>
											</div>
												{errors.password && (
													<div className="invalid-feedback">{errors.password}</div>
												)}
										</div>
										<div class="has-text-centered">
											<button type="submit" class="button is-vcentered is-primary is-outlined">Login</button>
										</div>
										<div class="has-text-centered">
											<p> 
												Don't you have an account?
												<Link to="register">Sign up now!</Link>
											</p>
										</div>
										</form>
									</section>
								</div>
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
