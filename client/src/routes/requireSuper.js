import React, { Component } from 'react'
import PropTypes from "prop-types";
import {connect} from 'react-redux';

export default function(ComposedComponent){
  class requireSuper extends Component {

    componentWillMount(){
      if(!this.props.user_type === "super"){
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
    return {user_type : state.auth.user.user_type}
  }

  return connect(mapStateToProps)(requireSuper);
}

