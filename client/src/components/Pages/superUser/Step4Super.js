import React, { Component } from "react";
import classnames from "classnames";
import MapSuper from "../../Pages/MapSuper";



class Step4Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 4) {
          return null;
        }
        return (
          <div>
          <h1>City's name</h1> <hr/>
          
          <div class="columns">
              <div class="column is-three-fifths">
              <div class="columns">
              <div class="column is-half">
                <MapSuper id="map-container"/>
                <h2>Votre secteur de reference</h2><hr/>

                <div className="control">
                    <label className="radio">
                      <input type="radio" name="secteur"></input>
                      idk how is this generated
                    </label>
                </div>
                </div>

                <div class="column">
                <p>Type de Bien: </p>
                <p>Prix moyen du secteur: </p>
                <p>Indice de qualité: </p>

                <p>Decote si bien vende occupé: </p>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="decoteBienOccupe"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="decoteBienOccupe"></input>
                      %
                    </label>
                </div>

                <p>Autres élements: </p>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="autresElements"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="autresElements"></input>
                      %
                    </label>
                </div>

                <p>Travaux à réaliser: </p>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="travauxARealiser"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="travauxARealiser"></input>
                      %
                    </label>
                </div>

                <p>Valorisation du terrain: </p>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="valorisationTerrain"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="valorisationTerrain"></input>
                      %
                    </label>
                </div>

                <p>Renové: </p>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="renove"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="renove"></input>
                      %
                    </label>
                </div>

                </div>
                </div>
              </div>



              <div class="column">
              <h1> Synthèse de l'étude </h1>

              <h2>Les méthodes utilisée</h2>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name=""></input>
                    Methode par capitalisation
                  </label>
                  <label className="radio">
                    <input type="radio" name=""></input>
                    Methode par comparaison
                  </label>
              </div>
              <p>Moyenne des méthodes</p>

              <h2>Le prix et les honoraires</h2>
              <p>Affichage net du vendeur ?</p>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name="affichageNetVendeur"></input>
                    Oui
                  </label>
                  <label className="radio">
                    <input type="radio" name="affichageNetVendeur"></input>
                    Non
                  </label>
              </div>

              <h2>Le prix final</h2>
              <p>Prix final: </p>

              </div>

          </div>
          </div>


        );
      }
}

export default Step4Super;
