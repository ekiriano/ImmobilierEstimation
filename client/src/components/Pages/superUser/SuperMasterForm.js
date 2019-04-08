import React, {
    Component,
    Fragment
} from "react";

import PropTypes from "prop-types";

import {
    connect
} from "react-redux";

import Step1 from "./Step1Super";
import Step2 from "./Step2Super";
import Step3 from "./Step3Super";
import './step.css'


class SuperMasterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 1,
            user: {},
            errors : {},
            client: {
                civilite: "",
                prenom: "",
                nom: "",
                adressePostale: "",
                email: "",
                telephone: ""
            },
            bienImmobillier: {
                localisationBien: {
                    numero: "",
                    voie: "",
                    codePostal: "",
                    ville: ""
                },
                informations: {
                    annneConstruction: "",
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
                    PrixMandat: ""
                },
                chargesEtImpots: {
                    chargesAnnuellesTotales: "",
                    chargesDeCopropriete: "",
                    impotsFonciers: ""
                },
                annexes: [],
                pointsFortsPointsFaible: {
                    pointsForts: [],
                    pointsFaibles: []
                },
                commentairesConfidentiels: ""
            },
            caracteristiques: {
                elementsPrincipaux: {
                    etatQualiteGrosOeuvre: "",
                    epoqueConstruction: "",
                    mitoyennete: "",
                    agrementGeneral: "",
                    standing: "",
                    accessibilite: "",
                    toutAEgout: ""
                },
                autresElements: {
                    qualiteArchitecturale: "",
                    etatPortesEtFenetres: "",
                    etatDesToitures: "",
                    clotureTerrain: ""
                },
                environement: {
                    nuissanceSonore: "",
                    voisinageVisaVis: "",
                    qualiteEnvironnement: "",
                    proximiteServicesPublics: ""
                },
                criteresGeneraux: {
                    qualiteDistribution: "",
                    etatMursPlafonds: "",
                    solsEtRevetementSols: ""
                },
                sejour: {
                    tailleSejour: "",
                    expositionSejour: "",
                    vueSejour: "",
                    luminosite: "",
                    cheminee: ""
                },
                cuisine: {
                    taille: "",
                    equipement: "",
                    etatGeneral: "",
                    agrement: "",
                },
                chambres: {
                    tailleDesPieces: "",
                    etatDesPieces: "",
                    expositionAuxBruits: ""
                },
                sanitaires: {
                    taillePiecesSanitaires: "",
                    nombreDeSanitaires: "",
                    qualiteEtatSanitaires: ""
                },
                energie: {
                    factureEnergetique: "",
                    installationElectrique: "",
                    installationGaz: ""
                },
                annexes: {
                    balconLogiaTerasse: "",
                    caveSousSol: "",
                    agrementJardin: "",
                    garageOuParkingOuvert: "",
                    comble: ""
                }

            },
            estimation: {

            },
            comparables: {

            }
        }

        this.onChange = this.onChange.bind(this);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

    }

    next() {
        let currentStep = this.state.currentStep;
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
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
        if (currentStep < 5) {
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

        if (currentStep === 5) {
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
            <Fragment>
                <form
                    noValidate
                    onSubmit={this.onSubmit}
                    className = "form-bg form-full-height is-vertical-center"
                >
                    <Step1
                        currentStep={this.state.currentStep}
                        onChange={this.onChange}
                        errors={this.errors}
                        client={this.state.client}
                    />


                    <Step2
                        currentStep={this.state.currentStep}
                        onChange={this.onChange}
                        errors={this.errors}
                        bienImmobillier={this.state.bienImmobillier}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        onChange={this.onChange}
                        errors={this.errors}
                        caracteristiques={this.state.caracteristiques}
                    />

                    {this.previousButton}
                    {this.nextButton}
                    {this.submitButton}

                </form>
            </Fragment>
        )
    }
}


export default SuperMasterForm;
