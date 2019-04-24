import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  getSavedBiens,
  deleteSavedBien
} from "../../../../actions/superBienActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class savedBiens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      biens: [],
      errors: {}
    };
  }

  componentDidMount() {
    this.props.getSavedBiens();
  }

  onClickDelete(id) {
    this.props.deleteSavedBien(id);
  }

  render() {
    var bienCards = this.props.savedBiens.map((bien, i) => {
      return (
        <div className="card mb-is-1" key={i}>
          <header className="card-header">
            <p className="card-header-title">Addresse :{bien.ville}</p>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="columns">
                <div className="column is-half">
                  <p>
                    {" "}
                    <i className="uil uil-ruler-combined" />
                    surface : {bien.surfaceTerrain}m²
                  </p>
                  <p>nombre pièces : {bien.nombrePieces}</p>
                  <p>nombre salle bain : {bien.nombreDeSanitaires}</p>
                  <p>Type Bien : {bien.typeBienAffiche}</p>
                  <p>nombre etage total : {bien.nombreNiveaux}</p>
                </div>
                <div className="column is-half">
                  <p>
                    <i className="uil uil-clock-two" />
                    année construction : {bien.anneeConstruction}
                  </p>
                  <p>
                    <i className="uil uil-bolt-alt" />
                    DPE : {bien.DPE}{" "}
                  </p>
                  <p>etat bien : {bien.etatGeneral}</p>
                  <p>qualité luminosité : {bien.luminosite}</p>
                  <p>Proximité: {bien.proximiteServicesPublics}</p>
                </div>
              </div>
              <p>Estimmé a : {bien.moyenne_des_methodes} €</p>
            </div>

            <footer className="card-footer">
              <button
                onClick={this.onClickDelete.bind(this, bien._id)}
                type="button"
                className="button is-warning card-footer-item"
              >
                <i className="uil uil-trash-alt" /> Supprimer
              </button>
            </footer>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h1 className="mb-is-0_5">Mes Estimations de biens</h1>
        <div className="columns is-centered">
          <div className="column is-6">{bienCards}</div>
        </div>
      </div>
    );
  }
}

savedBiens.propTypes = {
  getSavedBiens: PropTypes.func.isRequired,
  deleteSavedBien: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  savedBiens: state.superBiens.savedBiens
});

export default connect(
  mapStateToProps,
  { getSavedBiens, deleteSavedBien }
)(savedBiens);
