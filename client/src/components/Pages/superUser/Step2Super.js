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
            <h1>Localisation du bien</h1> <hr/>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">N°</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Numéro"
                    name="numero"
                    onChange={this.props.onChange}
                    value={this.props.bienImmobillier.localisationBien.numero}
                     required
                     />
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Voie</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Voie"
                    name="voie"
                    value={this.props.bienImmobillier.localisationBien.voie}
                    onChange={this.props.onChange}
                    required/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Code postal</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Code postal"
                    name="codePostal"
                    value={this.props.bienImmobillier.localisationBien.codePostal}
                    onChange={this.props.onChange}
                    required/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Ville</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Ville"
                    name="ville"
                    value={this.props.bienImmobillier.localisationBien.ville}
                    onChange={this.props.onChange}
                    required/>
                  </p>
                </div>
              </div>
            </div>

           <h1> Informations </h1> <hr/>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Année de construction</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Année de construction"
                   name="anneeConstruction"
                   value={this.props.bienImmobillier.informations.anneeConstruction}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <div className="field is-horizontal">
           <div className="field-label is-normal">
            <label className="label">Type de Bien</label>
          </div>
          <div className="field-body">
            <div className="field is-big">
              <div className="control">
                <div className="select is-fullwidth">
                  <select>
                    <option>Veuillez selectionner un type</option>
                    <option>Maison</option>
                    <option>Appartement</option>
                    <option>On pourra rajouter...</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Nombre de pièces</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Nombre de pièces"
                   name="nombrePieces"
                   value={this.props.bienImmobillier.informations.nombrePieces}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Nombre de chambres</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Nombre de chambres"
                   name="nombreChambres"
                   value={this.props.bienImmobillier.informations.nombreChambres}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>


           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Surface habitable</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Surface habitable"
                   name="surfaceHabitable"
                   value={this.props.bienImmobillier.informations.surfaceHabitable}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Surface terrain</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Surface terrain"
                   name="surfaceTerrain"
                   value={this.props.bienImmobillier.informations.surfaceTerrain}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Nombre de niveaux</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Nombre de niveaux"
                   name="nombreNiveaux"
                   value={this.props.bienImmobillier.informations.nombreNiveaux}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
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

           <h1>Charges et impots</h1> <hr/>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Charges annuelles totales</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Charges annuelles totales"
                   name="chargesAnnuellesTotales"
                   value={this.props.bienImmobillier.chargesEtImpots.chargesAnnuellesTotales}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Charges de copropriete</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Charges de copropriete"
                   name="chargesDeCopropriete"
                   value={this.props.bienImmobillier.chargesEtImpots.chargesDeCopropriete}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <div className="field is-horizontal">
             <div className="field-label is-normal">
               <label className="label">Impots fonciers</label>
             </div>
             <div className="field-body">
               <div className="field">
                 <p className="control">
                   <input className="input" type="texte" placeholder="Impots fonciers"
                   name="impotsFonciers"
                   value={this.props.bienImmobillier.chargesEtImpots.impotsFonciers}
                   onChange={this.props.onChange}
                   required/>
                 </p>
               </div>
             </div>
           </div>

           <h1>Points forts et faibles</h1> <hr/>
            <div className="fort">
              <button>plus</button>
              <div className="field">
              <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="points Fort"
                    name="pointsForts"
                    onChange={this.props.onChange}
                    value={this.props.bienImmobillier.pointsFortsPointsFaible.pointsForts}
                    required/>

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
                    name="pointsFortsPointsFaible"
                    placeholder="points Faibles"
                    onChange={this.props.onChange}
                    value={this.props.bienImmobillier.pointsFortsPointsFaible.pointsFaibles}
                    required/>

              </div>
           </div>
              <button>moins</button>
            </div>

            <h1>Commentaires confidentiels</h1> <hr/>
            <textarea className="textarea"
            name="commentairesConfidentiels"
            placeholder="Ce commentaire n'apparait pas dans les documents clients"
            value={this.props.bienImmobillier.commentairesConfidentiels}
            required>
            </textarea>


        </div>
        );
      }
}

export default Step2Super;
