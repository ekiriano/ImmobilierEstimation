import React, { Component } from 'react'

class FinalStepSuper extends Component {
  render() {
    const errors = this.props.errors;

    if (this.props.currentStep !== 5) {
      return null;
    }

    return (
      <div>
        <h1> Votre bien a été estimmé par la méthode par capitalisation à : {this.props.prix_capitalisation}  € </h1>
        <h1> Votre bien a été estimmé par la méthode par comparaison à : {this.props.prix_comparaison}  € </h1>
        <h1> Votre bien a été estimmé par la méthode par référence à : {this.props.prix_reference}  € </h1>
        <h1> La moyenne des méthodes est : {this.props.moyenne_des_methodes}  € </h1>
      </div>
    )
  }
}

export default FinalStepSuper
