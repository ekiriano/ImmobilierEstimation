import React, { Component, Fragment } from "react";

import { submitSuperBienSave } from "../../../actions/superBienActions";

import PropTypes from "prop-types";

import { connect } from "react-redux";

import Step1 from "./Step1Super";
import Step2 from "./Step2Super";
import Step3 from "./Step3Super";
import Step4 from "./Step4Super";
import "./step.css";

class SuperMasterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      user: {},
      errors: {},
      civilite: "",
      prenom: "",
      nom: "",
      adressePostale: "",
      email: "",
      telephone: "",
      numero: "",
      voie: "",
      codePostal: "",
      ville: "",
      anneeConstruction: "",
      typeBienAffiche: "",
      nombrePieces: "",
      nombreChambres: "",
      surfaceHabitable: "",
      surfaceTerrain: "",
      nombreNiveaux: "",
      ascenseur: "",
      balconOuTerrasse: "",
      LibreALaVente: "",
      titreDossier: "",
      descriptifBien: "",
      DPE: "",
      GES: "",
      prixMandat: "",
      chargesAnnuellesTotales: "",
      chargesDeCopropriete: "",
      impotsFonciers: "",
      annexes: "",
      pointsForts: [],
      pointsFaibles: [],
      commentairesConfidentiels: "",
      etatQualiteGrosOeuvre: "",
      epoqueConstruction: "",
      mitoyennete: "",
      agrementGeneral: "",
      standing: "",
      accessibilite: "",
      toutAEgout: "",
      qualiteArchitecturale: "",
      etatPortesEtFenetres: "",
      etatDesToitures: "",
      clotureTerrain: "",
      nuissanceSonore: "",
      voisinageVisaVis: "",
      qualiteEnvironnement: "",
      proximiteServicesPublics: "",
      qualiteDistribution: "",
      etatMursPlafonds: "",
      solsEtRevetementSols: "",
      tailleSejour: "",
      expositionSejour: "",
      vueSejour: "",
      luminosite: "",
      cheminee: "",
      taille: "",
      equipement: "",
      etatGeneral: "",
      agrement: "",
      tailleDesPieces: "",
      etatDesPieces: "",
      expositionAuxBruits: "",
      taillePiecesSanitaires: "",
      nombreDeSanitaires: "",
      qualiteEtatSanitaires: "",
      factureEnergetique: "",
      installationElectrique: "",
      installationGaz: "",
      balconLogiaTerasse: "",
      caveSousSol: "",
      agrementJardin: "",
      garageOuParkingOuvert: "",
      combles: "",
      decoteBienOccupe: "",
      decoteBienOccupeR: "",
      autresElements: "",
      autresElementsR: "",
      travauxARealiser: "",
      travauxARealiserR: "",
      valorisationTerrain: "",
      valorisationTerrainR: "",
      renove: "",
      renoveR: "",
      affichageNetVendeur: "",
      methodeReferenceSelected: false,
      methodeComparaisonSelected: false,
      methodeCapitalisationSelected: false,
      prix_capitalisation: 0,
      prix_comparaison: 0,
      prix_reference: 0,
      prix_final: 0,
      moyenne_des_methodes: 0,
      textePredifiniR: "",
      textePredifini: ""
    };

    this.onChange = this.onChange.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.addPointFort = this.addPointFort.bind(this);
    this.deletePointFort = this.deletePointFort.bind(this);
    this.addPointFaible = this.addPointFaible.bind(this);
    this.deletePointFaible = this.deletePointFaible.bind(this);
    this.onChangeComConf = this.onChangeComConf.bind(this);
    this.onChangeDescriptif = this.onChangeDescriptif.bind(this);
  }

  addPointFort(pointfort) {
    if (pointfort === "") return;
    var newArray = this.state.pointsForts;
    newArray.push(pointfort);
    this.setState({ pointsForts: newArray });
    // this.setState({ pointfortInputValue: "" });
  }
  deletePointFort(index) {
    var newArray = this.state.pointsForts;
    newArray.splice(index, 1);
    this.setState({ pointsForts: newArray });
  }

  addPointFaible(pointfaible) {
    if (pointfaible === "") return;

    var newArray = this.state.pointsFaibles;
    newArray.push(pointfaible);
    this.setState({ pointsFaibles: newArray });

    // this.setState({ pointfortInputValue: "" });
  }

  deletePointFaible(index) {
    console.log("hit");
    var newArray = this.state.pointsFaibles;
    newArray.splice(index, 1);
    this.setState({ pointsFaibles: newArray });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onChangeComConf(commenConf) {
    this.setState({ commentairesConfidentiels: commenConf });
  }
  onChangeDescriptif(desc) {
    this.setState({ descriptifBien: desc });
  }

  onSubmit(e) {
    e.preventDefault();

    const newBienSuper = {
      civilite: this.state.civilite,
      nom: this.state.nom,
      prenom: this.state.prenom,
      adressePostale: this.state.adressePostale,
      telephone: this.state.telephone,
      email: this.state.email,
      numero: this.state.numero,
      voie: this.state.voie,
      codePostal: this.state.codePostal,
      ville: this.state.ville,
      anneeConstruction: this.state.anneeConstruction,
      typeBienAffiche: this.state.typeBienAffiche,
      nombrePieces: this.state.nombrePieces,
      nombreChambres: this.state.nombreChambres,
      surfaceHabitable: this.state.surfaceHabitable,
      surfaceTerrain: this.state.surfaceTerrain,
      nombreNiveaux: this.state.nombreNiveaux,
      ascenseur: this.state.ascenseur,
      balconOuTerrasse: this.state.balconOuTerrasse,
      LibreALaVente: this.state.LibreALaVente,
      titreDossier: this.state.titreDossier,
      descriptifBien: this.state.descriptifBien,
      DPE: this.state.DPE,
      GES: this.state.GES,
      prixMandat: this.state.prixMandat,
      chargesAnnuellesTotales: this.state.chargesAnnuellesTotales,
      chargesDeCopropriete: this.state.chargesDeCopropriete,
      impotsFonciers: this.state.impotsFonciers,
      annexes: this.state.annexes,
      pointsForts: this.state.pointsForts,
      pointsFaibles: this.state.pointsFaibles,
      commentairesConfidentiels: this.state.commentairesConfidentiels,
      etatQualiteGrosOeuvre: this.state.etatQualiteGrosOeuvre,
      epoqueConstruction: this.state.epoqueConstruction,
      mitoyennete: this.state.mitoyennete,
      agrementGeneral: this.state.agrementGeneral,
      standing: this.state.standing,
      accessibilite: this.state.accessibilite,
      toutAEgout: this.state.toutAEgout,
      qualiteArchitecturale: this.state.qualiteArchitecturale,
      etatPortesEtFenetres: this.state.etatPortesEtFenetres,
      etatDesToitures: this.state.etatDesToitures,
      clotureTerrain: this.state.clotureTerrain,
      nuissanceSonore: this.state.nuissanceSonore,
      voisinageVisaVis: this.state.voisinageVisaVis,
      qualiteEnvironnement: this.state.qualiteEnvironnement,
      proximiteServicesPublics: this.state.proximiteServicesPublics,
      qualiteDistribution: this.state.qualiteDistribution,
      etatMursPlafonds: this.state.etatMursPlafonds,
      solsEtRevetementSols: this.state.solsEtRevetementSols,
      tailleSejour: this.state.tailleSejour,
      expositionSejour: this.state.expositionSejour,
      vueSejour: this.state.vueSejour,
      luminosite: this.state.luminosite,
      cheminee: this.state.cheminee,
      taille: this.state.taille,
      equipement: this.state.equipement,
      etatGeneral: this.state.etatGeneral,
      agrement: this.state.agrement,
      tailleDesPieces: this.state.tailleDesPieces,
      etatDesPieces: this.state.etatDesPieces,
      expositionAuxBruits: this.state.expositionAuxBruits,
      taillePiecesSanitaires: this.state.taillePiecesSanitaires,
      nombreDeSanitaires: this.state.nombreDeSanitaires,
      qualiteEtatSanitaires: this.state.qualiteEtatSanitaires,
      factureEnergetique: this.state.factureEnergetique,
      installationElectrique: this.state.installationElectrique,
      installationGaz: this.state.installationGaz,
      balconLogiaTerasse: this.state.balconOuTerrasse,
      caveSousSol: this.state.caveSousSol,
      agrementJardin: this.state.agrementJardin,
      garageOuParkingOuvert: this.state.garageOuParkingOuvert,
      combles: this.state.combles,
      renove: this.state.renove,
      renoveR: this.state.renoveR,
      valorisationTerrain: this.state.valorisationTerrain,
      valorisationTerrainR: this.state.valorisationTerrainR,
      autresElements: this.state.autresElements,
      autresElementsR: this.state.autresElementsR,
      travauxARealiser: this.state.travauxARealiser,
      travauxARealiserR: this.state.travauxARealiserR,
      methodeCapitalisationSelected: this.methodeCapitalisationSelected,
      methodeReferenceSelected: this.methodeReferenceSelected,
      methodeComparaisonSelected: this.methodeComparaisonSelected,
      prix_comparaison: this.state.prix_comparaison,
      moyenne_des_methodes: this.state.moyenne_des_methodes,
      prix_capitalisation: this.state.prix_capitalisation,
      prix_reference: this.state.prix_reference,
      prix_final: this.state.prix_final
    };
    this.props.submitSuperBienSave(newBienSuper);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    if (nextProps.newEstimationBien) {
      this.setState({
        prix_comparaison: nextProps.newEstimationBien.prix_comparaison,
        moyenne_des_methodes: nextProps.newEstimationBien.moyenne_des_methodes
      });
    }
  }

  next() {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 3 ? 4 : currentStep + 1;
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
    if (currentStep < 4) {
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

    if (currentStep === 4) {
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

  render() {
    return (
      <div className="column is-12">
        <div className="dashboard-main">
          <div className="dashboard-main-header" />
          <div className="row">
            <div className="columns dashboard-body-header">
              <div className="column">
                <Fragment>
                  <form
                    noValidate
                    onSubmit={this.onSubmit}
                    className="form-bg form-full-height is-vertical-center"
                  >
                    <Step1
                      currentStep={this.state.currentStep}
                      onChange={this.onChange}
                      errors={this.state.errors}
                      civilite={this.state.civilite}
                      prenom={this.state.prenom}
                      nom={this.state.nom}
                      adressePostale={this.state.adressePostale}
                      email={this.state.email}
                      telephone={this.state.telephone}
                    />

                    <Step2
                      currentStep={this.state.currentStep}
                      onChange={this.onChange}
                      errors={this.state.errors}
                      numero={this.state.numero}
                      voie={this.state.voie}
                      codePostal={this.state.codePostal}
                      ville={this.state.ville}
                      anneeConstruction={this.state.anneeConstruction}
                      typeBienAffiche={this.state.typeBienAffiche}
                      nombrePieces={this.state.nombrePieces}
                      nombreChambres={this.state.nombreChambres}
                      surfaceHabitable={this.state.surfaceHabitable}
                      surfaceTerrain={this.state.surfaceTerrain}
                      nombreNiveaux={this.state.nombreNiveaux}
                      ascenseur={this.state.ascenseur}
                      balconOuTerrasse={this.state.balconOuTerrasse}
                      LibreALaVente={this.state.LibreALaVente}
                      titreDossier={this.state.titreDossier}
                      descriptifBien={this.state.descriptifBien}
                      DPE={this.state.DPE}
                      GES={this.state.GES}
                      prixMandat={this.state.prixMandat}
                      chargesAnnuellesTotales={
                        this.state.chargesAnnuellesTotales
                      }
                      chargesDeCopropriete={this.state.chargesDeCopropriete}
                      impotsFonciers={this.state.impotsFonciers}
                      annexes={this.state.annexes}
                      pointsForts={this.state.pointsForts}
                      pointsFaibles={this.state.pointsFaibles}
                      commentairesConfidentiels={
                        this.state.commentairesConfidentiels
                      }
                      addPointFort={this.addPointFort}
                      addPointFaible={this.addPointFaible}
                      deletePointFort={this.deletePointFort}
                      deletePointFaible={this.deletePointFaible}
                      onChangeComConf={this.onChangeComConf}
                      onChangeDescriptif={this.onChangeDescriptif}
                    />
                    <Step3
                      currentStep={this.state.currentStep}
                      onChange={this.onChange}
                      errors={this.state.errors}
                      etatQualiteGrosOeuvre={this.state.etatQualiteGrosOeuvre}
                      epoqueConstruction={this.state.epoqueConstruction}
                      mitoyennete={this.state.mitoyennete}
                      agrementGeneral={this.state.agrementGeneral}
                      standing={this.state.standing}
                      accessibilite={this.state.accessibilite}
                      toutAEgout={this.state.toutAEgout}
                      qualiteArchitecturale={this.state.qualiteArchitecturale}
                      etatPortesEtFenetres={this.state.etatPortesEtFenetres}
                      etatDesToitures={this.state.etatDesToitures}
                      clotureTerrain={this.state.clotureTerrain}
                      nuissanceSonore={this.state.nuissanceSonore}
                      voisinageVisaVis={this.state.voisinageVisaVis}
                      qualiteEnvironnement={this.state.qualiteEnvironnement}
                      proximiteServicesPublics={
                        this.state.proximiteServicesPublics
                      }
                      qualiteDistribution={this.state.qualiteDistribution}
                      etatMursPlafonds={this.state.etatMursPlafonds}
                      solsEtRevetementSols={this.state.solsEtRevetementSols}
                      tailleSejour={this.state.tailleSejour}
                      expositionSejour={this.state.expositionSejour}
                      vueSejour={this.state.vueSejour}
                      luminosite={this.state.luminosite}
                      cheminee={this.state.cheminee}
                      taille={this.state.taille}
                      equipement={this.state.equipement}
                      etatGeneral={this.state.etatGeneral}
                      agrement={this.state.agrement}
                      tailleDesPieces={this.state.tailleDesPieces}
                      etatDesPieces={this.state.etatDesPieces}
                      expositionAuxBruits={this.state.expositionAuxBruits}
                      taillePiecesSanitaires={this.state.taillePiecesSanitaires}
                      nombreDeSanitaires={this.state.nombreDeSanitaires}
                      qualiteEtatSanitaires={this.state.qualiteEtatSanitaires}
                      factureEnergetique={this.state.factureEnergetique}
                      installationElectrique={this.state.installationElectrique}
                      installationGaz={this.state.installationGaz}
                      balconLogiaTerasse={this.state.balconLogiaTerasse}
                      caveSousSol={this.state.caveSousSol}
                      agrementJardin={this.state.agrementJardin}
                      garageOuParkingOuvert={this.state.garageOuParkingOuvert}
                      combles={this.state.combles}
                    />

                    <Step4
                      currentStep={this.state.currentStep}
                      onChange={this.onChange}
                      errors={this.state.errors}
                      decoteBienOccupe={this.state.decoteBienOccupe}
                      decoteBienOccupeR={this.state.decoteBienOccupeR}
                      autresElements={this.state.autresElements}
                      autresElementsR={this.state.autresElementsR}
                      travauxARealiser={this.state.travauxARealiser}
                      travauxARealiserR={this.state.travauxARealiserR}
                      valorisationTerrain={this.state.valorisationTerrain}
                      valorisationTerrainR={this.state.valorisationTerrainR}
                      renove={this.state.renove}
                      renoveR={this.state.renoveR}
                      textePredifini={this.state.textePredifini}
                      textePredifiniR={this.state.textePredifiniR}
                      affichageNetVendeur={this.state.affichageNetVendeur}
                      methodeReferenceSelected={
                        this.state.methodeReferenceSelected
                      }
                      methodeComparaisonSelected={
                        this.state.methodeComparaisonSelected
                      }
                      methodeCapitalisationSelected={
                        this.state.methodeCapitalisationSelected
                      }
                      moyenne_des_methodes={this.props.moyenne_des_methodes}
                      prix_capitalisation={this.state.prix_capitalisation}
                      prix_comparaison={this.state.prix_comparaison}
                      prix_reference={this.state.prix_reference}
                      prix_final={this.state.prix_final}
                      ville={this.state.ville}
                    />

                    {this.previousButton}
                    {this.nextButton}
                    {this.submitButton}
                  </form>
                </Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SuperMasterForm.propTypes = {
  submitSuperBienSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  user: state.auth.user,
  errors: state.errors,
  newEstimationBien: state.superBiens.newEstimationBien
});

export default connect(
  mapStateProps,
  { submitSuperBienSave }
)(SuperMasterForm);
