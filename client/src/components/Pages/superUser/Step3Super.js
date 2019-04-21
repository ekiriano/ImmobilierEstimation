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
                    <input type="radio" value="Mauvais" name="etatQualiteGrosOeuvre"></input>
                    Mauvais
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="etatQualiteGrosOeuvre"></input>
                    Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyen" name="etatQualiteGrosOeuvre"></input>
                    Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bon" name="etatQualiteGrosOeuvre"></input>
                    Bon
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bon" name="etatQualiteGrosOeuvre"></input>
                    Très Bon
                  </label>
              </div>


            <h3>
            Epoque de construction
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Pas rechrchee" name="epoqueConstruction"></input>
                    Pas recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Peu recherchee" name="epoqueConstruction"></input>
                    Peu recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Neutre" name="epoqueConstruction"></input>
                    Neutre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Recherchee" name="epoqueConstruction"></input>
                    Recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres recherchee" name="epoqueConstruction"></input>
                    Très recherchée
                  </label>
              </div>

            <h3>
            Mitoyenneté
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="3 cotes" name="mitoyennete"></input>
                    3 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" value="2 cotes" name="mitoyennete"></input>
                    2 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" value="1 cotes" name="mitoyennete"></input>
                    1 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" value="Par dependance" name="mitoyennete"></input>
                   Par dépendance
                  </label>
                  <label className="radio">
                    <input type="radio" value="Maison independante" name="mitoyennete"></input>
                    Maison indépendante
                  </label>
              </div>


            <h3>
            Agrément général
            </h3>
            <div className="control">
                <label className="radio">
                  <input type="radio" value="3 cotes" name="agrementGeneral"></input>
                  3 côtés
                </label>
                <label className="radio">
                  <input type="radio" value="2 cotes" name="agrementGeneral"></input>
                  2 côtés
                </label>
                <label className="radio">
                  <input type="radio" value="1 cotes" name="agrementGeneral"></input>
                  1 côtés
                </label>
                <label className="radio">
                  <input type="radio" value="Par dependance" name="agrementGeneral"></input>
                 Par dépendance
                </label>
                <label className="radio">
                  <input type="radio" value="Maison independante" name="agrementGeneral"></input>
                  Maison indépendante
                </label>
              </div>

            <h3>
            Standing
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Mauvais" name="standing"></input>
                    Mauvais
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="standing"></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyen" name="standing"></input>
                   Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bon" name="standing"></input>
                  Bon
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bon" name="standing"></input>
                    Très bon
                  </label>
              </div>

            <h3>
            accessibilite
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres difficile" name="accessibilite"></input>
                    Très difficile
                  </label>
                  <label className="radio">
                    <input type="radio" value="Difficile" name="accessibilite"></input>
                   difficile
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="accessibilite"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Facile" name="accessibilite"></input>
                  Facile
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres facile" name="accessibilite"></input>
                    Très facile
                  </label>
              </div>

            <h3>
            Tout à l'égout
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Rien" name="toutAEgout"></input>
                    Rien
                  </label>
                  <label className="radio">
                    <input type="radio" value="A revoir" name="toutAEgout"></input>
                   A revoir
                  </label>
                  <label className="radio">
                    <input type="radio" value="Assainissment individuel" name="toutAEgout"></input>
                   Assainissment individuel
                  </label>
                  <label className="radio">
                    <input type="radio" value="Partiel" name="toutAEgout"></input>
                  Partiel
                  </label>
                  <label className="radio">
                    <input type="radio" value="Complet" name="toutAEgout"></input>
                    Complet
                  </label>
              </div>

            <h1>Autre Elements</h1> <hr/>

            <h3>
            Qualité Architecturale
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Mauvaise" name="qualiteArchitecturale"></input>
                    Mauvaise
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="qualiteArchitecturale"></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyenne" name="qualiteArchitecturale"></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bonne" name="qualiteArchitecturale"></input>
                  Bonne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bonne" name="qualiteArchitecturale"></input>
                    Très bonne
                  </label>
              </div>

              <h3>
              Etat des portes et fenetres
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvais" name="etatPortesEtFenetres"></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="etatPortesEtFenetres"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatPortesEtFenetres"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="etatPortesEtFenetres"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="etatPortesEtFenetres"></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Etat des toitures
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvais" name="etatDesToitures"></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="etatDesToitures"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyen" name="etatDesToitures"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bon" name="etatDesToitures"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bon" name="etatDesToitures"></input>
                        Très bon
                      </label>
                  </div>

                  <h3>
                  Cloture Terrain(état/qualité)
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Aucun/Mauvais" name="clotureTerrain"></input>
                          Aucun/Mauvais
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="clotureTerrain"></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Moyen" name="clotureTerrain"></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" value="Bon" name="clotureTerrain"></input>
                        Bon
                        </label>
                    </div>


            <h1>Environement</h1><hr/>

            <h3>
            Nuisances Sonores
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres bruyant" name="nuissanceSonore"></input>
                    Trés bruyant
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bruyant" name="nuissanceSonore"></input>
                   Bruyant
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normal" name="nuissanceSonore"></input>
                   Normal
                  </label>
                  <label className="radio">
                    <input type="radio" value="Calme" name="nuissanceSonore"></input>
                  Calme
                  </label>
              </div>

              <h3>
              Voisinage/ vis-à-vis
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Tres genant" name="voisinageVisaVis"></input>
                      Trés genant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Genant" name="voisinageVisaVis"></input>
                     Genant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Normal" name="voisinageVisaVis"></input>
                     Normal
                    </label>
                    <label className="radio">
                      <input type="radio" value="Calme" name="voisinageVisaVis"></input>
                    Calme
                    </label>
                    <label className="radio">
                      <input type="radio" value="Aucun" name="voisinageVisaVis"></input>
                    Aucun
                    </label>
                </div>

                <h3>
                Qualité de l'environnement
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvais" name="qualiteEnvironnement"></input>
                        Mauvaise
                      </label>
                      <label className="radio">
                        <input type="radio" value="Faible" name="qualiteEnvironnement"></input>
                       Faible
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyenne" name="qualiteEnvironnement"></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bonne" name="qualiteEnvironnement"></input>
                      Bonne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bonne" name="qualiteEnvironnement"></input>
                        Très bonne
                      </label>
                  </div>

                  <h3>
                  Proximite des services publiques
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Tres eloignes" name="proximiteServicesPublics"></input>
                          Trés éloignés
                        </label>
                        <label className="radio">
                          <input type="radio" value="Asez eloignes" name="proximiteServicesPublics"></input>
                         Assez éloignés
                        </label>
                        <label className="radio">
                          <input type="radio" value="Normales" name="proximiteServicesPublics"></input>
                         Normales
                        </label>
                        <label className="radio">
                          <input type="radio" value="Proches" name="proximiteServicesPublics"></input>
                        Proches
                        </label>
                        <label className="radio">
                          <input type="radio" value="Tres proches" name="proximiteServicesPublics"></input>
                          Très proches
                        </label>
                    </div>



            <h1>Critère Généraux</h1><hr/>

            <h3>
            Qualité de la distribution
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Mauvaise" name="qualiteDistribution"></input>
                    Mauvaise
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="qualiteDistribution"></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyenne" name="qualiteDistribution"></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bonne" name="qualiteDistribution"></input>
                  Bonne
                  </label>
              </div>

              <h3>
              Etat des murs et des plafonds
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="A refaire" name="etatMursPlafonds"></input>
                      A refaire
                    </label>
                    <label className="radio">
                      <input type="radio" value="Usage" name="etatMursPlafonds"></input>
                     Usagé
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatMursPlafonds"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Recent" name="etatMursPlafonds"></input>
                    Récent
                    </label>
                    <label className="radio">
                      <input type="radio" value="Neuf" name="etatMursPlafonds"></input>
                      Neuf
                    </label>
                </div>

                <h3>
                Sols et revetement de sols
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="A refaire" name="solsEtRevetementSols"></input>
                        A refaire
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="solsEtRevetementSols"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Convenable" name="solsEtRevetementSols"></input>
                       Convenable
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bon" name="solsEtRevetementSols"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bon" name="solsEtRevetementSols"></input>
                        Très bon
                      </label>
                  </div>

            <h1>Séjour</h1><hr/>

            <h3>
            Taille du sejour
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petit" name="tailleSejour"></input>
                    Trés petit
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petit" name="tailleSejour"></input>
                   Petit
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normal" name="tailleSejour"></input>
                   Normal
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grand" name="tailleSejour"></input>
                  Grand
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grand" name="tailleSejour"></input>
                    Très grand
                  </label>
              </div>

              <h3>
              Exposition du séjour
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvaise" name="expositionSejour"></input>
                      Mauvaise
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="expositionSejour"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Normale" name="expositionSejour"></input>
                     Normale
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bonne" name="expositionSejour"></input>
                    Bonne
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bonne" name="expositionSejour"></input>
                      Très bonne
                    </label>
                </div>

                <h3>
                Vu du séjour
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="VisAVis/Proche" name="vueSejour"></input>
                        Vis-à-vis/Proche
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="vueSejour"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Ordinaire" name="vueSejour"></input>
                       Ordinaire
                      </label>
                      <label className="radio">
                        <input type="radio" value="Belle" name="vueSejour"></input>
                      Belle
                      </label>
                      <label className="radio">
                        <input type="radio" value="Exceptionnelle" name="vueSejour"></input>
                        Exeptionnelle
                      </label>
                  </div>

                  <h3>
                  Luminosité
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Mauvaise" name="luminosite"></input>
                          Mauvaise
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="luminosite"></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Simple" name="luminosite"></input>
                         Simple
                        </label>
                        <label className="radio">
                          <input type="radio" value="Bonne" name="luminosite"></input>
                        Bonne
                        </label>
                        <label className="radio">
                          <input type="radio" value="Tres bonne" name="luminosite"></input>
                          Trés bonne
                        </label>
                    </div>

                    <h3>
                    cheminée
                    </h3>
                      <div className="control">
                          <label className="radio">
                            <input type="radio" value="Inexistante" name="cheminee"></input>
                            Inexistante
                          </label>
                          <label className="radio">
                            <input type="radio" value="Mediocre" name="cheminee"></input>
                           Médiocre
                          </label>
                          <label className="radio">
                            <input type="radio" value="Simple" name="cheminee"></input>
                           Simple
                          </label>
                          <label className="radio">
                            <input type="radio" value="Belle" name="cheminee"></input>
                          Belle
                          </label>
                          <label className="radio">
                            <input type="radio" value="Exceptionnelle" name="cheminee"></input>
                            Exeptionnelle
                          </label>
                      </div>


            <h1>Cuisine</h1><hr/>

            <h3>
            Taille
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petite" name="taille"></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petite" name="taille"></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="taille"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grande" name="taille"></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grande" name="taille"></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Equipement
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Inexistant" name="equipement"></input>
                      Inexistant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="equipement"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="equipement"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="equipement"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="equipement"></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Etat général
                </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvais" name="etatGeneral"></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="etatGeneral"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatGeneral"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="etatGeneral"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="etatGeneral"></input>
                      Très bon
                    </label>
                </div>

                  <h3>
                  Agrément
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Mauvais" name="agrement"></input>
                          Mauvais
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="agrement"></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Moyen" name="agrement"></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" value="Agreable" name="agrement"></input>
                        Agréable
                        </label>
                        <label className="radio">
                          <input type="radio" value="Tres agreable" name="agrement"></input>
                          Très agréable
                        </label>
                    </div>


            <h1>Chambre</h1><hr/>

            <h3>
            Taille des pièces
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petite" name="tailleDesPieces"></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petite" name="tailleDesPieces"></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="tailleDesPieces"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grande" name="tailleDesPieces"></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grande" name="tailleDesPieces"></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Etat des pièces
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvais" name="etatDesPieces"></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="etatDesPieces"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatDesPieces"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="etatDesPieces"></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="etatDesPieces"></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Exposition aux bruits
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Tres bruyant" name="expositionAuxBruits"></input>
                        Trés bruyant
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bruyant" name="expositionAuxBruits"></input>
                       Bruyant
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyenne" name="expositionAuxBruits"></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Faible" name="expositionAuxBruits"></input>
                      Faible
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres faible" name="expositionAuxBruits"></input>
                        Très faible
                      </label>
                  </div>


            <h1>Sanitaire</h1><hr/>

            <h3>
            Taille des pièces sanitaires
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petite" name="taillePiecesSanitaires"></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petite" name="taillePiecesSanitaires"></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="taillePiecesSanitaires"></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grande" name="taillePiecesSanitaires"></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grande" name="taillePiecesSanitaires"></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Nombre de sanitaire
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Inexistant" name="nombreDeSanitaires"></input>
                      Inexistant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Insuffisant" name="nombreDeSanitaires"></input>
                     Insuffisant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Normal" name="nombreDeSanitaires"></input>
                     Normal
                    </label>
                    <label className="radio">
                      <input type="radio" value="Eleve" name="nombreDeSanitaires"></input>
                    Elevé
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres eleve" name="nombreDeSanitaires"></input>
                      Très elevé
                    </label>
                </div>

                <h3>
                Qualité et etat des sanitaires
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvais" name="qualiteEtatSanitaires"></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="qualiteEtatSanitaires"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyen" name="qualiteEtatSanitaires"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bon" name="qualiteEtatSanitaires"></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bon" name="qualiteEtatSanitaires"></input>
                        Très bon
                      </label>
                  </div>

            <h1>Energie</h1><hr/>

            <h3>
            Facture energitique
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres elevee" name="factureEnergetique"></input>
                    Trés elevée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Elevee" name="factureEnergetique"></input>
                   Elevée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyenne" name="factureEnergetique"></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Faible" name="factureEnergetique"></input>
                  Faible
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres faible" name="factureEnergetique"></input>
                    Très faible
                  </label>
              </div>

              <h3>
              Installation électrique
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvaise" name="installationElectrique"></input>
                      Mauvaise
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="installationElectrique"></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyenne" name="installationElectrique"></input>
                     Moyenne
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bonne" name="installationElectrique"></input>
                    Bonne
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bonne" name="installationElectrique"></input>
                      Très bonne
                    </label>
                </div>

                <h3>
                Installation du gaz
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvaise" name="installationGaz"></input>
                        Mauvaise
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="installationGaz"></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyenne" name="installationGaz"></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bonne" name="installationGaz"></input>
                      Bonne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bonne" name="installationGaz"></input>
                        Très bonne
                      </label>
                  </div>

            <h1>Annexes</h1><hr/>

            <h3>
            Balcon Loggia Terasse
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Aucun" name="balconLogiaTerasse"></input>
                    Aucun
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="balconLogiaTerasse"></input>
                    Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyen" name="balconLogiaTerasse"></input>
                   Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bien" name="balconLogiaTerasse"></input>
                   Bien
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bien" name="balconLogiaTerasse"></input>
                  Trés Bien
                  </label>
              </div>

              <h3>
              Cave / sous-sol
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Aucun" name="caveSousSol"></input>
                      Aucun
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="caveSousSol"></input>
                      Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="caveSousSol"></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bien" name="caveSousSol"></input>
                     Bien
                    </label>
                    <label className="radio">
                      <input type="radio" value="Exceptionnel" name="caveSousSol"></input>
                    Exeptionnel
                    </label>
                </div>

                <h3>
                Agrément du jardin
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Tres mediocre" name="agrementJardin"></input>
                        Trés mediocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="agrementJardin"></input>
                        Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyen" name="agrementJardin"></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bien" name="agrementJardin"></input>
                       Bien
                      </label>
                      <label className="radio">
                        <input type="radio" value="Remarquable" name="agrementJardin"></input>
                      Remarquable
                      </label>
                  </div>

                  <h3>
                  Garage ou parking couvert
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Sans" name="garageOuParkingOuvert"></input>
                          Sans
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="garageOuParkingOuvert"></input>
                          Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Moyen" name="garageOuParkingOuvert"></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" value="Bien" name="garageOuParkingOuvert"></input>
                         Bien
                        </label>
                        <label className="radio">
                          <input type="radio" value="Exceptionnel" name="garageOuParkingOuvert"></input>
                        Exceptionnel
                        </label>
                    </div>

                    <h3>
                    Combles
                    </h3>
                      <div className="control">
                          <label className="radio">
                            <input type="radio" value="Aucun" name="combles"></input>
                            Aucun
                          </label>
                          <label className="radio">
                            <input type="radio" value="Peu" name="combles"></input>
                            Peu
                          </label>
                          <label className="radio">
                            <input type="radio" value="Moyen" name="combles"></input>
                           Moyen
                          </label>
                          <label className="radio">
                            <input type="radio" value="Bien" name="combles"></input>
                           Bien
                          </label>
                          <label className="radio">
                            <input type="radio" value="Tres bien" name="combles"></input>
                          Trés Bien
                          </label>
                      </div>


          </div>
        );
      }
}

export default Step3Super;
