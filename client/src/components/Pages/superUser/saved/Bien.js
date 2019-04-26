import React, { Component } from "react";

import PropTypes from "prop-types";
import { getSuperBien } from "../../../../actions/superBienActions";
import { connect } from "react-redux";

import DOMPurify from "dompurify";

import ExportPDFButton from "./ExportPDFButton";

class Bien extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bien: {}
    };
  }

  componentDidMount() {
    this.props.getSuperBien(this.props.match.params.id);
  }

  render() {
    if (this.props.bien.pointsForts) {
      var pointsFortsList = this.props.bien.pointsForts.map(pointfort => (
        <li className="has-text-left">{pointfort}</li>
      ));
    }
    if (this.props.bien.pointsFaibles) {
      var pointsFaiblesList = this.props.bien.pointsFaibles.map(pointfaible => (
        <li className="has-text-left">{pointfaible}</li>
      ));
    }

    return (
      <div className="container">
        <div className="columns">
          <div className="column" id="pdf">
            <h1>Recapitulatif complet de votre estimmation : </h1>
            <div className="card mt-is-5percentgit p mb-is-1">
              <header className="card-header">
                <p className="card-header-title is-centered">
                  Addresse :{this.props.bien.voie} ,{this.props.bien.codePostal}{" "}
                  {this.props.bien.ville}
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p>
                    A l'attention de {this.props.civilite} {this.props.bien.nom}{" "}
                    {this.props.bien.prenom}, ayant les coordonnées:
                  </p>
                  <p>
                    Tél: {this.props.bien.telephone}, Email:{" "}
                    {this.props.bien.email}
                  </p>
                  <p className="has-text-weight-bold">Descriptif du bien:</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(this.props.bien.descriptifBien)
                    }}
                  />
                  <h1 className="has-text-left has-text-weight-bold	">
                    Votre Bien
                  </h1>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface terrain : {this.props.bien.surfaceTerrain}m²
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Nombre pièces : {this.props.bien.nombrePieces}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Nombre de nivaux : {this.props.bien.nombreNiveaux}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        GES : {this.props.bien.GES}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Charges de copropriete :{" "}
                        {this.props.bien.chargesDeCopropriete} €
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Valeur Locative : {this.props.bien.valeurLocative} €
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Nombre etage total : {this.props.bien.nombreNiveaux}
                      </p>

                      <p className="has-text-left has-text-weight-bold">
                        <i className="uil uil-plus-circle" />
                        Points forts :{" "}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              this.props.bien.pointsFortsList
                            )
                          }}
                        />
                      </p>
                      <div>
                        <ul>{pointsFortsList}</ul>
                      </div>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface habitable : {this.props.bien.surfaceHabitable}m²
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Nombre de chambres : {this.props.bien.nombreChambres}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        <i className="uil uil-clock-two" />
                        Année construction : {this.props.bien.anneeConstruction}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        <i className="uil uil-bolt-alt" />
                        DPE : {this.props.bien.DPE}{" "}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Charges annuelles totales :{" "}
                        {this.props.bien.chargesAnnuellesTotales} €
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Type de bien : {this.props.bien.typeBienAffiche}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        <i className="uil uil-minus-circle" />
                        Points faibles :{" "}
                        <div
                          dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(
                              this.props.bien.pointsFaiblesList
                            )
                          }}
                        />
                      </p>
                      <div>
                        <ul>{pointsFaiblesList}</ul>
                      </div>
                    </div>
                  </div>
                  <p className="has-text-left has-text-weight-bold">Commentaire confidentiel: </p>
                  <div
                    className="has-text-left"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        this.props.bien.commentairesConfidentiels
                      )
                    }}
                  />
                  <h1 className="has-text-left has-text-weight-bold	">
                    Elements du bien
                  </h1>{" "}
                  <hr />
                  <h4 className="has-text-left has-text-weight-bold">
                    Elements pricipaux
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Etat du gros oeuvre :{" "}
                        {this.props.bien.etatQualiteGrosOeuvre}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Epoque de construction :{" "}
                        {this.props.bien.epoqueConstruction}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Mitoyenneté : {this.props.bien.mitoyennete}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Agrément général : {this.props.bien.agrementGeneral}{" "}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Standing : {this.props.bien.standing}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Accéssibilité : {this.props.bien.accessibilite}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Tout a l'égout : {this.props.bien.toutAEgout}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Autres éléments
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Qualité Architecturale :{" "}
                        {this.props.bien.qualiteArchitecturale}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Etat des portes et fenetres :{" "}
                        {this.props.bien.etatPortesEtFenetres}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Etat des toitures : {this.props.bien.etatDesToitures}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Cloture Terrain(état/qualité) :{" "}
                        {this.props.bien.clotureTerrain}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Environnement
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Nuisances Sonores : {this.props.bien.nuissanceSonore}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Voisinage/ vis-à-vis :{" "}
                        {this.props.bien.voisinageVisaVis}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Proximite des services publiques :{" "}
                        {this.props.bien.proximiteServicesPublics}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Qualité de l'environnement :{" "}
                        {this.props.bien.qualiteEnvironnement}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Critère Généraux
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Qualité de la distribution :{" "}
                        {this.props.bien.qualiteDistribution}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Etat des murs et des plafonds :{" "}
                        {this.props.bien.etatMursPlafonds}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Sols et revetement de sols :{" "}
                        {this.props.bien.solsEtRevetementSols}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">Séjour</h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Taille du sejour : {this.props.bien.tailleSejour}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Exposition du séjour :{" "}
                        {this.props.bien.expositionSejour}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Vu du séjour : {this.props.bien.vueSejour}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Luminosité : {this.props.bien.luminosite}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        cheminée : {this.props.bien.cheminee}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Cuisine
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Taille de la cuisine : {this.props.bien.taille}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Equipement : {this.props.bien.equipement}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Agrément : {this.props.bien.agrement}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Etat général : {this.props.bien.etatGeneral}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Chambres
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Taille des pièces : {this.props.bien.tailleDesPieces}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Etat des pièces : {this.props.bien.etatDesPieces}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Exposition aux bruits :{" "}
                        {this.props.bien.expositionAuxBruits}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Sanitaires
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Taille des pièces sanitaires:{" "}
                        {this.props.bien.taillePiecesSanitaires}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Nombre de sanitaire :{" "}
                        {this.props.bien.nombreDeSanitaires}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Qualité et etat des sanitaires :{" "}
                        {this.props.bien.qualiteEtatSanitaires}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Energie
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Facture energitique:{" "}
                        {this.props.bien.factureEnergetique}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Installation électrique :{" "}
                        {this.props.bien.installationElectrique}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Installation du gaz : {this.props.bien.installationGaz}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Annexes
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Balcon Loggia Terasse:{" "}
                        {this.props.bien.balconLogiaTerasse}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Cave / sous-sol : {this.props.bien.caveSousSol}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Agrément du jardin : {this.props.bien.agrementJardin}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Garage ou parking couvert :{" "}
                        {this.props.bien.garageOuParkingOuvert}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Combles : {this.props.bien.combles}
                      </p>
                    </div>
                  </div>
                  <h1 className="has-text-left has-text-weight-bold	">
                    Détails sur l'estimation
                  </h1>{" "}
                  <hr />
                  <h4 className="has-text-left has-text-weight-bold	">
                    Détails
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Decote si bien vendu occupé:{" "}
                        {this.props.bien.decoteBienOccupe}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Autres élements: {this.props.bien.autresElements}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Travaux à réaliser: {this.props.bien.travauxARealiser}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p className="has-text-left has-text-weight-bold">
                        {" "}
                        Valorisation du terrain:{" "}
                        {this.props.bien.valorisationTerrain}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Rénové: {this.props.bien.renove}
                      </p>
                      <p className="has-text-left has-text-weight-bold">
                        Taux de capitalisation:{" "}
                        {this.props.bien.tauxCapitalisation}
                      </p>
                    </div>
                  </div>
                  <h4 className="has-text-left has-text-weight-bold	">
                    Méthodes
                  </h4>{" "}
                  <hr />
                  <div className="columns">
                    <div className="column is-4">
                      <p className="has-text-weight-bold">
                        Par capitalisation:{" "}
                        {this.props.bien.prix_capitalisation} €
                      </p>
                    </div>
                    <div className="column is-4">
                      <p className="has-text-weight-bold">
                        Par comparaison : {this.props.bien.prix_comparaison} €
                      </p>
                    </div>
                    <div className="column is-4">
                      <p className="has-text-weight-bold">Par référence : {this.props.bien.prix_reference} €</p>
                    </div>
                  </div>
                  <p className="has-text-weight-bold">
                    La moyenne des méthodes:{" "}
                    {this.props.bien.moyenne_des_methodes} €
                  </p>
                </div>

                <footer className="card-footer">
                  <div className="card-footer-item">
                    <ExportPDFButton
                      id={"pdf"}
                      label={
                        <p>
                          {" "}
                          <i className="uil uil-down-arrow" />
                          Exportez en PDF
                        </p>
                      }
                      name={this.props.bien._id}
                    />
                  </div>
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
