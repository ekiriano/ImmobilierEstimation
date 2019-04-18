import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class requireAuth extends Component {

    componentWillMount(){
      if(!this.props.isAuthenticated){
        this.context.router.history.push('/login')
      } 
    }

    render() {
      return (
          <ComposedComponent  {...this.props} />
      );
    }
  
  }

  requireAuth.propTypes = {
    isAuthenticated : PropTypes.bool.isRequired,
  }

  requireAuth.contextTypes = {
    router : PropTypes.object.isRequired
  }

  function mapStateToProps(state){
    return {isAuthenticated : state.auth.isAuthenticated}
  }

  return connect(mapStateToProps)(requireAuth);
}

