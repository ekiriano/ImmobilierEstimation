import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getSuperBien,
  deleteSavedBien
} from "../../../../actions/superBienActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Bien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bien: {}
    };
  }

  componentDidMount() {
    this.props.getSuperBien(this.props.match.params.id);
    this.setState({ bien: this.props.bien });
  }
  onClickDelete(id) {
    this.props.deleteSavedBien(id);
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1>Recapitulatif complet de votre estimmation : </h1>
            <div className="card mt-is-5percentgit p mb-is-1">
              <header className="card-header">
                <p className="card-header-title">
                  Addresse :{this.props.bien.voie} ,{this.props.bien.codePostal}{" "}
                  {this.props.bien.ville}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <div className="columns">
                    <div className="column is-half">
                      <p>
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface : {this.props.bien.surfaceTerrain}m²
                      </p>
                      <p>Nombre pièces : {this.props.bien.nombrePieces}</p>
                      <p>
                        Charges annuelles :{" "}
                        {this.props.bien.chargesAnnuellesTotales}
                      </p>
                      <p>Impots fonciers: {this.props.bien.impotsFonciers}</p>
                      <p>
                        Nombre etage total : {this.props.bien.nombreNiveaux}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p>
                        <i className="uil uil-clock-two" />
                        Année construction : {this.props.bien.anneeConstruction}
                      </p>
                      <p>
                        <i className="uil uil-bolt-alt" />
                        DPE : {this.props.bien.DPE}{" "}
                      </p>
                      <p>Etat bien : {this.props.bien.etatGeneral}</p>
                      <p>Luminosité : {this.props.bien.luminosite}</p>
                      <p>Type Bien : {this.props.bien.typeBienAffiche}</p>
                    </div>
                  </div>
                  <p>Estimmé a : {this.props.bien.moyenne_des_methodes} €</p>
                </div>

                <footer className="card-footer">
                  <button
                    onClick={this.onClickDelete.bind(this, this.props.bien._id)}
                    type="button"
                    className="button is-warning card-footer-item"
                  >
                    <i className="uil uil-trash-alt" /> Supprimer
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Bien.propTypes = {
  getSuperBien: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  bien: state.superBiens.bien
});

export default connect(
  mapStateToProps,
  { getSuperBien }
)(Bien);
