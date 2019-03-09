import React, { Component } from "react";
import { submitDefaultMaison } from "../../../actions/defaultMaisonActions";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import classnames from "classnames";
import { connect } from "react-redux";

class MultistepMaison extends Component {
  constructor() {
    super();
    this.state = {
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
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newDefautMaison = {
      rue: this.state.rue,
      code_postal: this.state.code_postal,
      ville: this.state.ville,
      surface_habitable: this.state.surface_habitable,
      surface_totale_terrain: this.state.surface_habitable_terrain,
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
      qualite_toiture: this.state.qualite_toiture
    };
    this.props.submitDefaultMaison(newDefautMaison);
    // this.props.registerUser(newDefautMaison, this.props.history);
  }

  render() {
    const { errors } = this.state.errors;

    return (
      <div className="form-bg">
        <h1>MultistepMaison</h1>
        <div className="container">
          <form noValidate onSubmit={this.onSubmit}>
            <div className="row">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="rue"
                        placeholder="rue"
                        value={this.state.rue}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="code_postal"
                        placeholder="code postal"
                        value={this.state.code_postal}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="ville"
                        placeholder="ville"
                        value={this.state.ville}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="surface_habitable"
                        placeholder="surface habitable"
                        value={this.state.surface_habitable}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="surface_habitable_terrain"
                        placeholder="surface habitable terrain"
                        value={this.state.surface_habitable_terrain}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="surface_habitable_constructible"
                        placeholder="surface habitable constructible"
                        value={this.state.surface_habitable_constructible}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="nombre_pieces"
                        placeholder="nombre piece"
                        value={this.state.nombre_pieces}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="nombre_salle_bain"
                        placeholder="nombre salle bain"
                        value={this.state.nombre_salle_bain}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="nombre_niveaux"
                        placeholder="nombre niveaux"
                        value={this.state.nombre_niveaux}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="annee_construction"
                        placeholder="annee_construction"
                        value={this.state.annee_construction}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="diagnostic_performance_energetique"
                        placeholder="diagnostic performance energetique "
                        value={this.state.diagnostic_performance_energetique}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="etat_bien"
                        placeholder=" etat bien"
                        value={this.state.etat_bien}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="qualite_maison"
                        placeholder="qualite maison"
                        value={this.state.qualite_maison}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="luminosite"
                        placeholder="luminosite"
                        value={this.state.luminosite}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="calme"
                        placeholder="calme"
                        value={this.state.calme}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="proximite_transports"
                        placeholder="proximite transports"
                        value={this.state.proximite_transports}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="text"
                        name="qualite_toiture"
                        placeholder="qualite toiture"
                        value={this.state.qualite_toiture}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>

                  <button className="btn" type="submit">
                    Estimer
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

MultistepMaison.propTypes = {
  submitDefaultMaison: PropTypes.func.isRequired
};

const mapStateProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateProps,
  { submitDefaultMaison }
)(MultistepMaison);
