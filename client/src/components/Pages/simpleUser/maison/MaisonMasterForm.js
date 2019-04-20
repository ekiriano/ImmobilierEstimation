import React, { Component, Fragment } from "react";
import {
  submitDefaultMaison,
  submitDefaultMaisonSave
} from "../../../../actions/defaultMaisonActions";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Step1 from "./Step1Maison";
import Step2 from "./Step2Maison";
import Step3 from "./Step3Maison";
import Step4 from "./Step4Maison";
import Step5 from "./Step5Maison";
import FinalStepMaison from "./FinalStepMaison";

const INPUT_TIMEOUT = 250;

class MaisonMasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      user: {},
      adresse_complete: "",
      predictions: [],
      lat: "",
      long: "",
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
      prix_estimation : "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  search(address){
    console.log('street', this.state.rue);
    const BASE_URL = 'https://api-adresse.data.gouv.fr/search/?';
    const FETCH_URL = `${BASE_URL}q=${this.state.adresse_complete}&postcode=${this.state.code_postal}&type=street&limit=5`;
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const address = json.features[0];
      console.log('address', address);
      this.setState({
        predictions: json.features,
      //   adresse_complete: address.properties.label,
      //   rue: address.properties.name,
      //   ville: address.properties.city,
      //   code_postal: address.properties.postcode,
      //   lat: address.geometry.coordinates[1],
      //   long: address.geometry.coordinates[0],
      });
      // console.log('adresse_complete', this.state.adresse_complete);
      // console.log('predictions', this.state.predictions);
      // console.log('rue', this.state.rue);
      // console.log('ville', this.state.ville);
      // console.log('code_postal', this.state.code_postal);
      // console.log('long', this.state.long);
      // console.log('lat', this.state.lat);
    });
  }

  // handleChange(e){
  //   clearTimeout(this.timeout);
  //     const value = e.target.value;
  //     this.setState({
  //       adresse_complete: value
  //     });
  //
  //     if (value.length > 0) {
  //       // make delayed api call
  //       this.timeout = setTimeout(() => {
  //         const predictions = this.search(value);
  //         this.setState({
  //           predictions
  //         });
  //       }, INPUT_TIMEOUT);
  //     } else {
  //       this.setState({
  //         predictions: []
  //       });
  //     }
  // }

  onClick(prediction){
    console.log('prediction', prediction);
    const address = prediction;
    this.setState({
      adresse_complete: address.properties.label,
      rue: address.properties.name,
      ville: address.properties.city,
      code_postal: address.properties.postcode,
      lat: address.geometry.coordinates[1],
      long: address.geometry.coordinates[0],
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const newDefautMaison = {
      rue: this.state.rue,
      code_postal: this.state.code_postal,
      ville: this.state.ville,
      surface_habitable: this.state.surface_habitable,
      surface_totale_terrain: this.state.surface_totale_terrain,
      surface_habitable_constructible: this.state
        .surface_habitable_constructible,
      nombre_pieces: this.state.nombre_pieces,
      nombre_salle_bain: this.state.nombre_salle_bain,
      nombre_niveaux: this.state.nombre_niveaux,
      annee_construction: this.state.annee_construction,
      diagnostic_performance_energetique: this.state
        .diagnostic_performance_energetique,
      etat_bien: this.state.etat_bien,
      qualite_maison: this.state.qualite_maison,
      luminosite: this.state.luminosite,
      calme: this.state.calme,
      proximite_transports: this.state.proximite_transports,
      qualite_toiture: this.state.qualite_toiture,
      prix_estimation:this.state.prix_estimation
    };

    if (this.props.user.user_type === "regular" || this.props.user.user_type === "super" ) {
      this.props.submitDefaultMaisonSave(newDefautMaison);
    } else {
      this.props.submitDefaultMaison(newDefautMaison);
      // go to next step only if prev sucessfull
    }
  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 5 ? 6 : currentStep + 1;
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
    if (currentStep !== 1 && currentStep !==6) {
      return (
        <div className="bottom-left">
          <button
            className="c-btn c-primary"
            type="button"
            onClick={this.previous}
          >
            Previous
          </button>
        </div>
      );
    }

    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 5) {
      return (
        <div className="bottom-right">
          <button
            className=" c-btn c-primary"
            type="button"
            onClick={this.next}
          >
            Next
          </button>
        </div>
      );
    }
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 5) {
      return (
        <div className="bottom-right">
          <button className="c-btn c-primary" type="submit" >

            Estimer
          </button>
        </div>
      );
    }
    return null;
  }

  componentDidMount() {
    this.setState({ user: this.props.user });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if(nextProps.newEstimationMaison){
      this.setState({prix_estimation : nextProps.newEstimationMaison.prix_estimation});
      if(nextProps.newEstimationMaison.prix_estimation > 0) {
        this.next();
      }
    }
  }

  render() {
    return (
      <Fragment>
        <form
          noValidate
          onSubmit={this.onSubmit}
          className="form-bg form-full-height is-vertical-center "
        >
          {/*Fragments let you group a list of children without adding extra nodes to the DOM.*/}
          <Step1
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            rue={this.state.rue}
            code_postal={this.state.code_postal}
            ville={this.state.ville}
            predictions={this.state.predictions}
            adresse_complete={this.state.adresse_complete}
            onKeyPress={event => {
              if(event.key === ' '){
                this.search()
              }
            }}
            onClick={this.onClick}

          />
          <Step2
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            surface_habitable={this.state.surface_habitable}
            surface_totale_terrain={this.state.surface_totale_terrain}
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
          <Step4
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            nombre_niveaux={this.state.nombre_niveaux}
            annee_construction={this.state.annee_construction}
            diagnostic_performance_energetique={
              this.state.diagnostic_performance_energetique
            }
            etat_bien={this.state.etat_bien}
            qualite_maison={this.state.qualite_maison}
          />
          <Step5
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            luminosite={this.state.luminosite}
            calme={this.state.calme}
            proximite_transports={this.state.proximite_transports}
            qualite_toiture={this.state.qualite_toiture}
          />

          <FinalStepMaison
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            prix_estimation={this.state.prix_estimation}
          />


          {this.previousButton}
          {this.nextButton}
          {this.submitButton}
        </form>
      </Fragment>
    );
  }
}

MaisonMasterForm.propTypes = {
  submitDefaultMaison: PropTypes.func.isRequired,
  submitDefaultMaisonSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  newEstimationMaison : state.simpleMaisons.newEstimationMaison,
});

export default connect(
  mapStateProps,
  { submitDefaultMaison, submitDefaultMaisonSave }
)(MaisonMasterForm);
