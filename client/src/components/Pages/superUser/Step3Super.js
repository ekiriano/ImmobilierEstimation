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

            <h3>
            Taille du sejour
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="tailleSejour"></input>
                    Trés petit
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleSejour"></input>
                   Petit
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleSejour"></input>
                   Normal
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleSejour"></input>
                  Grand
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleSejour"></input>
                    Très grand
                  </label>
              </div>

              <h3>
              Exposition du séjour
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="expositionSejour"></input>
                      Mauvaise
                    </label>
                    <label className="radio">
                      <input type="radio" name="expositionSejour"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" name="expositionSejour"></input>
                     Normale
                    </label>
                    <label className="radio">
                      <input type="radio" name="expositionSejour"></input>
                    Bonne
                    </label>
                    <label className="radio">
                      <input type="radio" name="expositionSejour"></input>
                      Très bonne
                    </label>
                </div>

                <h3>
                Vu du séjour
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="vueSejour"></input>
                        Vis-à-vis/Proche
                      </label>
                      <label className="radio">
                        <input type="radio" name="vueSejour"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="vueSejour"></input>
                       Ordinaire
                      </label>
                      <label className="radio">
                        <input type="radio" name="vueSejour"></input>
                      Belle
                      </label>
                      <label className="radio">
                        <input type="radio" name="vueSejour"></input>
                        Exeptionnelle
                      </label>
                  </div>

                  <h3>
                  Luminosité
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" name="luminosite"></input>
                          Mauvaise
                        </label>
                        <label className="radio">
                          <input type="radio" name="luminosite"></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" name="luminosite"></input>
                         Simple
                        </label>
                        <label className="radio">
                          <input type="radio" name="luminosite"></input>
                        Bonne
                        </label>
                        <label className="radio">
                          <input type="radio" name="luminosite"></input>
                          Trés bonne
                        </label>
                    </div>

                    <h3>
                    cheminée
                    </h3>
                      <div className="control">
                          <label className="radio">
                            <input type="radio" name="cheminee"></input>
                            Inexistante
                          </label>
                          <label className="radio">
                            <input type="radio" name="cheminee"></input>
                           Médiocre
                          </label>
                          <label className="radio">
                            <input type="radio" name="cheminee"></input>
                           Simple
                          </label>
                          <label className="radio">
                            <input type="radio" name="cheminee"></input>
                          Belle
                          </label>
                          <label className="radio">
                            <input type="radio" name="cheminee"></input>
                            Exeptionnelle
                          </label>
                      </div>


            <h1>Cuisine</h1><hr/>

            <h3>
            Taille
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="taille"></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" name="taille"></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" name="taille"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" name="taille"></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" name="taille"></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Equipement
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="equipement"></input>
                      Inexistant
                    </label>
                    <label className="radio">
                      <input type="radio" name="equipement"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" name="equipement"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" name="equipement"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" name="equipement"></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Etat général
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="etatGeneral"></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatGeneral"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatGeneral"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatGeneral"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" name="etatGeneral"></input>
                        Très bon
                      </label>
                  </div>

                  <h3>
                  Agrément
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" name="agrement"></input>
                          Mauvais
                        </label>
                        <label className="radio">
                          <input type="radio" name="agrement"></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" name="agrement"></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" name="agrement"></input>
                        Agréable
                        </label>
                        <label className="radio">
                          <input type="radio" name="agrement"></input>
                          Très agréable
                        </label>
                    </div>


            <h1>Chambre</h1><hr/>

            <h3>
            Taille des pièces
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="tailleDesPieces"></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleDesPieces"></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleDesPieces"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleDesPieces"></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" name="tailleDesPieces"></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Etat des pièces
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="etatDesPieces"></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatDesPieces"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatDesPieces"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatDesPieces"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" name="etatDesPieces"></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Exposition aux bruits
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="expositionAuxBruits"></input>
                        Trés bruyant
                      </label>
                      <label className="radio">
                        <input type="radio" name="expositionAuxBruits"></input>
                       Bruyant
                      </label>
                      <label className="radio">
                        <input type="radio" name="expositionAuxBruits"></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" name="expositionAuxBruits"></input>
                      Faible
                      </label>
                      <label className="radio">
                        <input type="radio" name="expositionAuxBruits"></input>
                        Très faible
                      </label>
                  </div>


            <h1>Sanitaire</h1><hr/>

            <h3>
            Taille des pièces sanitaires
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="taillePiecesSanitaires"></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" name="taillePiecesSanitaires"></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" name="taillePiecesSanitaires"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" name="taillePiecesSanitaires"></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" name="taillePiecesSanitaires"></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Nombre de sanitaire
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="nombreDeSanitaires"></input>
                      Inexistant
                    </label>
                    <label className="radio">
                      <input type="radio" name="nombreDeSanitaires"></input>
                     Insuffisant
                    </label>
                    <label className="radio">
                      <input type="radio" name="nombreDeSanitaires"></input>
                     Normal
                    </label>
                    <label className="radio">
                      <input type="radio" name="nombreDeSanitaires"></input>
                    Elevé
                    </label>
                    <label className="radio">
                      <input type="radio" name="nombreDeSanitaires"></input>
                      Très elevé
                    </label>
                </div>

                <h3>
                Qualité et etat des sanitaires
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="qualiteEtatSanitaires"></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEtatSanitaires"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEtatSanitaires"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEtatSanitaires"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" name="qualiteEtatSanitaires"></input>
                        Très bon
                      </label>
                  </div>

            <h1>Energie</h1><hr/>

            <h3>
            Facture energitique
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="factureEnergetique"></input>
                    Trés elevée
                  </label>
                  <label className="radio">
                    <input type="radio" name="factureEnergetique"></input>
                   Elevée
                  </label>
                  <label className="radio">
                    <input type="radio" name="factureEnergetique"></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" name="factureEnergetique"></input>
                  Faible
                  </label>
                  <label className="radio">
                    <input type="radio" name="factureEnergetique"></input>
                    Très faible
                  </label>
              </div>

              <h3>
              Installation électrique
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="installationElectrique"></input>
                      Mauvaise
                    </label>
                    <label className="radio">
                      <input type="radio" name="installationElectrique"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" name="installationElectrique"></input>
                     Moyenne
                    </label>
                    <label className="radio">
                      <input type="radio" name="installationElectrique"></input>
                    Bonne
                    </label>
                    <label className="radio">
                      <input type="radio" name="installationElectrique"></input>
                      Très bonne
                    </label>
                </div>

                <h3>
                Installation du gaz
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="installationGaz"></input>
                        Mauvaise
                      </label>
                      <label className="radio">
                        <input type="radio" name="installationGaz"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="installationGaz"></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" name="installationGaz"></input>
                      Bonne
                      </label>
                      <label className="radio">
                        <input type="radio" name="installationGaz"></input>
                        Très bonne
                      </label>
                  </div>

            <h1>Annexes</h1><hr/>

            <h3>
            Balcon Loggia Terasse
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="balconLogiaTerasse"></input>
                    Aucun
                  </label>
                  <label className="radio">
                    <input type="radio" name="balconLogiaTerasse"></input>
                    Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" name="balconLogiaTerasse"></input>
                   Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" name="balconLogiaTerasse"></input>
                   Bien
                  </label>
                  <label className="radio">
                    <input type="radio" name="balconLogiaTerasse"></input>
                  Trés Bien
                  </label>
              </div>

              <h3>
              Cave / sous-sol
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="caveSousSol"></input>
                      Aucun
                    </label>
                    <label className="radio">
                      <input type="radio" name="caveSousSol"></input>
                      Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" name="caveSousSol"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" name="caveSousSol"></input>
                     Bien
                    </label>
                    <label className="radio">
                      <input type="radio" name="caveSousSol"></input>
                    Exeptionnel
                    </label>
                </div>

                <h3>
                Agrément du jardin
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" name="agrementJardin"></input>
                        Trés mediocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="agrementJardin"></input>
                        Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" name="agrementJardin"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" name="agrementJardin"></input>
                       Bien
                      </label>
                      <label className="radio">
                        <input type="radio" name="agrementJardin"></input>
                      Remarquable
                      </label>
                  </div>

                  <h3>
                  Garage ou parking couvert
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" name="garageOuParkingOuvert"></input>
                          Sans
                        </label>
                        <label className="radio">
                          <input type="radio" name="garageOuParkingOuvert"></input>
                          Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" name="garageOuParkingOuvert"></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" name="garageOuParkingOuvert"></input>
                         Bien
                        </label>
                        <label className="radio">
                          <input type="radio" name="garageOuParkingOuvert"></input>
                        Exceptionnel
                        </label>
                    </div>

                    <h3>
                    Combles
                    </h3>
                      <div className="control">
                          <label className="radio">
                            <input type="radio" name="combles"></input>
                            Aucun
                          </label>
                          <label className="radio">
                            <input type="radio" name="combles"></input>
                            Peu
                          </label>
                          <label className="radio">
                            <input type="radio" name="combles"></input>
                           Moyen
                          </label>
                          <label className="radio">
                            <input type="radio" name="combles"></input>
                           Bien
                          </label>
                          <label className="radio">
                            <input type="radio" name="combles"></input>
                          Trés Bien
                          </label>
                      </div>


          </div>
        );
      }
}

export default Step3Super;
