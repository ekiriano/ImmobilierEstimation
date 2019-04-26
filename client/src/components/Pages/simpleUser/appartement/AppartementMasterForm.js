import React, { Component, Fragment } from "react";
import {
  submitDefaultAppartement,
  submitDefaultAppartementSave
} from "../../../../actions/defaultAppartementActions";
import PropTypes from "prop-types";

import { connect } from "react-redux";

import Step1 from "./Step1Appartement";
import Step2 from "./Step2Appartement";
import Step3 from "./Step3Appartement";
import Step4 from "./Step4Appartement";
import Step5 from "./Step5Appartement";
import FinalStepApartement from "./FinalStepAppartement";

class AppartementMasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      user: {},
      rue: "",
      code_postal: "",
      ville: "",
      surface: "",
      nombre_pieces: "",
      nombre_salle_bain: "",
      etage: "",
      nombre_etage_total: "",
      annee_construction: "",
      diagnostic_performance_energetique: "",
      etat_bien: "",
      luminosite: "",
      calme: "",
      qualite_appartement: "",
      proximite_transports: "",
      prix_estimation: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.changeVille = this.changeVille.bind(this);
    this.changeCodePostal = this.changeCodePostal.bind(this);
    this.changeRue = this.changeRue.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  changeVille(ville) {
    this.setState({ ville: ville });
  }
  changeRue(rue) {
    this.setState({ rue: rue });
  }
  changeCodePostal(code_postal) {
    this.setState({ code_postal: code_postal });
  }

  onSubmit(e) {
    e.preventDefault();

    const newDefautAppartement = {
      rue: this.state.rue,
      code_postal: this.state.code_postal,
      ville: this.state.ville,
      surface: this.state.surface,
      nombre_pieces: this.state.nombre_pieces,
      nombre_salle_bain: this.state.nombre_salle_bain,
      etage: this.state.etage,
      nombre_etage_total: this.state.nombre_etage_total,
      annee_construction: this.state.annee_construction,
      diagnostic_performance_energetique: this.state
        .diagnostic_performance_energetique,
      etat_bien: this.state.etat_bien,
      luminosite: this.state.luminosite,
      calme: this.state.calme,
      qualite_appartement: this.state.qualite_appartement,
      proximite_transports: this.state.proximite_transports,
      prix_estimation: this.state.prix_estimation
    };

    if (
      this.props.user.user_type === "regular" ||
      this.props.user.user_type === "super"
    ) {
      this.props.submitDefaultAppartementSave(newDefautAppartement);
    } else {
      this.props.submitDefaultAppartement(newDefautAppartement);
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
    if (currentStep !== 1 && currentStep !== 6) {
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
          <button className="c-btn c-primary" type="submit">
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
    if (nextProps.newEstimationAppartement) {
      this.setState({
        prix_estimation: nextProps.newEstimationAppartement.prix_estimation
      });
      if (nextProps.newEstimationAppartement.prix_estimation > 0) {
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
            changeVille={this.changeVille}
            changeCodePostal={this.changeCodePostal}
            changeRue={this.changeRue}
          />
          <Step2
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            surface={this.state.surface}
            nombre_pieces={this.state.nombre_pieces}
            nombre_salle_bain={this.state.nombre_salle_bain}
          />
          <Step3
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            etage={this.state.etage}
            nombre_etage_total={this.state.nombre_etage_total}
            annee_construction={this.state.annee_construction}
          />
          <Step4
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            diagnostic_performance_energetique={
              this.state.diagnostic_performance_energetique
            }
            etat_bien={this.state.etat_bien}
          />
          <Step5
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            qualite_appartement={this.state.qualite_appartement}
            luminosite={this.state.luminosite}
            calme={this.state.calme}
            proximite_transports={this.state.proximite_transports}
          />

          <FinalStepApartement
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

AppartementMasterForm.propTypes = {
  submitDefaultAppartement: PropTypes.func.isRequired,
  submitDefaultAppartementSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  newEstimationAppartement: state.simpleAppartements.newEstimationAppartement
});

export default connect(
  mapStateProps,
  { submitDefaultAppartement, submitDefaultAppartementSave }
)(AppartementMasterForm);
