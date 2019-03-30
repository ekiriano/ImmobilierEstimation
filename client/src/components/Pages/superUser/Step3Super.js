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
            <h1>Elements Principaux</h1>
            <label>
            Etat et Qualité du gros oeuvre
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
            </label>

            <label>
            Epoque de construction
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
            </label>

            <label>
            Mitoyenneté
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
            </label>

            
            <label>
            Agrément général
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
            </label>

            <label>
            Standing
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
            </label>

            <label>
            accessibilite
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
            </label>

            <label>
            Tout à l'égout
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
            </label>

            <h1>Autre Elements</h1>
            <h1>Environement</h1>
            <h1>Critère Généraux</h1>
            <h1>Séjour</h1>
            <h1>Cuisine</h1>
            <h1>Chambre</h1>
            <h1>Sanitaire</h1>
            <h1>Energie</h1>
            <h1>Annexes</h1>
          </div>
        );
      }
}

export default Step3Super;
