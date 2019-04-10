import React, { Component } from "react";
import classnames from "classnames";

class Step3Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 3) {
          return null;
        }
        return (
          <div>
            <h1>Elements Principaux</h1> <hr/>
            <h3>
            Etat et Qualité du gros oeuvre
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="etatQualiteGrosOeuvre"></input>
                    Mauvais
                  </label>
                  <label className="radio">
                    <input type="radio" name="etatQualiteGrosOeuvre"></input>
                    Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" name="etatQualiteGrosOeuvre"></input>
                    Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" name="etatQualiteGrosOeuvre"></input>
                    Bon
                  </label>
                  <label className="radio">
                    <input type="radio" name="etatQualiteGrosOeuvre"></input>
                    Très Bon
                  </label>
              </div>


            <h3>
            Epoque de construction
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="epoqueConstruction"></input>
                    Pas recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" name="epoqueConstruction"></input>
                    Peu recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" name="epoqueConstruction"></input>
                    Neutre
                  </label>
                  <label className="radio">
                    <input type="radio" name="epoqueConstruction"></input>
                    Recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" name="epoqueConstruction"></input>
                    Très recherchée
                  </label>
              </div>

            <h3>
            Mitoyenneté
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="mitoyennete"></input>
                    3 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" name="mitoyennete"></input>
                    2 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" name="mitoyennete"></input>
                    1 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" name="mitoyennete"></input>
                   Par dépendance
                  </label>
                  <label className="radio">
                    <input type="radio" name="mitoyennete"></input>
                    Maison indépendante
                  </label>
              </div>


            <h3>
            Agrément général
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="agrementGeneral"></input>
                    3 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" name="agrementGeneral"></input>
                    2 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" name="agrementGeneral"></input>
                    1 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" name="agrementGeneral"></input>
                   Par dépendance
                  </label>
                  <label className="radio">
                    <input type="radio" name="agrementGeneral"></input>
                    Maison indépendante
                  </label>
              </div>

            <h3>
            Standing
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="standing"></input>
                    Mauvais
                  </label>
                  <label className="radio">
                    <input type="radio" name="standing"></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" name="standing"></input>
                   Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" name="standing"></input>
                  Bon
                  </label>
                  <label className="radio">
                    <input type="radio" name="standing"></input>
                    Très bon
                  </label>
              </div>

            <h3>
            accessibilite
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="accessibilite"></input>
                    Très difficile
                  </label>
                  <label className="radio">
                    <input type="radio" name="accessibilite"></input>
                   difficile
                  </label>
                  <label className="radio">
                    <input type="radio" name="accessibilite"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" name="accessibilite"></input>
                  Facile
                  </label>
                  <label className="radio">
                    <input type="radio" name="accessibilite"></input>
                    Très facile
                  </label>
              </div>

            <h3>
            Tout à l'égout
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="toutAEgout"></input>
                    Rien
                  </label>
                  <label className="radio">
                    <input type="radio" name="toutAEgout"></input>
                   A revoir
                  </label>
                  <label className="radio">
                    <input type="radio" name="toutAEgout"></input>
                   Assainissment individuel
                  </label>
                  <label className="radio">
                    <input type="radio" name="toutAEgout"></input>
                  Partiel
                  </label>
                  <label className="radio">
                    <input type="radio" name="toutAEgout"></input>
                    Complet
                  </label>
              </div>

            <h1>Autre Elements</h1> <hr/>

            <h3>
            Qualité Architecturale
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="qualiteArchitecturale"></input>
                    Mauvaise
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteArchitecturale"></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteArchitecturale"></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteArchitecturale"></input>
                  Bonne
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteArchitecturale"></input>
                    Très bonne
                  </label>
              </div>

              <h3>
              Etat des portes et fenetres
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="etatPortesEtFenetres"></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatPortesEtFenetres"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatPortesEtFenetres"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatPortesEtFenetres"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatPortesEtFenetres"></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Etat des toitures
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="etatDesToitures"></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatDesToitures"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatDesToitures"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatDesToitures"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatDesToitures"></input>
                        Très bon
                      </label>
                  </div>

                  <h3>
                  Cloture Terrain(état/qualité)
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" name="clotureTerrain"></input>
                          Aucun/Mauvais
                        </label>
                        <label className="radio">
                          <input type="radio" name="clotureTerrain"></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" name="clotureTerrain"></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" name="clotureTerrain"></input>
                        Bon
                        </label>
                    </div>


            <h1>Environement</h1><hr/>

            <h3>
            Nuisances Sonores
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="nuissanceSonore"></input>
                    Trés bruyant
                  </label>
                  <label className="radio">
                    <input type="radio" name="nuissanceSonore"></input>
                   Bruyant
                  </label>
                  <label className="radio">
                    <input type="radio" name="nuissanceSonore"></input>
                   Normal
                  </label>
                  <label className="radio">
                    <input type="radio" name="nuissanceSonore"></input>
                  Calme
                  </label>
              </div>

              <h3>
              Voisinage/ vis-à-vis
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="nuissanceSonore"></input>
                      Trés genant
                    </label>
                    <label className="radio">
                      <input type="radio" name="nuissanceSonore"></input>
                     Genant
                    </label>
                    <label className="radio">
                      <input type="radio" name="nuissanceSonore"></input>
                     Normal
                    </label>
                    <label className="radio">
                      <input type="radio" name="nuissanceSonore"></input>
                    Calme
                    </label>
                    <label className="radio">
                      <input type="radio" name="nuissanceSonore"></input>
                    Aucun
                    </label>
                </div>

                <h3>
                Qualité de l'environnement
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="qualiteEnvironnement"></input>
                        Mauvaise
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEnvironnement"></input>
                       Faible
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEnvironnement"></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEnvironnement"></input>
                      Bonne
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEnvironnement"></input>
                        Très bonne
                      </label>
                  </div>

                  <h3>
                  Proximite des services publiques
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" name="proximiteServicesPublics"></input>
                          Trés éloignés
                        </label>
                        <label className="radio">
                          <input type="radio" name="proximiteServicesPublics"></input>
                         Assez éloignés
                        </label>
                        <label className="radio">
                          <input type="radio" name="proximiteServicesPublics"></input>
                         Normales
                        </label>
                        <label className="radio">
                          <input type="radio" name="proximiteServicesPublics"></input>
                        Proches
                        </label>
                        <label className="radio">
                          <input type="radio" name="proximiteServicesPublics"></input>
                          Très proches
                        </label>
                    </div>



            <h1>Critère Généraux</h1><hr/>

            <h3>
            Qualité de la distribution
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="qualiteDistribution"></input>
                    Mauvaise
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteDistribution"></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteDistribution"></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" name="qualiteDistribution"></input>
                  Bonne
                  </label>
              </div>

              <h3>
              Etat des murs et des plafonds
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="etatMursPlafonds"></input>
                      A refaire
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatMursPlafonds"></input>
                     Usagé
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatMursPlafonds"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatMursPlafonds"></input>
                    Récent
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatMursPlafonds"></input>
                      Neuf
                    </label>
                </div>

                <h3>
                Sols et revetement de sols
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="solsEtRevetementSols"></input>
                        A refaire
                      </label>
                      <label className="radio">
                        <input type="radio" name="solsEtRevetementSols"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="solsEtRevetementSols"></input>
                       Convenable
                      </label>
                      <label className="radio">
                        <input type="radio" name="solsEtRevetementSols"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" name="solsEtRevetementSols"></input>
                        Très bon
                      </label>
                  </div>
            <h1>Séjour</h1><hr/>
            <h1>Cuisine</h1><hr/>
            <h1>Chambre</h1><hr/>
            <h1>Sanitaire</h1><hr/>
            <h1>Energie</h1><hr/>
            <h1>Annexes</h1><hr/>
          </div>
        );
      }
}

export default Step3Super;
