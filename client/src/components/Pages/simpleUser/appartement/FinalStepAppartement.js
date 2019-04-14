

import React, { Component } from 'react'

 class FinalStepAppartement extends Component {
  render() {

    const errors = this.props.errors;
   
    if (this.props.currentStep !== 6) {
      return null;
    }

    return (
      <div>
        <div>
            <h1> Votre bien a été estimmé à : {this.props.prix_estimation}  € </h1> 
        </div>
      </div>
    )
  }
}

export default FinalStepAppartement;