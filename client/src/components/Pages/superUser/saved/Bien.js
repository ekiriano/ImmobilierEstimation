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
                <h1>Client</h1> <hr/>
                  <div className="columns">
                    <div className="column is-half">
                      <p>
                        {" "}
                        Nom : {this.props.bien.nom}
                      </p>
                      <p>Email : {this.props.bien.email}</p>
                    </div>
                    <div className="column is-half">
                      <p>
                        Prénom : {this.props.bien.prenom}
                      </p>
                      <p>
                        Télephone : {this.props.bien.telephone}{" "}
                      </p>
                    </div>
                  </div>

                  <h1>Information sur le Bien</h1> <hr/>
                  <div className="columns">
                    <div className="column is-half">
                      <p>
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface terrain : {this.props.bien.surfaceTerrain}m²
                      </p>
                      <p>Nombre pièces : {this.props.bien.nombrePieces}</p>
                      <p>
                        Nombre de nivaux :{" "}
                        {this.props.bien.nombreNiveaux}
                      </p>
                      <p>GES : {this.props.bien.GES}</p>
                      <p>Charges de copropriete : {this.props.bien.chargesDeCopropriete} €</p>
                      <p>
                        Nombre etage total : {this.props.bien.nombreNiveaux}
                      </p>
                      <p>
                        Points forts : {this.props.bien.pointsForts}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p>
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface habitable : {this.props.bien.surfaceHabitable}m²
                      </p>
                      <p>Nombre de chambres : {this.props.bien.nombreChambres}</p>
                      <p>
                        <i className="uil uil-clock-two" />
                        Année construction : {this.props.bien.anneeConstruction}
                      </p>
                      <p>
                        <i className="uil uil-bolt-alt" />
                        DPE : {this.props.bien.DPE}{" "}
                      </p>
                      <p>Charges annuelles totales : {this.props.bien.chargesAnnuellesTotales} €</p>
                      <p>Type de bien : {this.props.bien.typeBienAffiche}</p>
                      <p>
                        Points faibles : {this.props.bien.pointsFaibles}
                      </p>
                    </div>
                  </div>

                  <h1>Elements du bien</h1> <hr/>
                  <h4>Elements pricipaux</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Etat du gros oeuvre : {this.props.bien.etatQualiteGrosOeuvre}
                        </p>
                        <p>Epoque de construction : {this.props.bien.epoqueConstruction}</p>
                        <p>
                          Mitoyenneté : {this.props.bien.mitoyennete}
                        </p>
                        <p>
                          Agrément général : {this.props.bien.agrementGeneral}{" "}
                        </p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Standing : {this.props.bien.standing}
                      </p>
                      <p>Accéssibilité : {this.props.bien.accessibilite}</p>
                      <p>
                        Tout a l'égout : {this.props.bien.toutAEgout}
                      </p>
                      </div>
                    </div>

                    <h4>Autres éléments</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Qualité Architecturale : {this.props.bien.qualiteArchitecturale}
                        </p>
                        <p>Etat des portes et fenetres : {this.props.bien.etatPortesEtFenetres}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Etat des toitures : {this.props.bien.etatDesToitures}
                      </p>
                      <p>Cloture Terrain(état/qualité) : {this.props.bien.clotureTerrain}</p>
                      </div>
                    </div>

                    <h4>Environnement</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Nuisances Sonores : {this.props.bien.nuissanceSonore}
                        </p>
                        <p>Voisinage/ vis-à-vis : {this.props.bien.voisinageVisaVis}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Proximite des services publiques : {this.props.bien.proximiteServicesPublics}
                      </p>
                      <p>Qualité de l'environnement : {this.props.bien.qualiteEnvironnement}</p>
                      </div>
                    </div>

                    <h4>Critère Généraux</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Qualité de la distribution : {this.props.bien.qualiteDistribution}
                        </p>
                        <p>Etat des murs et des plafonds : {this.props.bien.etatMursPlafonds}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Sols et revetement de sols : {this.props.bien.solsEtRevetementSols}
                      </p>
                      </div>
                    </div>

                    <h4>Séjour</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Taille du sejour : {this.props.bien.tailleSejour}
                        </p>
                        <p>Exposition du séjour : {this.props.bien.expositionSejour}</p>
                        <p>Vu du séjour : {this.props.bien.vueSejour}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Luminosité : {this.props.bien.luminosite}
                      </p>
                      <p>cheminée : {this.props.bien.cheminee}</p>
                      </div>
                    </div>

                    <h4>Cuisine</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Taille de la cuisine : {this.props.bien.taille}
                        </p>
                        <p>Equipement : {this.props.bien.equipement}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Agrément : {this.props.bien.agrement}
                      </p>
                      <p>Etat général : {this.props.bien.etatGeneral}</p>
                      </div>
                    </div>

                    <h4>Chambres</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Taille des pièces : {this.props.bien.tailleDesPieces}
                        </p>
                        <p>Etat des pièces : {this.props.bien.etatDesPieces}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Exposition aux bruits : {this.props.bien.expositionAuxBruits}
                      </p>
                      </div>
                    </div>

                    <h4>Sanitaires</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Taille des pièces sanitaires: {this.props.bien.taillePiecesSanitaires}
                        </p>
                        <p>Nombre de sanitaire : {this.props.bien.nombreDeSanitaires}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Qualité et etat des sanitaires : {this.props.bien.qualiteEtatSanitaires}
                      </p>
                      </div>
                    </div>

                    <h4>Energie</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Facture energitique: {this.props.bien.factureEnergetique}
                        </p>
                        <p>Installation électrique : {this.props.bien.installationElectrique}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Installation du gaz : {this.props.bien.installationGaz}
                      </p>
                      </div>
                    </div>

                    <h4>Annexes</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Balcon Loggia Terasse: {this.props.bien.balconLogiaTerasse}
                        </p>
                        <p>Cave / sous-sol : {this.props.bien.caveSousSol}</p>
                        <p>Agrément du jardin : {this.props.bien.agrementJardin}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Garage ou parking couvert : {this.props.bien.garageOuParkingOuvert}
                      </p>
                      <p>Combles : {this.props.bien.combles}</p>
                      </div>
                    </div>

                    <h1>Détails sur l'estimation</h1> <hr/>
                    <h4>Détails</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>
                          {" "}
                          Decote si bien vendu occupé: {this.props.bien.decoteBienOccupe}
                        </p>
                        <p>Autres élements: {this.props.bien.autresElements}</p>
                        <p>Travaux à réaliser: {this.props.bien.travauxARealiser}</p>
                      </div>
                      <div className="column is-half">
                      <p>
                        {" "}
                        Valorisation du terrain: {this.props.bien.valorisationTerrain}
                      </p>
                      <p>Rénové: {this.props.bien.renove}</p>
                      </div>
                    </div>

                    <h4>Méthodes</h4>
                    <div className="columns">
                      <div className="column is-half">
                        <p>Par capitalisation: {this.props.bien.prix_capitalisation} €</p>
                        <p>Par comparaison : {this.props.bien.prix_comparaison} €</p>
                      </div>
                      <div className="column is-half">
                      <p>Par référence : {this.props.bien.prix_reference} €</p>
                      </div>
                    </div>


                  <p>La moyenne des méthodes: {this.props.bien.moyenne_des_methodes} €</p>
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
