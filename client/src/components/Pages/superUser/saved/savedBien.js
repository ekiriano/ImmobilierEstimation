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
            <p className="card-header-title">
              Addresse :{bien.voie}, {bien.codePostal} {bien.ville}
            </p>
            <Link
              to={"/saved/superbien/" + bien._id}
              className="button is-success"
            >
              Voir estimmation complète
            </Link>
          </header>
          <div className="card-content">
            <div className="content">
              <div className="columns">
                <div className="column is-half">
                  <p>
                    {" "}
                    <i className="uil uil-ruler-combined" />
                    Surface : {bien.surfaceTerrain}m²
                  </p>
                  <p>Nombre pièces : {bien.nombrePieces}</p>
                  <p>Charges annuelles : {bien.chargesAnnuellesTotales}</p>
                  <p>Impots fonciers: {bien.impotsFonciers}</p>
                  <p>Nombre etage total : {bien.nombreNiveaux}</p>
                </div>
                <div className="column is-half">
                  <p>
                    <i className="uil uil-clock-two" />
                    Année construction : {bien.anneeConstruction}
                  </p>
                  <p>
                    <i className="uil uil-bolt-alt" />
                    DPE : {bien.DPE}{" "}
                  </p>
                  <p>Etat bien : {bien.etatGeneral}</p>
                  <p>Luminosité : {bien.luminosite}</p>
                  <p>Type Bien : {bien.typeBienAffiche}</p>
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
