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
      nombre_etage_total:"",
      annee_construction: "",
      diagnostic_performance_energetique: "",
      etat_bien: "",
      qualite_appartement: "",
      luminosite: "",
      calme: "",
      proximite_transports: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      nombre_etage_total : this.state.nombre_etage_total,
      annee_construction: this.state.annee_construction,
      diagnostic_performance_energetique: this.state
        .diagnostic_performance_energetique,
      etat_bien: this.state.etat_bien,
      qualite_appartement: this.state.qualite_appartement,
      luminosite: this.state.luminosite,
      calme: this.state.calme,
      proximite_transports: this.state.proximite_transports
    };

    if (this.props.user.user_type === "regular") {
      this.props.submitDefaultAppartementSave(newDefautAppartement);
    } else {
      this.props.submitDefaultAppartement(newDefautAppartement);
    }
  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
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
  }

  render() {
    return (
      <Fragment>
        <form
          noValidate
          onSubmit={this.onSubmit}
          className="form-bg form-full-height is-vertical-center "
        >
         
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
            surface={this.state.surface}
          />
          <Step3
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            nombre_pieces={this.state.nombre_pieces}
            nombre_salle_bain={this.state.nombre_salle_bain}
            etage={this.state.etage}
            nombre_etage_total={this.state.nombre_etage_total}
          />
          <Step4
            currentStep={this.state.currentStep}
            onChange={this.onChange}
            errors={this.state.errors}
            annee_construction={this.state.annee_construction}
            diagnostic_performance_energetique={
              this.state.diagnostic_performance_energetique
            }
            etat_bien={this.state.etat_bien}
            qualite_appartement={this.state.qualite_appartement}
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
  errors: state.errors
});

export default connect(
  mapStateProps,
  { submitDefaultAppartement, submitDefaultAppartementSave }
)(AppartementMasterForm);
