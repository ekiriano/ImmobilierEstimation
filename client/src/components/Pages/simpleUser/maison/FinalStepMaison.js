import React, { Component } from 'react'

class FinalStepMaison extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 6) {
      return null;
    }
    console.log(this.props.simpleMaisons);
    return (
      <div>
        <h1> Votre bien a été estimmé à :  </h1> 
      </div>
    )
  }
}

export default FinalStepMaison