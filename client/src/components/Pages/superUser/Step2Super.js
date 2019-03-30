import React, { Component } from "react";
import classnames from "classnames";

class Step2Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 2) {
          return null;
        }
        return (
          <div>
            <h1>Localisation du bien</h1>

            <div className="field">
              <div className="control">
                <label className="text">
                N°
                  <input
                    className="input is-medium"
                    type="text"
                    name="numero"
                    placeholder="numero"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Voie
                  <input
                    className="input is-medium"
                    type="text"
                    name="voie"
                    placeholder="voie"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Code Postal
                  <input
                    className="input is-medium"
                    type="text"
                    name="codePostal"
                    placeholder="code postl"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Ville
                  <input
                    className="input is-medium"
                    type="text"
                    name="ville"
                    placeholder="ville"
                    required
                  />
                  </label>
              </div>
           </div>

           <h1> Informations </h1>
           <div className="field">
              <div className="control">
                <label className="text">
                Année de construction
                  <input
                    className="input is-medium"
                    type="text"
                    name="annneConstruction"
                    placeholder="annne de construction"
                    required
                  />
                  </label>
              </div>
           </div>

           <p>Type maison here</p>

           <div className="field">
              <div className="control">
                <label className="text">
                Nombre de pièces
                  <input
                    className="input is-medium"
                    type="text"
                    name="nombreChambres"
                    placeholder="noùmbre de pièces"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                nombre Chambres
                  <input
                    className="input is-medium"
                    type="text"
                    name="nombreChambres"
                    placeholder="nombre Chambres"
                    required
                  />
                  </label>
              </div>
           </div>


           <div className="field">
              <div className="control">
                <label className="text">
                surface Habitable
                  <input
                    className="input is-medium"
                    type="text"
                    name="surfaceHabitable"
                    placeholder="surface habitable"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                surface Terrain
                  <input
                    className="input is-medium"
                    type="text"
                    name="surfaceTerrain"
                    placeholder="surface Terrain  "
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                nombre Niveaux
                  <input
                    className="input is-medium"
                    type="text"
                    name="nombreNiveaux"
                    placeholder="nombre niveaux"
                    required
                  />
                  </label>
              </div>
           </div>
          
          <label className="radio">
            Ascenseur
           <div className="control">
                <label className="radio">
                  <input type="radio" name="ascenseur"></input>
                  Non
                </label>
                <label className="radio">
                  <input type="radio" name="ascenseur"></input>
                  Oui
                </label>
            </div>
            </label>

            <label className="radio">
            Balcon/Terasse
           <div className="control">
                <label className="radio">
                  <input type="radio" name="balconOuTerrasse"></input>
                  Non
                </label>
                <label className="radio">
                  <input type="radio" name="balconOuTerrasse"></input>
                  Oui
                </label>
            </div>
            </label>

            <label className="radio">
            Libre A La Vente
           <div className="control">
                <label className="radio">
                  <input type="radio" name="LibreALaVente"></input>
                  Non
                </label>
                <label className="radio">
                  <input type="radio" name="LibreALaVente"></input>
                  Oui
                </label>
            </div>
            </label>

           <h1>Charges et impots</h1>
           
           <div className="field">
              <div className="control">
                <label className="text">
               Charges Annuelles totales
                  <input
                    className="input is-medium"
                    type="text"
                    name="chargesAnnuellesTotales"
                    placeholder="charges Annuelles Totales"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Charges de copropriété
                  <input
                    className="input is-medium"
                    type="text"
                    name="chargesDeCopropriete"
                    placeholder="charges De Copropriete"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                impots Fonciers
                  <input
                    className="input is-medium"
                    type="text"
                    name="impotsFonciers"
                    placeholder="impots Fonciers"
                    required
                  />
                  </label>
              </div>
           </div>

           <h1>Points forts et faibles</h1>
            <div className="fort">
              <button>plus</button>
              <div className="field">
              <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    
                    placeholder="points Fort"
                    required
                  />
            
              </div>
           </div>
              <button>moins</button>
            </div>

            <div className="faible">
              <button>plus</button>
              <div className="field">
              <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    
                    placeholder="points Faibles"
                    required
                  />
            
              </div>
           </div>
              <button>moins</button>
            </div>

            <h1>Commentaires confidentiels</h1>    
            <textarea className="textarea" name="commentairesConfidentiels" placeholder="Ce commentaire n'apparaitpas dans les documents clients"></textarea>


        </div>
        );
      }
}

export default Step2Super;
