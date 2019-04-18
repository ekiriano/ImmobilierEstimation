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

                </div>

                <div class="column">
                <p>Type de Bien: </p>
                <p>Prix moyen du secteur: </p>
                <p>Indice de qualité: </p>

                <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label">Decote si bien vendu occupé: </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-small" type="texte" placeholder="decoteBienOccupe" name="decoteBienOccupe" required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="decoteBienOccupeR"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="decoteBienOccupeR"></input>
                      %
                    </label>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label">Autres élements: </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-small" type="texte" placeholder="autresElements" name="autresElements" required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="autresElementsR"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="autresElementsR"></input>
                      %
                    </label>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label">Travaux à réaliser </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-small" type="texte" placeholder="travauxARealiser" name="travauxARealiser" required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="travauxARealiserR"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="travauxARealiserR"></input>
                      %
                    </label>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label">Valorisation du terrain </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-small" type="texte" placeholder="valorisationTerrain" name="valorisationTerrain" required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="valorisationTerrainR"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="valorisationTerrainR"></input>
                      %
                    </label>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label">Rénové </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-small" type="texte" placeholder="renove" name="renove" required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                    <label className="radio">
                      <input type="radio" name="renoveR"></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" name="renoveR"></input>
                      %
                    </label>
                </div>

                </div>
                </div>
              </div>



              <div class="column">
              <h1> Synthèse de l'étude </h1>

              <h2>Les méthodes utilisée</h2> <hr/>
              <div className="control">
                  <label className="radio">
                    <input type="radio" name=""></input>
                    Methode par référence
                  </label>
                  <label className="radio">
                    <input type="radio" name=""></input>
                    Methode par comparaison
                  </label>
              </div>
              <p>Moyenne des méthodes:</p>

              <h2>Le prix et les honoraires</h2> <hr/>
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
