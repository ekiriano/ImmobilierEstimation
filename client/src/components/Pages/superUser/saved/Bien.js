import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  getSuperBien,
  deleteSavedBien
} from "../../../../actions/superBienActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

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
    if(this.props.bien.pointsForts){
    var pointsFortsList = this.props.bien.pointsForts.map(pointfort => (
      <li class="has-text-left">{pointfort}</li>
    ));
  }
  if(this.props.bien.pointsFaibles){
  var pointsFaiblesList = this.props.bien.pointsFaibles.map(pointfaible => (
    <li class="has-text-left">{pointfaible}</li>
  ));
}
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
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
                    A l'attention de monsieur {this.props.bien.nom}{" "}
                    {this.props.bien.prenom}, ayant les coordonnées:
                  </p>
                  <p>
                    Tél: {this.props.bien.telephone}, Email:{" "}
                    {this.props.bien.email}
                  </p>
                  <p>Descriptif du bien:</p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(this.props.bien.descriptifBien)
                    }}
                  />
                  <h1 class="has-text-left">Votre Bien</h1> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface terrain : {this.props.bien.surfaceTerrain}m²
                      </p>
                      <p class="has-text-left">Nombre pièces : {this.props.bien.nombrePieces}</p>
                      <p class="has-text-left">Nombre de nivaux : {this.props.bien.nombreNiveaux}</p>
                      <p class="has-text-left">GES : {this.props.bien.GES}</p>
                      <p class="has-text-left">
                        Charges de copropriete :{" "}
                        {this.props.bien.chargesDeCopropriete} €
                      </p>
                      <p class="has-text-left">
                        Valeur Locative : {this.props.bien.valeurLocative} €
                      </p>
                      <p class="has-text-left">
                        Nombre etage total : {this.props.bien.nombreNiveaux}
                      </p>

                      <p class="has-text-left">
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
                      <p class="has-text-left">
                        {" "}
                        <i className="uil uil-ruler-combined" />
                        Surface habitable : {this.props.bien.surfaceHabitable}m²
                      </p>
                      <p class="has-text-left">
                        Nombre de chambres : {this.props.bien.nombreChambres}
                      </p>
                      <p class="has-text-left">
                        <i className="uil uil-clock-two" />
                        Année construction : {this.props.bien.anneeConstruction}
                      </p>
                      <p class="has-text-left">
                        <i className="uil uil-bolt-alt" />
                        DPE : {this.props.bien.DPE}{" "}
                      </p>
                      <p class="has-text-left">
                        Charges annuelles totales :{" "}
                        {this.props.bien.chargesAnnuellesTotales} €
                      </p>
                      <p class="has-text-left">Type de bien : {this.props.bien.typeBienAffiche}</p>
                      <p class="has-text-left">
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
                  <p class="has-text-left">Commentaire confidentiel: </p>
                  <div class="has-text-left"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        this.props.bien.commentairesConfidentiels
                      )
                    }}
                  />
                  <h1 class="has-text-left">Elements du bien</h1> <hr />
                  <h4 class="has-text-left">Elements pricipaux</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Etat du gros oeuvre :{" "}
                        {this.props.bien.etatQualiteGrosOeuvre}
                      </p>
                      <p class="has-text-left">
                        Epoque de construction :{" "}
                        {this.props.bien.epoqueConstruction}
                      </p>
                      <p class="has-text-left">Mitoyenneté : {this.props.bien.mitoyennete}</p>
                      <p class="has-text-left">
                        Agrément général : {this.props.bien.agrementGeneral}{" "}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left"> Standing : {this.props.bien.standing}</p>
                      <p class="has-text-left">Accéssibilité : {this.props.bien.accessibilite}</p>
                      <p class="has-text-left">Tout a l'égout : {this.props.bien.toutAEgout}</p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Autres éléments</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Qualité Architecturale :{" "}
                        {this.props.bien.qualiteArchitecturale}
                      </p>
                      <p class="has-text-left">
                        Etat des portes et fenetres :{" "}
                        {this.props.bien.etatPortesEtFenetres}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Etat des toitures : {this.props.bien.etatDesToitures}
                      </p>
                      <p class="has-text-left">
                        Cloture Terrain(état/qualité) :{" "}
                        {this.props.bien.clotureTerrain}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Environnement</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Nuisances Sonores : {this.props.bien.nuissanceSonore}
                      </p>
                      <p class="has-text-left">
                        Voisinage/ vis-à-vis :{" "}
                        {this.props.bien.voisinageVisaVis}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Proximite des services publiques :{" "}
                        {this.props.bien.proximiteServicesPublics}
                      </p>
                      <p class="has-text-left">
                        Qualité de l'environnement :{" "}
                        {this.props.bien.qualiteEnvironnement}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Critère Généraux</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Qualité de la distribution :{" "}
                        {this.props.bien.qualiteDistribution}
                      </p>
                      <p class="has-text-left">
                        Etat des murs et des plafonds :{" "}
                        {this.props.bien.etatMursPlafonds}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Sols et revetement de sols :{" "}
                        {this.props.bien.solsEtRevetementSols}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Séjour</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left"> Taille du sejour : {this.props.bien.tailleSejour}</p>
                      <p class="has-text-left">
                        Exposition du séjour :{" "}
                        {this.props.bien.expositionSejour}
                      </p>
                      <p class="has-text-left">Vu du séjour : {this.props.bien.vueSejour}</p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left"> Luminosité : {this.props.bien.luminosite}</p>
                      <p class="has-text-left">cheminée : {this.props.bien.cheminee}</p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Cuisine</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left"> Taille de la cuisine : {this.props.bien.taille}</p>
                      <p class="has-text-left">Equipement : {this.props.bien.equipement}</p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left"> Agrément : {this.props.bien.agrement}</p>
                      <p class="has-text-left">Etat général : {this.props.bien.etatGeneral}</p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Chambres</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Taille des pièces : {this.props.bien.tailleDesPieces}
                      </p>
                      <p class="has-text-left">Etat des pièces : {this.props.bien.etatDesPieces}</p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Exposition aux bruits :{" "}
                        {this.props.bien.expositionAuxBruits}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Sanitaires</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Taille des pièces sanitaires:{" "}
                        {this.props.bien.taillePiecesSanitaires}
                      </p>
                      <p class="has-text-left">
                        Nombre de sanitaire :{" "}
                        {this.props.bien.nombreDeSanitaires}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Qualité et etat des sanitaires :{" "}
                        {this.props.bien.qualiteEtatSanitaires}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Energie</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Facture energitique:{" "}
                        {this.props.bien.factureEnergetique}
                      </p>
                      <p class="has-text-left">
                        Installation électrique :{" "}
                        {this.props.bien.installationElectrique}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Installation du gaz : {this.props.bien.installationGaz}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Annexes</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Balcon Loggia Terasse:{" "}
                        {this.props.bien.balconLogiaTerasse}
                      </p>
                      <p class="has-text-left">Cave / sous-sol : {this.props.bien.caveSousSol}</p>
                      <p class="has-text-left">
                        Agrément du jardin : {this.props.bien.agrementJardin}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Garage ou parking couvert :{" "}
                        {this.props.bien.garageOuParkingOuvert}
                      </p>
                      <p class="has-text-left">Combles : {this.props.bien.combles}</p>
                    </div>
                  </div>
                  <h1 class="has-text-left">Détails sur l'estimation</h1> <hr />
                  <h4 class="has-text-left">Détails</h4> <hr />
                  <div className="columns">
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Decote si bien vendu occupé:{" "}
                        {this.props.bien.decoteBienOccupe}
                      </p>
                      <p class="has-text-left">Autres élements: {this.props.bien.autresElements}</p>
                      <p class="has-text-left">
                        Travaux à réaliser: {this.props.bien.travauxARealiser}
                      </p>
                    </div>
                    <div className="column is-half">
                      <p class="has-text-left">
                        {" "}
                        Valorisation du terrain:{" "}
                        {this.props.bien.valorisationTerrain}
                      </p>
                      <p class="has-text-left">Rénové: {this.props.bien.renove}</p>
                      <p class="has-text-left">
                        Taux de capitalisation:{" "}
                        {this.props.bien.tauxCapitalisation}
                      </p>
                    </div>
                  </div>
                  <h4 class="has-text-left">Méthodes</h4> <hr />
                  <div className="columns">
                    <div className="column is-4">
                      <p>
                        Par capitalisation:{" "}
                        {this.props.bien.prix_capitalisation} €
                      </p>
                    </div>
                    <div className="column is-4">
                      <p>
                        Par comparaison : {this.props.bien.prix_comparaison} €
                      </p>
                    </div>
                    <div className="column is-4">
                      <p>Par référence : {this.props.bien.prix_reference} €</p>
                    </div>
                  </div>
                  <p>
                    La moyenne des méthodes:{" "}
                    {this.props.bien.moyenne_des_methodes} €
                  </p>
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
