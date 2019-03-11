import React, { Component } from "react";
import {
  submitDefaultMaison,
  submitDefaultMaisonSave
} from "../../../../actions/defaultMaisonActions";
import PropTypes from "prop-types";

//import { withRouter } from "react-router-dom";
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
  componentDidMount() {
    this.setState({ user: this.props.user });
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

    if (this.props.user.user_type === "regular") {
      this.props.submitDefaultMaisonSave(newDefautMaison);
    } else {
      this.props.submitDefaultMaison(newDefautMaison);
    }
  }

  render() {
    const { errors } = this.state;

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
                        className={classnames("input is-medium", {
                          "is-danger": errors.rue
                        })}
                        type="text"
                        name="rue"
                        placeholder="rue"
                        value={this.state.rue}
                        onChange={this.onChange}
                        required
                      />
                      {errors.rue && <p class="help is-danger">{errors.rue}</p>}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.code_postal
                        })}
                        type="text"
                        name="code_postal"
                        placeholder="code postal"
                        value={this.state.code_postal}
                        onChange={this.onChange}
                        required
                      />
                      {errors.code_postal && (
                        <p class="help is-danger">{errors.code_postal}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.ville
                        })}
                        type="text"
                        name="ville"
                        placeholder="ville"
                        value={this.state.ville}
                        onChange={this.onChange}
                        required
                      />
                      {errors.ville && (
                        <p class="help is-danger">{errors.ville}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.surface_habitable
                        })}
                        type="text"
                        name="surface_habitable"
                        placeholder="surface habitable"
                        value={this.state.surface_habitable}
                        onChange={this.onChange}
                        required
                      />
                      {errors.surface_habitable && (
                        <p class="help is-danger">{errors.surface_habitable}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.surface_habitable_terrain
                        })}
                        type="text"
                        name="surface_habitable_terrain"
                        placeholder="surface habitable terrain"
                        value={this.state.surface_habitable_terrain}
                        onChange={this.onChange}
                        required
                      />
                      {errors.surface_habitable_terrain && (
                        <p class="help is-danger">
                          {errors.surface_habitable_terrain}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.surface_habitable_constructible
                        })}
                        type="text"
                        name="surface_habitable_constructible"
                        placeholder="surface habitable constructible"
                        value={this.state.surface_habitable_constructible}
                        onChange={this.onChange}
                        required
                      />
                      {errors.surface_habitable_constructible && (
                        <p class="help is-danger">
                          {errors.surface_habitable_constructible}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.nombre_pieces
                        })}
                        type="text"
                        name="nombre_pieces"
                        placeholder="nombre piece"
                        value={this.state.nombre_pieces}
                        onChange={this.onChange}
                        required
                      />
                      {errors.nombre_pieces && (
                        <p class="help is-danger">{errors.nombre_pieces}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.nombre_salle_bain
                        })}
                        type="text"
                        name="nombre_salle_bain"
                        placeholder="nombre salle bain"
                        value={this.state.nombre_salle_bain}
                        onChange={this.onChange}
                        required
                      />
                      {errors.nombre_salle_bain && (
                        <p class="help is-danger">{errors.nombre_salle_bain}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.nombre_niveaux
                        })}
                        type="text"
                        name="nombre_niveaux"
                        placeholder="nombre niveaux"
                        value={this.state.nombre_niveaux}
                        onChange={this.onChange}
                        required
                      />
                      {errors.nombre_niveaux && (
                        <p class="help is-danger">{errors.nombre_niveaux}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.annee_construction
                        })}
                        type="text"
                        name="annee_construction"
                        placeholder="annee_construction"
                        value={this.state.annee_construction}
                        onChange={this.onChange}
                        required
                      />
                      {errors.annee_construction && (
                        <p class="help is-danger">
                          {errors.annee_construction}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.diagnostic_performance_energetique
                        })}
                        type="text"
                        name="diagnostic_performance_energetique"
                        placeholder="diagnostic performance energetique "
                        value={this.state.diagnostic_performance_energetique}
                        onChange={this.onChange}
                        required
                      />
                      {errors.diagnostic_performance_energetique && (
                        <p class="help is-danger">
                          {errors.diagnostic_performance_energetique}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.etat_bien
                        })}
                        type="text"
                        name="etat_bien"
                        placeholder=" etat bien"
                        value={this.state.etat_bien}
                        onChange={this.onChange}
                        required
                      />
                      {errors.etat_bien && (
                        <p class="help is-danger">{errors.etat_bien}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.qualite_maison
                        })}
                        type="text"
                        name="qualite_maison"
                        placeholder="qualite maison"
                        value={this.state.qualite_maison}
                        onChange={this.onChange}
                        required
                      />
                      {errors.qualite_maison && (
                        <p class="help is-danger">{errors.qualite_maison}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.luminosite
                        })}
                        type="text"
                        name="luminosite"
                        placeholder="luminosite"
                        value={this.state.luminosite}
                        onChange={this.onChange}
                        required
                      />
                      {errors.luminosite && (
                        <p class="help is-danger">{errors.luminosite}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.calme
                        })}
                        type="text"
                        name="calme"
                        placeholder="calme"
                        value={this.state.calme}
                        onChange={this.onChange}
                        required
                      />
                      {errors.calme && (
                        <p class="help is-danger">{errors.calme}</p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.proximite_transports
                        })}
                        type="text"
                        name="proximite_transports"
                        placeholder="proximite transports"
                        value={this.state.proximite_transports}
                        onChange={this.onChange}
                        required
                      />
                      {errors.proximite_transports && (
                        <p class="help is-danger">
                          {errors.proximite_transports}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className={classnames("input is-medium", {
                          "is-danger": errors.qualite_toiture
                        })}
                        type="text"
                        name="qualite_toiture"
                        placeholder="qualite toiture"
                        value={this.state.qualite_toiture}
                        onChange={this.onChange}
                        required
                      />
                      {errors.qualite_toiture && (
                        <p class="help is-danger">{errors.qualite_toiture}</p>
                      )}
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
  submitDefaultMaison: PropTypes.func.isRequired,
  submitDefaultMaisonSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors
});

export default connect(
  mapStateProps,
  { submitDefaultMaison, submitDefaultMaisonSave }
)(MultistepMaison);
