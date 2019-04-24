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
          <h1>{this.props.ville}</h1> <hr/>

          <div className="columns">
              <div className="column is-three-fifths">
              <div className="columns">
              <div className="column is-half">
                <MapSuper id="map-container"/>
                </div>

                <div className="column">
                <p>Type de Bien: {this.props.typeBienAffiche} </p>
                <p>Indice de qualité: </p>

                <div className="field is-horizontal">
                  <div className="field-label is-small">
                    <label className="label">Decote si bien vendu occupé: </label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <p className="control">
                        <input className="input is-small" type="texte" placeholder="decoteBienOccupe"
                        name="decoteBienOccupe"
                        value={this.props.decoteBienOccupe}
                        onChange={this.props.onChange} required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="$"
                      name="decoteBienOccupeR"
                      checked={this.props.decoteBienOccupeR === "$"}
                      onChange={this.props.onChange}></input>
                      $
                    </label>
                    <label className="radio">
                      <input type="radio" value="%"
                      name="decoteBienOccupeR"
                      checked={this.props.decoteBienOccupeR === "%"}
                      onChange={this.props.onChange}></input>
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
                        <input className="input is-small" type="texte" placeholder="autresElements"
                        name="autresElements"
                        value={this.props.autresElements}
                        onChange={this.props.onChange} required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                <label className="radio">
                  <input type="radio" value="$"
                  name="autresElementsR"
                  checked={this.props.autresElementsR === "$"}
                  onChange={this.props.onChange}></input>
                  $
                </label>
                <label className="radio">
                  <input type="radio" value="%"
                  name="autresElementsR"
                  checked={this.props.autresElementsR === "%"}
                  onChange={this.props.onChange}></input>
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
                        <input className="input is-small" type="texte" placeholder="travauxARealiser" name="travauxARealiser" onChange={this.props.onChange} required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                <label className="radio">
                  <input type="radio" value="$"
                  name="travauxARealiserR"
                  checked={this.props.travauxARealiserR === "$"}
                  onChange={this.props.onChange}></input>
                  $
                </label>
                <label className="radio">
                  <input type="radio" value="%"
                  name="travauxARealiserR"
                  checked={this.props.travauxARealiserR === "%"}
                  onChange={this.props.onChange}></input>
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
                        <input className="input is-small" type="texte" placeholder="valorisationTerrain" name="valorisationTerrain" onChange={this.props.onChange} required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                <label className="radio">
                  <input type="radio" value="$"
                  name="valorisationTerrainR"
                  checked={this.props.valorisationTerrainR === "$"}
                  onChange={this.props.onChange}></input>
                  $
                </label>
                <label className="radio">
                  <input type="radio" value="%"
                  name="valorisationTerrainR"
                  checked={this.props.valorisationTerrainR === "%"}
                  onChange={this.props.onChange}></input>
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
                        <input className="input is-small" type="texte" placeholder="renove" name="renove" onChange={this.props.onChange} required/>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="control">
                <label className="radio">
                  <input type="radio" value="$"
                  name="renoveR"
                  checked={this.props.renoveR === "$"}
                  onChange={this.props.onChange}></input>
                  $
                </label>
                <label className="radio">
                  <input type="radio" value="%"
                  name="renoveR"
                  checked={this.props.renoveR === "%"}
                  onChange={this.props.onChange}></input>
                  %
                </label>
                </div>

                </div>
                </div>
              </div>



              <div className="column">
            {/*  <h1> Synthèse de l'étude </h1>

              <h2>Les méthodes utilisée</h2> <hr/>
              <div className="control">
              <label className="radio">
                <input type="radio" value="1"
                name="methodeReferenceSelected"
                checked={this.props.methodeReferenceSelected === "1"}
                onChange={this.props.onChange}></input>
                { this.props.methodeReferenceSelected === 1
                  ? this.props.prix_reference
                  : <p>choisir methode par reference</p> }
              </label>
            <label className="radio">
              <input type="radio" value="1"
              name="methodeComparaisonSelected"
              checked={this.props.methodeComparaisonSelected === "1"}
              onChange={this.props.onChange}></input>
              { this.props.methodeComparaisonSelected === 1
                ? this.props.prix_comparaison
                : <p>choisir methode par reference</p> }
            </label>
              </div>
              <p>Moyenne des méthodes:</p>

              <h2>Le prix et les honoraires</h2> <hr/>
              <p>Affichage net du vendeur ?</p>
              <div className="control">
                  <label className="radio">
                    <input type="radio" value="Oui"
                    name="affichageNetVendeur"
                    checked={this.props.affichageNetVendeur === "Oui"}
                    onChange={this.props.onChange}></input>
                    Oui
                  </label>
                  <label className="radio">
                    <input type="radio" value="Non"
                    name="affichageNetVendeur"
                    checked={this.props.affichageNetVendeur === "Non"}
                    onChange={this.props.onChange}></input>
                    Non
                  </label>
              </div>

              <h2>Le prix final</h2>
              <p>Prix final: {this.props.prix_final}</p>
              */}

              <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Synthése de l'étude
                </p>
              </header>
              <div className="card-content">

                <div className="content">
                <header className="card-header">
                  <p className="card-header-title">
                    1. Les methodes utilisées
                  </p>
                </header>
                <div className="control">
                <label className="checkbox">
                  <input
                  type="checkbox"
                  name="methodeReferenceSelected"
                  checked={this.props.methodeReferenceSelected}
                  onChange={this.props.onChange}></input>
                    méthode par référence: {this.props.prix_reference}€
                </label>
              <label className="checkbox">
                <input
                type="checkbox"
                name="methodeComparaisonSelected"
                checked={this.props.methodeComparaisonSelected}
                onChange={this.props.onChange}></input>
                  méthode par comparaison: {this.props.prix_comparaison}€
              </label>
              <label className="checkbox">
                <input
                type="checkbox"
                name="methodeCapitalisationSelected"
                checked={this.props.methodeCapitalisationSelected}
                onChange={this.props.onChange}></input>
                  méthode par capitalisation: {this.props.prix_capitalisation}€
              </label>
                </div>
                <header className="card-header">
                  <p className="card-header-title">
                    La moyenne des méthodes: {this.props.moyenne_des_methodes}€
                  </p>
                </header>
                </div>

                <div className="content">
                <header className="card-header">
                  <p className="card-header-title">
                    2. Le prix et les honoraires
                  </p>
                </header>
                <p>Affichage net du vendeur ?</p>
                <div className="control">
                    <label className="radio">
                      <input type="radio" value="Oui"
                      name="affichageNetVendeur"
                      checked={this.props.affichageNetVendeur === "Oui"}
                      onChange={this.props.onChange}></input>
                      Oui
                    </label>
                    <label className="radio">
                      <input type="radio" value="Non"
                      name="affichageNetVendeur"
                      checked={this.props.affichageNetVendeur === "Non"}
                      onChange={this.props.onChange}></input>
                      Non
                    </label>
                </div>
                </div>

                <div className="content">
                <header className="card-header">
                  <p className="card-header-title">
                    3. Le prix final et remarques
                  </p>
                </header>
                <header className="card-header">
                  <p className="card-header-title">
                    Le prix final des méthodes: {this.props.prix_final}€
                  </p>
                </header>
                <p>
                  Remarques de l'expert
                </p>
                  <div className="control">
                  <label className="radio">
                    <input type="radio" value="1"
                    name="textePredifiniR"
                    checked={this.props.textePredifiniR === "1"}
                    onChange={this.props.onChange}></input>
                    Texte prédifini
                  </label>
                  </div>
                  <textarea
                    className="textarea"
                    name="textePredifini"
                    placeholder="Titre du dossier"
                    value={this.props.textePredifini}
                    onChange={this.props.onChange}
                    required
                  />
                </div>
              </div>
            </div>

              </div>

          </div>
          </div>


        );
      }
}

export default Step4Super;
