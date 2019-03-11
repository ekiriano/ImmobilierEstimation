import React, { Component, Fragment } from "react";

import Step1 from "./Step1Maison";
import Step2 from "./Step2Maison";
import Step3 from "./Step3Maison";

class MaisonMasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      user: {},
      rue: "",
      code_postal: "",
      ville: "",
      surface_habitable: "",
      surface_habitable_terrain: "",
      surface_totale_terrain: "",
      surface_habitable_constructible: "",
      nombre_pieces: "",
      nombre_salle_bain: "",
      nombre_niveaux: "",
      annee_construction: "",
      diagnostic_performance_energetique: "",
      etat_bien: "",
      qualite_maison: "",
      luminosite: "",
      calme: "",
      proximite_transports: "",
      qualite_toiture: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  previous() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this.previous}
        >
          Previous
        </button>
      );
    }

    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={this.next}
        >
          Next
        </button>
      );
    }
    return null;
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onsubmit}>
          {/*Fragments let you group a list of children without adding extra nodes to the DOM.*/}
          <Step1
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            rue={this.state.rue}
            code_postal={this.state.code_postal}
            ville={this.state.ville}
          />
          <Step2
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            surface_habitable={this.state.surface_habitable}
            surface_habitable_terrain={this.state.surface_habitable_terrain}
            surface_habitable_constructible={
              this.state.surface_habitable_constructible
            }
          />
          <Step3
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            nombre_pieces={this.state.nombre_pieces}
            nombre_salle_bain={this.state.nombre_salle_bain}
            nombre_niveaux={this.state.nombre_niveaux}
          />

          {this.previousButton}
          {this.nextButton}
        </form>
      </Fragment>
    );
  }
}

export default MaisonMasterForm;
