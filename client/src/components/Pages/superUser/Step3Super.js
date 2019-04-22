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
                    <input type="radio" value="Mauvais" name="etatQualiteGrosOeuvre"onChange={this.props.onChange} ></input>
                    Mauvais
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="etatQualiteGrosOeuvre"onChange={this.props.onChange} ></input>
                    Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyen" name="etatQualiteGrosOeuvre"onChange={this.props.onChange} ></input>
                    Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bon" name="etatQualiteGrosOeuvre"onChange={this.props.onChange} ></input>
                    Bon
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bon" name="etatQualiteGrosOeuvre"onChange={this.props.onChange} ></input>
                    Très Bon
                  </label>
              </div>


            <h3>
            Epoque de construction
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Pas rechrchee" name="epoqueConstruction"onChange={this.props.onChange} ></input>
                    Pas recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Peu recherchee" name="epoqueConstruction"onChange={this.props.onChange} ></input>
                    Peu recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Neutre" name="epoqueConstruction"onChange={this.props.onChange} ></input>
                    Neutre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Recherchee" name="epoqueConstruction"onChange={this.props.onChange} ></input>
                    Recherchée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres recherchee" name="epoqueConstruction"onChange={this.props.onChange} ></input>
                    Très recherchée
                  </label>
              </div>

            <h3>
            Mitoyenneté
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="3 cotes" name="mitoyennete"onChange={this.props.onChange} ></input>
                    3 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" value="2 cotes" name="mitoyennete"onChange={this.props.onChange} ></input>
                    2 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" value="1 cotes" name="mitoyennete"onChange={this.props.onChange} ></input>
                    1 côtés
                  </label>
                  <label className="radio">
                    <input type="radio" value="Par dependance" name="mitoyennete"onChange={this.props.onChange} ></input>
                   Par dépendance
                  </label>
                  <label className="radio">
                    <input type="radio" value="Maison independante" name="mitoyennete"onChange={this.props.onChange} ></input>
                    Maison indépendante
                  </label>
              </div>


            <h3>
            Agrément général
            </h3>
            <div className="control">
                <label className="radio">
                  <input type="radio" value="3 cotes" name="agrementGeneral"onChange={this.props.onChange} ></input>
                  3 côtés
                </label>
                <label className="radio">
                  <input type="radio" value="2 cotes" name="agrementGeneral"onChange={this.props.onChange} ></input>
                  2 côtés
                </label>
                <label className="radio">
                  <input type="radio" value="1 cotes" name="agrementGeneral"onChange={this.props.onChange} ></input>
                  1 côtés
                </label>
                <label className="radio">
                  <input type="radio" value="Par dependance" name="agrementGeneral"onChange={this.props.onChange} ></input>
                 Par dépendance
                </label>
                <label className="radio">
                  <input type="radio" value="Maison independante" name="agrementGeneral"onChange={this.props.onChange} ></input>
                  Maison indépendante
                </label>
              </div>

            <h3>
            Standing
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Mauvais" name="standing"onChange={this.props.onChange} ></input>
                    Mauvais
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="standing"onChange={this.props.onChange} ></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyen" name="standing"onChange={this.props.onChange} ></input>
                   Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bon" name="standing"onChange={this.props.onChange} ></input>
                  Bon
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bon" name="standing"onChange={this.props.onChange} ></input>
                    Très bon
                  </label>
              </div>

            <h3>
            accessibilite
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres difficile" name="accessibilite"onChange={this.props.onChange} ></input>
                    Très difficile
                  </label>
                  <label className="radio">
                    <input type="radio" value="Difficile" name="accessibilite"onChange={this.props.onChange} ></input>
                   difficile
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="accessibilite"onChange={this.props.onChange} ></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Facile" name="accessibilite"onChange={this.props.onChange} ></input>
                  Facile
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres facile" name="accessibilite"onChange={this.props.onChange} ></input>
                    Très facile
                  </label>
              </div>

            <h3>
            Tout à l'égout
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Rien" name="toutAEgout"onChange={this.props.onChange} ></input>
                    Rien
                  </label>
                  <label className="radio">
                    <input type="radio" value="A revoir" name="toutAEgout"onChange={this.props.onChange} ></input>
                   A revoir
                  </label>
                  <label className="radio">
                    <input type="radio" value="Assainissment individuel" name="toutAEgout"onChange={this.props.onChange} ></input>
                   Assainissment individuel
                  </label>
                  <label className="radio">
                    <input type="radio" value="Partiel" name="toutAEgout"onChange={this.props.onChange} ></input>
                  Partiel
                  </label>
                  <label className="radio">
                    <input type="radio" value="Complet" name="toutAEgout"onChange={this.props.onChange} ></input>
                    Complet
                  </label>
              </div>

            <h1>Autre Elements</h1> <hr/>

            <h3>
            Qualité Architecturale
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Mauvaise" name="qualiteArchitecturale"onChange={this.props.onChange} ></input>
                    Mauvaise
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="qualiteArchitecturale"onChange={this.props.onChange} ></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyenne" name="qualiteArchitecturale"onChange={this.props.onChange} ></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bonne" name="qualiteArchitecturale"onChange={this.props.onChange} ></input>
                  Bonne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bonne" name="qualiteArchitecturale"onChange={this.props.onChange} ></input>
                    Très bonne
                  </label>
              </div>

              <h3>
              Etat des portes et fenetres
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvais" name="etatPortesEtFenetres"onChange={this.props.onChange} ></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="etatPortesEtFenetres"onChange={this.props.onChange} ></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatPortesEtFenetres"onChange={this.props.onChange} ></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="etatPortesEtFenetres"onChange={this.props.onChange} ></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="etatPortesEtFenetres"onChange={this.props.onChange} ></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Etat des toitures
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvais" name="etatDesToitures"onChange={this.props.onChange} ></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="etatDesToitures"onChange={this.props.onChange} ></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyen" name="etatDesToitures"onChange={this.props.onChange} ></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bon" name="etatDesToitures"onChange={this.props.onChange} ></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bon" name="etatDesToitures"onChange={this.props.onChange} ></input>
                        Très bon
                      </label>
                  </div>

                  <h3>
                  Cloture Terrain(état/qualité)
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Aucun/Mauvais" name="clotureTerrain"onChange={this.props.onChange} ></input>
                          Aucun/Mauvais
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="clotureTerrain"onChange={this.props.onChange} ></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Moyen" name="clotureTerrain"onChange={this.props.onChange} ></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" value="Bon" name="clotureTerrain"onChange={this.props.onChange} ></input>
                        Bon
                        </label>
                    </div>


            <h1>Environement</h1><hr/>

            <h3>
            Nuisances Sonores
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres bruyant" name="nuissanceSonore"onChange={this.props.onChange} ></input>
                    Trés bruyant
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bruyant" name="nuissanceSonore"onChange={this.props.onChange} ></input>
                   Bruyant
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normal" name="nuissanceSonore"onChange={this.props.onChange} ></input>
                   Normal
                  </label>
                  <label className="radio">
                    <input type="radio" value="Calme" name="nuissanceSonore"onChange={this.props.onChange} ></input>
                  Calme
                  </label>
              </div>

              <h3>
              Voisinage/ vis-à-vis
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Tres genant" name="voisinageVisaVis"onChange={this.props.onChange} ></input>
                      Trés genant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Genant" name="voisinageVisaVis"onChange={this.props.onChange} ></input>
                     Genant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Normal" name="voisinageVisaVis"onChange={this.props.onChange} ></input>
                     Normal
                    </label>
                    <label className="radio">
                      <input type="radio" value="Calme" name="voisinageVisaVis"onChange={this.props.onChange} ></input>
                    Calme
                    </label>
                    <label className="radio">
                      <input type="radio" value="Aucun" name="voisinageVisaVis"onChange={this.props.onChange} ></input>
                    Aucun
                    </label>
                </div>

                <h3>
                Qualité de l'environnement
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvais" name="qualiteEnvironnement"onChange={this.props.onChange} ></input>
                        Mauvaise
                      </label>
                      <label className="radio">
                        <input type="radio" value="Faible" name="qualiteEnvironnement"onChange={this.props.onChange} ></input>
                       Faible
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyenne" name="qualiteEnvironnement"onChange={this.props.onChange} ></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bonne" name="qualiteEnvironnement"onChange={this.props.onChange} ></input>
                      Bonne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bonne" name="qualiteEnvironnement"onChange={this.props.onChange} ></input>
                        Très bonne
                      </label>
                  </div>

                  <h3>
                  Proximite des services publiques
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Tres eloignes" name="proximiteServicesPublics"onChange={this.props.onChange} ></input>
                          Trés éloignés
                        </label>
                        <label className="radio">
                          <input type="radio" value="Asez eloignes" name="proximiteServicesPublics"onChange={this.props.onChange} ></input>
                         Assez éloignés
                        </label>
                        <label className="radio">
                          <input type="radio" value="Normales" name="proximiteServicesPublics"onChange={this.props.onChange} ></input>
                         Normales
                        </label>
                        <label className="radio">
                          <input type="radio" value="Proches" name="proximiteServicesPublics"onChange={this.props.onChange} ></input>
                        Proches
                        </label>
                        <label className="radio">
                          <input type="radio" value="Tres proches" name="proximiteServicesPublics"onChange={this.props.onChange} ></input>
                          Très proches
                        </label>
                    </div>



            <h1>Critère Généraux</h1><hr/>

            <h3>
            Qualité de la distribution
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Mauvaise" name="qualiteDistribution"onChange={this.props.onChange} ></input>
                    Mauvaise
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="qualiteDistribution"onChange={this.props.onChange} ></input>
                   Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyenne" name="qualiteDistribution"onChange={this.props.onChange} ></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bonne" name="qualiteDistribution"onChange={this.props.onChange} ></input>
                  Bonne
                  </label>
              </div>

              <h3>
              Etat des murs et des plafonds
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="A refaire" name="etatMursPlafonds"onChange={this.props.onChange} ></input>
                      A refaire
                    </label>
                    <label className="radio">
                      <input type="radio" value="Usage" name="etatMursPlafonds"onChange={this.props.onChange} ></input>
                     Usagé
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatMursPlafonds"onChange={this.props.onChange} ></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Recent" name="etatMursPlafonds"onChange={this.props.onChange} ></input>
                    Récent
                    </label>
                    <label className="radio">
                      <input type="radio" value="Neuf" name="etatMursPlafonds"onChange={this.props.onChange} ></input>
                      Neuf
                    </label>
                </div>

                <h3>
                Sols et revetement de sols
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="A refaire" name="solsEtRevetementSols"onChange={this.props.onChange} ></input>
                        A refaire
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="solsEtRevetementSols"onChange={this.props.onChange} ></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Convenable" name="solsEtRevetementSols"onChange={this.props.onChange} ></input>
                       Convenable
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bon" name="solsEtRevetementSols"onChange={this.props.onChange} ></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bon" name="solsEtRevetementSols"onChange={this.props.onChange} ></input>
                        Très bon
                      </label>
                  </div>

            <h1>Séjour</h1><hr/>

            <h3>
            Taille du sejour
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petit" name="tailleSejour"onChange={this.props.onChange} ></input>
                    Trés petit
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petit" name="tailleSejour"onChange={this.props.onChange} ></input>
                   Petit
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normal" name="tailleSejour"onChange={this.props.onChange} ></input>
                   Normal
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grand" name="tailleSejour"onChange={this.props.onChange} ></input>
                  Grand
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grand" name="tailleSejour"onChange={this.props.onChange} ></input>
                    Très grand
                  </label>
              </div>

              <h3>
              Exposition du séjour
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvaise" name="expositionSejour"onChange={this.props.onChange} ></input>
                      Mauvaise
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="expositionSejour"onChange={this.props.onChange} ></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Normale" name="expositionSejour"onChange={this.props.onChange} ></input>
                     Normale
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bonne" name="expositionSejour"onChange={this.props.onChange} ></input>
                    Bonne
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bonne" name="expositionSejour"onChange={this.props.onChange} ></input>
                      Très bonne
                    </label>
                </div>

                <h3>
                Vu du séjour
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="VisAVis/Proche" name="vueSejour"onChange={this.props.onChange} ></input>
                        Vis-à-vis/Proche
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="vueSejour"onChange={this.props.onChange} ></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Ordinaire" name="vueSejour"onChange={this.props.onChange} ></input>
                       Ordinaire
                      </label>
                      <label className="radio">
                        <input type="radio" value="Belle" name="vueSejour"onChange={this.props.onChange} ></input>
                      Belle
                      </label>
                      <label className="radio">
                        <input type="radio" value="Exceptionnelle" name="vueSejour"onChange={this.props.onChange} ></input>
                        Exeptionnelle
                      </label>
                  </div>

                  <h3>
                  Luminosité
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Mauvaise" name="luminosite"onChange={this.props.onChange} ></input>
                          Mauvaise
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="luminosite"onChange={this.props.onChange} ></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Simple" name="luminosite"onChange={this.props.onChange} ></input>
                         Simple
                        </label>
                        <label className="radio">
                          <input type="radio" value="Bonne" name="luminosite"onChange={this.props.onChange} ></input>
                        Bonne
                        </label>
                        <label className="radio">
                          <input type="radio" value="Tres bonne" name="luminosite"onChange={this.props.onChange} ></input>
                          Trés bonne
                        </label>
                    </div>

                    <h3>
                    cheminée
                    </h3>
                      <div className="control">
                          <label className="radio">
                            <input type="radio" value="Inexistante" name="cheminee"onChange={this.props.onChange} ></input>
                            Inexistante
                          </label>
                          <label className="radio">
                            <input type="radio" value="Mediocre" name="cheminee"onChange={this.props.onChange} ></input>
                           Médiocre
                          </label>
                          <label className="radio">
                            <input type="radio" value="Simple" name="cheminee"onChange={this.props.onChange} ></input>
                           Simple
                          </label>
                          <label className="radio">
                            <input type="radio" value="Belle" name="cheminee"onChange={this.props.onChange} ></input>
                          Belle
                          </label>
                          <label className="radio">
                            <input type="radio" value="Exceptionnelle" name="cheminee"onChange={this.props.onChange} ></input>
                            Exeptionnelle
                          </label>
                      </div>


            <h1>Cuisine</h1><hr/>

            <h3>
            Taille
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petite" name="taille"onChange={this.props.onChange} ></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petite" name="taille"onChange={this.props.onChange} ></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="taille"onChange={this.props.onChange} ></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grande" name="taille"onChange={this.props.onChange} ></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grande" name="taille"onChange={this.props.onChange} ></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Equipement
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Inexistant" name="equipement"onChange={this.props.onChange} ></input>
                      Inexistant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="equipement"onChange={this.props.onChange} ></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="equipement"onChange={this.props.onChange} ></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="equipement"onChange={this.props.onChange} ></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="equipement"onChange={this.props.onChange} ></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Etat général
                </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvais" name="etatGeneral"onChange={this.props.onChange} ></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="etatGeneral"onChange={this.props.onChange} ></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatGeneral"onChange={this.props.onChange} ></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="etatGeneral"onChange={this.props.onChange} ></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="etatGeneral"onChange={this.props.onChange} ></input>
                      Très bon
                    </label>
                </div>

                  <h3>
                  Agrément
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Mauvais" name="agrement"onChange={this.props.onChange} ></input>
                          Mauvais
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="agrement"onChange={this.props.onChange} ></input>
                         Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Moyen" name="agrement"onChange={this.props.onChange} ></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" value="Agreable" name="agrement"onChange={this.props.onChange} ></input>
                        Agréable
                        </label>
                        <label className="radio">
                          <input type="radio" value="Tres agreable" name="agrement"onChange={this.props.onChange} ></input>
                          Très agréable
                        </label>
                    </div>


            <h1>Chambre</h1><hr/>

            <h3>
            Taille des pièces
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petite" name="tailleDesPieces"onChange={this.props.onChange} ></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petite" name="tailleDesPieces"onChange={this.props.onChange} ></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="tailleDesPieces"onChange={this.props.onChange} ></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grande" name="tailleDesPieces"onChange={this.props.onChange} ></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grande" name="tailleDesPieces"onChange={this.props.onChange} ></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Etat des pièces
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvais" name="etatDesPieces"onChange={this.props.onChange} ></input>
                      Mauvais
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="etatDesPieces"onChange={this.props.onChange} ></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="etatDesPieces"onChange={this.props.onChange} ></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bon" name="etatDesPieces"onChange={this.props.onChange} ></input>
                    Bon
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bon" name="etatDesPieces"onChange={this.props.onChange} ></input>
                      Très bon
                    </label>
                </div>

                <h3>
                Exposition aux bruits
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Tres bruyant" name="expositionAuxBruits"onChange={this.props.onChange} ></input>
                        Trés bruyant
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bruyant" name="expositionAuxBruits"onChange={this.props.onChange} ></input>
                       Bruyant
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyenne" name="expositionAuxBruits"onChange={this.props.onChange} ></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Faible" name="expositionAuxBruits"onChange={this.props.onChange} ></input>
                      Faible
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres faible" name="expositionAuxBruits"onChange={this.props.onChange} ></input>
                        Très faible
                      </label>
                  </div>


            <h1>Sanitaire</h1><hr/>

            <h3>
            Taille des pièces sanitaires
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres petite" name="taillePiecesSanitaires"onChange={this.props.onChange} ></input>
                    Trés petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Petite" name="taillePiecesSanitaires"onChange={this.props.onChange} ></input>
                   Petite
                  </label>
                  <label className="radio">
                    <input type="radio" value="Normale" name="taillePiecesSanitaires"onChange={this.props.onChange} ></input>
                   Normale
                  </label>
                  <label className="radio">
                    <input type="radio" value="Grande" name="taillePiecesSanitaires"onChange={this.props.onChange} ></input>
                  Grande
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres grande" name="taillePiecesSanitaires"onChange={this.props.onChange} ></input>
                    Trés Grande
                  </label>
              </div>

              <h3>
              Nombre de sanitaire
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Inexistant" name="nombreDeSanitaires"onChange={this.props.onChange} ></input>
                      Inexistant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Insuffisant" name="nombreDeSanitaires"onChange={this.props.onChange} ></input>
                     Insuffisant
                    </label>
                    <label className="radio">
                      <input type="radio" value="Normal" name="nombreDeSanitaires"onChange={this.props.onChange} ></input>
                     Normal
                    </label>
                    <label className="radio">
                      <input type="radio" value="Eleve" name="nombreDeSanitaires"onChange={this.props.onChange} ></input>
                    Elevé
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres eleve" name="nombreDeSanitaires"onChange={this.props.onChange} ></input>
                      Très elevé
                    </label>
                </div>

                <h3>
                Qualité et etat des sanitaires
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvais" name="qualiteEtatSanitaires"onChange={this.props.onChange} ></input>
                        Mauvais
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="qualiteEtatSanitaires"onChange={this.props.onChange} ></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyen" name="qualiteEtatSanitaires"onChange={this.props.onChange} ></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bon" name="qualiteEtatSanitaires"onChange={this.props.onChange} ></input>
                      Bon
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bon" name="qualiteEtatSanitaires"onChange={this.props.onChange} ></input>
                        Très bon
                      </label>
                  </div>

            <h1>Energie</h1><hr/>

            <h3>
            Facture energitique
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Tres elevee" name="factureEnergetique"onChange={this.props.onChange} ></input>
                    Trés elevée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Elevee" name="factureEnergetique"onChange={this.props.onChange} ></input>
                   Elevée
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyenne" name="factureEnergetique"onChange={this.props.onChange} ></input>
                   Moyenne
                  </label>
                  <label className="radio">
                    <input type="radio" value="Faible" name="factureEnergetique"onChange={this.props.onChange} ></input>
                  Faible
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres faible" name="factureEnergetique"onChange={this.props.onChange} ></input>
                    Très faible
                  </label>
              </div>

              <h3>
              Installation électrique
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Mauvaise" name="installationElectrique"onChange={this.props.onChange} ></input>
                      Mauvaise
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="installationElectrique"onChange={this.props.onChange} ></input>
                     Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyenne" name="installationElectrique"onChange={this.props.onChange} ></input>
                     Moyenne
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bonne" name="installationElectrique"onChange={this.props.onChange} ></input>
                    Bonne
                    </label>
                    <label className="radio">
                      <input type="radio" value="Tres bonne" name="installationElectrique"onChange={this.props.onChange} ></input>
                      Très bonne
                    </label>
                </div>

                <h3>
                Installation du gaz
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Mauvaise" name="installationGaz"onChange={this.props.onChange} ></input>
                        Mauvaise
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="installationGaz"onChange={this.props.onChange} ></input>
                       Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyenne" name="installationGaz"onChange={this.props.onChange} ></input>
                       Moyenne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bonne" name="installationGaz"onChange={this.props.onChange} ></input>
                      Bonne
                      </label>
                      <label className="radio">
                        <input type="radio" value="Tres bonne" name="installationGaz"onChange={this.props.onChange} ></input>
                        Très bonne
                      </label>
                  </div>

            <h1>Annexes</h1><hr/>

            <h3>
            Balcon Loggia Terasse
            </h3>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Aucun" name="balconLogiaTerasse"onChange={this.props.onChange} ></input>
                    Aucun
                  </label>
                  <label className="radio">
                    <input type="radio" value="Mediocre" name="balconLogiaTerasse"onChange={this.props.onChange} ></input>
                    Médiocre
                  </label>
                  <label className="radio">
                    <input type="radio" value="Moyen" name="balconLogiaTerasse"onChange={this.props.onChange} ></input>
                   Moyen
                  </label>
                  <label className="radio">
                    <input type="radio" value="Bien" name="balconLogiaTerasse"onChange={this.props.onChange} ></input>
                   Bien
                  </label>
                  <label className="radio">
                    <input type="radio" value="Tres bien" name="balconLogiaTerasse"onChange={this.props.onChange} ></input>
                  Trés Bien
                  </label>
              </div>

              <h3>
              Cave / sous-sol
              </h3>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Aucun" name="caveSousSol"onChange={this.props.onChange} ></input>
                      Aucun
                    </label>
                    <label className="radio">
                      <input type="radio" value="Mediocre" name="caveSousSol"onChange={this.props.onChange} ></input>
                      Médiocre
                    </label>
                    <label className="radio">
                      <input type="radio" value="Moyen" name="caveSousSol"onChange={this.props.onChange} ></input>
                     Moyen
                    </label>
                    <label className="radio">
                      <input type="radio" value="Bien" name="caveSousSol"onChange={this.props.onChange} ></input>
                     Bien
                    </label>
                    <label className="radio">
                      <input type="radio" value="Exceptionnel" name="caveSousSol"onChange={this.props.onChange} ></input>
                    Exeptionnel
                    </label>
                </div>

                <h3>
                Agrément du jardin
                </h3>
                  <div className="control">
                      <label className="radio">
                        <input type="radio" value="Tres mediocre" name="agrementJardin"onChange={this.props.onChange} ></input>
                        Trés mediocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Mediocre" name="agrementJardin"onChange={this.props.onChange} ></input>
                        Médiocre
                      </label>
                      <label className="radio">
                        <input type="radio" value="Moyen" name="agrementJardin"onChange={this.props.onChange} ></input>
                       Moyen
                      </label>
                      <label className="radio">
                        <input type="radio" value="Bien" name="agrementJardin"onChange={this.props.onChange} ></input>
                       Bien
                      </label>
                      <label className="radio">
                        <input type="radio" value="Remarquable" name="agrementJardin"onChange={this.props.onChange} ></input>
                      Remarquable
                      </label>
                  </div>

                  <h3>
                  Garage ou parking couvert
                  </h3>
                    <div className="control">
                        <label className="radio">
                          <input type="radio" value="Sans" name="garageOuParkingOuvert"onChange={this.props.onChange} ></input>
                          Sans
                        </label>
                        <label className="radio">
                          <input type="radio" value="Mediocre" name="garageOuParkingOuvert"onChange={this.props.onChange} ></input>
                          Médiocre
                        </label>
                        <label className="radio">
                          <input type="radio" value="Moyen" name="garageOuParkingOuvert"onChange={this.props.onChange} ></input>
                         Moyen
                        </label>
                        <label className="radio">
                          <input type="radio" value="Bien" name="garageOuParkingOuvert"onChange={this.props.onChange} ></input>
                         Bien
                        </label>
                        <label className="radio">
                          <input type="radio" value="Exceptionnel" name="garageOuParkingOuvert"onChange={this.props.onChange} ></input>
                        Exceptionnel
                        </label>
                    </div>

                    <h3>
                    Combles
                    </h3>
                      <div className="control">
                          <label className="radio">
                            <input type="radio" value="Aucun" name="combles"onChange={this.props.onChange} ></input>
                            Aucun
                          </label>
                          <label className="radio">
                            <input type="radio" value="Peu" name="combles"onChange={this.props.onChange} ></input>
                            Peu
                          </label>
                          <label className="radio">
                            <input type="radio" value="Moyen" name="combles"onChange={this.props.onChange} ></input>
                           Moyen
                          </label>
                          <label className="radio">
                            <input type="radio" value="Bien" name="combles"onChange={this.props.onChange} ></input>
                           Bien
                          </label>
                          <label className="radio">
                            <input type="radio" value="Tres bien" name="combles"onChange={this.props.onChange} ></input>
                          Trés Bien
                          </label>
                      </div>


          </div>
        );
      }
}

export default Step3Super;
