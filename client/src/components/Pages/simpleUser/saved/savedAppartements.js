import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  getSavedAppartements,
  deleteSavedAppartement
} from "../../../../actions/defaultAppartementActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class savedAppartements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appartements: [],
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getSavedAppartements();
  }

  onClickDelete(id) {
    this.props.deleteSavedAppartement(id);
  }

  render() {
    var appartementCards = this.props.savedAppartements.map(
      (appartement, i) => {
        return (
          <div className="card mb-is-1" key={i}>
            <header className="card-header">
              <p className="card-header-title">
                Addresse : {appartement.rue} {appartement.code_postal}{" "}
                {appartement.ville}
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <div className="columns">
                  <div className="column is-half">
                    <p>
                      {" "}
                      <i className="uil uil-ruler-combined" />
                      surface : {appartement.surface}m²
                    </p>
                    <p>nombre pièces : {appartement.nombre_pieces}</p>
                    <p>nombre salle bain : {appartement.nombre_salle_bain}</p>
                    <p>etage : {appartement.etage}</p>
                    <p>nombre etage total : {appartement.nombre_etage_total}</p>
                  </div>
                  <div className="column is-half">
                    <p>
                      <i className="uil uil-clock-two" />
                      année construction : {appartement.annee_construction}
                    </p>
                    <p>
                      <i className="uil uil-bolt-alt" />
                      DPE : {
                        appartement.diagnostic_performance_energetique
                      }{" "}
                    </p>
                    <p>etat bien : {appartement.etat_bien}</p>
                    <p>qualité luminosité : {appartement.luminosite}</p>
                    <p>calme : {appartement.calme}</p>
                    <p>proximité : {appartement.proximite_transports}</p>
                  </div>
                </div>
                <p>Estimmé a : {appartement.prix_estimation} €</p>
              </div>
            </div>
            <footer className="card-footer">
              <button
                onClick={this.onClickDelete.bind(this, appartement._id)}
                type="button"
                className="button is-warning card-footer-item"
              >
                <i className="uil uil-trash-alt" /> Supprimer
              </button>
            </footer>
          </div>
        );
      }
    );

    return (
      <div>
        <h1 className="mb-is-0_5">Mes Estimations d'appartements</h1>
        <div className="columns is-centered">
          <div className="column is-6">
            {this.props.savedAppartements.length === 0 ? (
              <div>
                <p>
                  <b>
                    Vous n'avez aucune estimation d'appartement sauvegardée{" "}
                  </b>
                </p>
                <Link
                  to="/estimmation/simple/appartement"
                  className="button is-success mt-is-0_5"
                >
                  <i class="uil uil-plus-circle" /> Estimmer Maintenant
                </Link>
              </div>
            ) : (
              appartementCards
            )}
          </div>
        </div>
      </div>
    );
  }
}

savedAppartements.propTypes = {
  getSavedAppartements: PropTypes.func.isRequired,
  deleteSavedAppartement: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  savedAppartements: state.simpleAppartements.savedAppartements
});

export default connect(
  mapStateToProps,
  { getSavedAppartements, deleteSavedAppartement }
)(savedAppartements);
