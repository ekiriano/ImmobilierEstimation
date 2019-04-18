import React, {
    Component,
    Fragment
} from "react";

import {
  submitSuperBienSave
} from "../../../actions/superBienActions";

import PropTypes from "prop-types";

import {
    connect
} from "react-redux";

import Step1 from "./Step1Super";
import Step2 from "./Step2Super";
import Step3 from "./Step3Super";
import Step4 from "./Step4Super";
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
              decoteBienOccupe: "",
              decoteBienOccupeR: "",
              autresElements: "",
              autresElementsR: "",
              travauxARealiser: "",
              travauxARealiserR: "",
              valorisationTerrain: "",
              valorisationTerrainR: "",
              renove: "",
              affichageNetVendeur: "",
              prix_comparaison: "",
              prix_reference: "",
              prix_final: ""
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

          const newBienSuper = {
            client: {
              nom: this.state.client.nom,
              prenom: this.state.client.prenom,
              adressePostale: this.state.client.ville,
              email: this.state.client.email
            },
            bienImmobillier: {
                localisationBien: {
                    numero: this.state.bienImmobillier.localisationBien.umero,
                    voie: this.state.bienImmobillier.localisationBien.voie,
                    codePostal: this.state.bienImmobillier.localisationBien.codePostal,
                    ville: this.state.bienImmobillier.localisationBien.ville
                },
                informations: {
                    anneConstruction: this.state.bienImmobillier.informations.anneConstruction,
                    typeBienAffiche: this.state.bienImmobillier.informations.typeBienAffiche,
                    nombrePieces: this.state.bienImmobillier.informations.nombrePieces,
                    nombreChambres: this.state.bienImmobillier.informations.nombreChambres,
                    surfaceHabitable: this.state.bienImmobillier.informations.surfaceHabitable,
                    surfaceTerrain: this.state.bienImmobillier.informations.surfaceTerrain,
                    nombreNiveaux: this.state.bienImmobillier.informations.nombreNiveaux,
                    ascenseur: this.state.bienImmobillier.informations.ascenseur,
                    balconOuTerrasse: this.state.bienImmobillier.informations.balconOuTerrasse,
                    LibreALaVente: this.state.bienImmobillier.informations.LibreALaVente,
                    titreDossier: this.state.bienImmobillier.informations.titreDossier,
                    descriptifBien: this.state.bienImmobillier.informations.descriptifBien,
                    DPE: this.state.bienImmobillier.informations.DPE,
                    GES: this.state.bienImmobillier.informations.GES,
                    PrixMandat: this.state.bienImmobillier.informations.PrixMandat
                },
                chargesEtImpots: {
                    chargesAnnuellesTotales: this.state.bienImmobillier.chargesEtImpots.chargesAnnuellesTotales,
                    chargesDeCopropriete: this.state.bienImmobillier.chargesEtImpots.chargesDeCopropriete,
                    impotsFonciers: this.state.bienImmobillier.chargesEtImpots.impotsFonciers
                },
                annexes: this.state.bienImmobillier.annexes,
                pointsFortsPointsFaible: {
                    pointsForts: this.state.bienImmobillier.pointsFortsPointsFaible.pointsForts,
                    pointsFaibles: this.state.bienImmobillier.pointsFortsPointsFaible.pointsFaibles
                },
                commentairesConfidentiels: this.state.bienImmobillier.commentairesConfidentiels
            },
            caracteristiques: {
                elementsPrincipaux: {
                    etatQualiteGrosOeuvre: this.state.caracteristiques.elementsPrincipaux.etatQualiteGrosOeuvre,
                    epoqueConstruction: this.state.caracteristiques.elementsPrincipaux.epoqueConstruction,
                    mitoyennete: this.state.caracteristiques.elementsPrincipaux.mitoyennete,
                    agrementGeneral: this.state.caracteristiques.elementsPrincipaux.agrementGeneral,
                    standing: this.state.caracteristiques.elementsPrincipaux.standing,
                    accessibilite: this.state.caracteristiques.elementsPrincipaux.accessibilite,
                    toutAEgout: this.state.caracteristiques.elementsPrincipaux.toutAEgout
                },
                autresElements: {
                    qualiteArchitecturale: this.state.caracteristiques.autresElements.qualiteArchitecturale,
                    etatPortesEtFenetres: this.state.caracteristiques.autresElements.etatPortesEtFenetres,
                    etatDesToitures: this.state.caracteristiques.autresElements.etatDesToitures,
                    clotureTerrain: this.state.caracteristiques.autresElements.clotureTerrain
                },
                environement: {
                    nuissanceSonore: this.state.caracteristiques.environement.nuissanceSonore,
                    voisinageVisaVis: this.state.caracteristiques.environement.voisinageVisaVis,
                    qualiteEnvironnement: this.state.caracteristiques.environement.qualiteEnvironnement,
                    proximiteServicesPublics: this.state.caracteristiques.environement.proximiteServicesPublics
                },
                criteresGeneraux: {
                    qualiteDistribution: this.state.caracteristiques.criteresGeneraux.qualiteDistribution,
                    etatMursPlafonds: this.state.caracteristiques.criteresGeneraux.etatMursPlafonds,
                    solsEtRevetementSols: this.state.caracteristiques.criteresGeneraux.solsEtRevetementSols
                },
                sejour: {
                    tailleSejour: this.state.caracteristiques.sejour.tailleSejour,
                    expositionSejour: this.state.caracteristiques.sejour.expositionSejour,
                    vueSejour: this.state.caracteristiques.sejour.vueSejour,
                    luminosite: this.state.caracteristiques.sejour.luminosite,
                    cheminee: this.state.caracteristiques.sejour.cheminee
                },
                cuisine: {
                    taille: this.state.caracteristiques.cuisine.taille,
                    equipement: this.state.caracteristiques.cuisine.equipement,
                    etatGeneral: this.state.caracteristiques.cuisine.etatGeneral,
                    agrement: this.state.caracteristiques.cuisine.agrement,
                },
                chambres: {
                    tailleDesPieces: this.state.caracteristiques.chambres.tailleDesPieces,
                    etatDesPieces: this.state.caracteristiques.chambres.etatDesPieces,
                    expositionAuxBruits: this.state.caracteristiques.chambres.expositionAuxBruits
                },
                sanitaires: {
                    taillePiecesSanitaires: this.state.caracteristiques.sanitaires.taillePiecesSanitaires,
                    nombreDeSanitaires: this.state.caracteristiques.sanitaires.nombreDeSanitaires,
                    qualiteEtatSanitaires: this.state.caracteristiques.sanitaires.qualiteEtatSanitaires
                },
                energie: {
                    factureEnergetique: this.state.caracteristiques.energie.factureEnergetique,
                    installationElectrique: this.state.caracteristiques.energie.installationElectrique,
                    installationGaz: this.state.caracteristiques.energie.installationGaz
                },
                annexes: {
                    balconLogiaTerasse: this.state.caracteristiques.annexes.balconOuTerrasse,
                    caveSousSol: this.state.caracteristiques.annexes.caveSousSol,
                    agrementJardin: this.state.caracteristiques.annexes.agrementJardin,
                    garageOuParkingOuvert: this.state.caracteristiques.annexes.garageOuParkingOuvert,
                    comble: this.state.caracteristiques.annexes.comble
                }

            },
            estimation: {
            prix_comparaison: this.state.estimation.prix_estimation,
            prix_reference: this.state.estimation.prix_reference
          }


          };

          // if (this.props.user.user_type === "super" ) {
          //   this.props.submitSuperBienSave(newSuperBien);
          // if(this.state.prix_comparaison !== "" || this.state.prix_reference !== ""){  it will be && or || depends if he can chose 2 methods
          //     this.next();
          //   }
          // }

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
                    <Step4
                        currentStep={this.state.currentStep}
                        onChange={this.onChange}
                        errors={this.errors}
                    />

                    {this.previousButton}
                    {this.nextButton}
                    {this.submitButton}

                </form>
            </Fragment>
        )
    }
}

SuperMasterForm.propTypes = {
  submitSuperBienSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

// const mapStateProps = state => ({
//   user: state.auth.user,
//   errors: state.errors,
//   newEstimationAppartement : state.simpleAppartements.newEstimationAppartement,
// });

// export default connect(
//   mapStateProps,
//   { submitSuperBienSave }
// )(SuperMasterForm);


export default SuperMasterForm;
