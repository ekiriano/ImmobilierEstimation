import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class requireSuper extends Component {

    componentWillMount(){
      if(!this.props.user.user_type === "super" && this.props.user_type!== null){
        this.context.router.history.push('/login')
      } 
    }

    render() {
      return (
          <ComposedComponent  {...this.props} />
      );
    }
  
  }

  requireSuper.propTypes = {
    isAuthenticated : PropTypes.string.isRequired,
  }

  requireSuper.contextTypes = {
    router : PropTypes.object.isRequired
  }

  function mapStateToProps(state){
    return {user : state.auth.user}
  }

  return connect(mapStateToProps)(requireSuper);
}

