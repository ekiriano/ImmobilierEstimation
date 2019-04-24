import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class requireSuper extends Component {
    componentWillMount() {
      if (this.props.user.user_type.localeCompare("super") !== 0) {
        this.context.router.history.push("/login");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  requireSuper.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired
  };

  requireSuper.contextTypes = {
    router: PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      user: state.auth.user,
      isAuthenticated: state.auth.isAuthenticated
    };
  }

  return connect(mapStateToProps)(requireSuper);
}
