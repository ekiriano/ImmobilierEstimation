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
        <div className="columns">
          <div className="column">
            <h1>Elements Principaux</h1> <hr />
            <h3>Etat et Qualité du gros oeuvre</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="etatQualiteGrosOeuvre"
                  checked={this.props.etatQualiteGrosOeuvre === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="etatQualiteGrosOeuvre"
                  checked={this.props.etatQualiteGrosOeuvre === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="etatQualiteGrosOeuvre"
                  checked={this.props.etatQualiteGrosOeuvre === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="etatQualiteGrosOeuvre"
                  checked={this.props.etatQualiteGrosOeuvre === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="etatQualiteGrosOeuvre"
                  checked={this.props.etatQualiteGrosOeuvre === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très Bon
              </label>
            </div>
            {errors.etatQualiteGrosOeuvre && (
              <p className="help is-danger">{errors.etatQualiteGrosOeuvre}</p>
            )}
            <h3>Epoque de construction</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Pas recherchée"
                  name="epoqueConstruction"
                  checked={this.props.epoqueConstruction === "Pas recherchée"}
                  onChange={this.props.onChange}
                />
                Pas recherchée
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Peu recherchée"
                  name="epoqueConstruction"
                  checked={this.props.epoqueConstruction === "Peu recherchée"}
                  onChange={this.props.onChange}
                />
                Peu recherchée
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Neutre"
                  name="epoqueConstruction"
                  checked={this.props.epoqueConstruction === "Neutre"}
                  onChange={this.props.onChange}
                />
                Neutre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Recherchée"
                  name="epoqueConstruction"
                  checked={this.props.epoqueConstruction === "Recherchée"}
                  onChange={this.props.onChange}
                />
                Recherchée
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés recherchée"
                  name="epoqueConstruction"
                  checked={this.props.epoqueConstruction === "Trés recherchée"}
                  onChange={this.props.onChange}
                />
                Très recherchée
              </label>
            </div>
            {errors.epoqueConstruction && (
              <p className="help is-danger">{errors.epoqueConstruction}</p>
            )}
            <h3>Mitoyenneté</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="3 côtés"
                  name="mitoyennete"
                  checked={this.props.mitoyennete === "3 côtés"}
                  onChange={this.props.onChange}
                />
                3 côtés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="2 côtés"
                  name="mitoyennete"
                  checked={this.props.mitoyennete === "2 côtés"}
                  onChange={this.props.onChange}
                />
                2 côtés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="1 côtés"
                  name="mitoyennete"
                  checked={this.props.mitoyennete === "1 côtés"}
                  onChange={this.props.onChange}
                />
                1 côtés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Par dependance"
                  name="mitoyennete"
                  checked={this.props.mitoyennete === "Par dependance"}
                  onChange={this.props.onChange}
                />
                Par dépendance
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Maison independante"
                  name="mitoyennete"
                  checked={this.props.mitoyennete === "Maison independante"}
                  onChange={this.props.onChange}
                />
                Maison indépendante
              </label>
            </div>
            {errors.mitoyennete && (
              <p className="help is-danger">{errors.mitoyennete}</p>
            )}
            <h3>Agrément général</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="3 côtés"
                  name="agrementGeneral"
                  checked={this.props.agrementGeneral === "3 côtés"}
                  onChange={this.props.onChange}
                />
                3 côtés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="2 côtés"
                  name="agrementGeneral"
                  checked={this.props.agrementGeneral === "2 côtés"}
                  onChange={this.props.onChange}
                />
                2 côtés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="1 côtés"
                  name="agrementGeneral"
                  checked={this.props.agrementGeneral === "1 côtés"}
                  onChange={this.props.onChange}
                />
                1 côtés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Par dependance"
                  name="agrementGeneral"
                  checked={this.props.agrementGeneral === "Par dependance"}
                  onChange={this.props.onChange}
                />
                Par dépendance
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Maison independante"
                  name="agrementGeneral"
                  checked={this.props.agrementGeneral === "Maison independante"}
                  onChange={this.props.onChange}
                />
                Maison indépendante
              </label>
            </div>
            {errors.agrementGeneral && (
              <p className="help is-danger">{errors.agrementGeneral}</p>
            )}
            <h3>Standing</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="standing"
                  checked={this.props.standing === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="standing"
                  checked={this.props.standing === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="standing"
                  checked={this.props.standing === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="standing"
                  checked={this.props.standing === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="standing"
                  checked={this.props.standing === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très Bon
              </label>
            </div>
            {errors.standing && (
              <p className="help is-danger">{errors.standing}</p>
            )}
            <h3>accessibilite</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés difficile"
                  name="accessibilite"
                  checked={this.props.accessibilite === "Trés difficile"}
                  onChange={this.props.onChange}
                />
                Très difficile
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Difficile"
                  name="accessibilite"
                  checked={this.props.accessibilite === "Difficile"}
                  onChange={this.props.onChange}
                />
                Difficile
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normale"
                  name="accessibilite"
                  checked={this.props.accessibilite === "Normale"}
                  onChange={this.props.onChange}
                />
                Normale
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Facile"
                  name="accessibilite"
                  checked={this.props.accessibilite === "Facile"}
                  onChange={this.props.onChange}
                />
                Facile
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés facile"
                  name="accessibilite"
                  checked={this.props.accessibilite === "Trés facile"}
                  onChange={this.props.onChange}
                />
                Très facile
              </label>
            </div>
            {errors.accessibilite && (
              <p className="help is-danger">{errors.accessibilite}</p>
            )}
            <h3>Tout à l'égout</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Rien"
                  name="toutAEgout"
                  checked={this.props.toutAEgout === "Rien"}
                  onChange={this.props.onChange}
                />
                Rien
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="A revoir"
                  name="toutAEgout"
                  checked={this.props.toutAEgout === "A revoir"}
                  onChange={this.props.onChange}
                />
                A revoir
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Assainissment individuel"
                  name="toutAEgout"
                  checked={this.props.toutAEgout === "Assainissment individuel"}
                  onChange={this.props.onChange}
                />
                Assainissment individuel
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Partiel"
                  name="toutAEgout"
                  checked={this.props.toutAEgout === "Partiel"}
                  onChange={this.props.onChange}
                />
                Partiel
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Complet"
                  name="toutAEgout"
                  checked={this.props.toutAEgout === "Complet"}
                  onChange={this.props.onChange}
                />
                Complet
              </label>
            </div>
            {errors.toutAEgout && (
              <p className="help is-danger">{errors.toutAEgout}</p>
            )}
            <h1>Autre Elements</h1> <hr />
            <h3>Qualité Architecturale</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="qualiteArchitecturale"
                  checked={this.props.qualiteArchitecturale === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="qualiteArchitecturale"
                  checked={this.props.qualiteArchitecturale === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="qualiteArchitecturale"
                  checked={this.props.qualiteArchitecturale === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="qualiteArchitecturale"
                  checked={this.props.qualiteArchitecturale === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="qualiteArchitecturale"
                  checked={this.props.qualiteArchitecturale === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Très bonne
              </label>
            </div>
            {errors.qualiteArchitecturale && (
              <p className="help is-danger">{errors.qualiteArchitecturale}</p>
            )}
            <h3>Etat des portes et fenetres</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="etatPortesEtFenetres"
                  checked={this.props.etatPortesEtFenetres === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="etatPortesEtFenetres"
                  checked={this.props.etatPortesEtFenetres === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="etatPortesEtFenetres"
                  checked={this.props.etatPortesEtFenetres === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="etatPortesEtFenetres"
                  checked={this.props.etatPortesEtFenetres === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="etatPortesEtFenetres"
                  checked={this.props.etatPortesEtFenetres === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très Bon
              </label>
            </div>
            {errors.etatPortesEtFenetres && (
              <p className="help is-danger">{errors.etatPortesEtFenetres}</p>
            )}
            <h3>Etat des toitures</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="etatDesToitures"
                  checked={this.props.etatDesToitures === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="etatDesToitures"
                  checked={this.props.etatDesToitures === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="etatDesToitures"
                  checked={this.props.etatDesToitures === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="etatDesToitures"
                  value="Bon"
                  checked={this.props.etatDesToitures === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="etatDesToitures"
                  value="Trés bon"
                  checked={this.props.etatDesToitures === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très Bon
              </label>
            </div>
            {errors.etatDesToitures && (
              <p className="help is-danger">{errors.etatDesToitures}</p>
            )}
            <h3>Cloture Terrain(état/qualité)</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Aucun/Mauvais"
                  name="clotureTerrain"
                  checked={this.props.clotureTerrain === "Aucun/Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="clotureTerrain"
                  checked={this.props.clotureTerrain === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="clotureTerrain"
                  checked={this.props.clotureTerrain === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="clotureTerrain"
                  checked={this.props.clotureTerrain === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
            </div>
            {errors.clotureTerrain && (
              <p className="help is-danger">{errors.clotureTerrain}</p>
            )}
            <h1>Environement</h1>
            <hr />
            <h3>Nuisances Sonores</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bruyant"
                  name="nuissanceSonore"
                  checked={this.props.nuissanceSonore === "Trés bruyant"}
                  onChange={this.props.onChange}
                />
                Trés bruyant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bruyant"
                  name="nuissanceSonore"
                  checked={this.props.nuissanceSonore === "Bruyant"}
                  onChange={this.props.onChange}
                />
                Bruyant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normal"
                  name="nuissanceSonore"
                  checked={this.props.nuissanceSonore === "Normal"}
                  onChange={this.props.onChange}
                />
                Normal
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Calme"
                  name="nuissanceSonore"
                  checked={this.props.nuissanceSonore === "Calme"}
                  onChange={this.props.onChange}
                />
                Calme
              </label>
            </div>
            {errors.nuissanceSonore && (
              <p className="help is-danger">{errors.nuissanceSonore}</p>
            )}
            <h3>Voisinage/ vis-à-vis</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés gênant"
                  name="voisinageVisaVis"
                  checked={this.props.voisinageVisaVis === "Trés gênant"}
                  onChange={this.props.onChange}
                />
                Trés genant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Gênant"
                  name="voisinageVisaVis"
                  checked={this.props.voisinageVisaVis === "Gênant"}
                  onChange={this.props.onChange}
                />
                Genant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normal"
                  name="voisinageVisaVis"
                  checked={this.props.voisinageVisaVis === "Normal"}
                  onChange={this.props.onChange}
                />
                Normal
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Calme"
                  name="voisinageVisaVis"
                  checked={this.props.voisinageVisaVis === "Calme"}
                  onChange={this.props.onChange}
                />
                Calme
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Aucun"
                  name="voisinageVisaVis"
                  checked={this.props.voisinageVisaVis === "Aucun"}
                  onChange={this.props.onChange}
                />
                Aucun
              </label>
            </div>
            {errors.voisinageVisaVis && (
              <p className="help is-danger">{errors.voisinageVisaVis}</p>
            )}
            <h3>Qualité de l'environnement</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="qualiteEnvironnement"
                  checked={this.props.qualiteEnvironnement === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="qualiteEnvironnement"
                  checked={this.props.qualiteEnvironnement === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Faible
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="qualiteEnvironnement"
                  checked={this.props.qualiteEnvironnement === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="qualiteEnvironnement"
                  checked={this.props.qualiteEnvironnement === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="qualiteEnvironnement"
                  checked={this.props.qualiteEnvironnement === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Très bonne
              </label>
            </div>
            {errors.qualiteEnvironnement && (
              <p className="help is-danger">{errors.qualiteEnvironnement}</p>
            )}
            <h3>Proximite des services publiques</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés éloignés"
                  name="proximiteServicesPublics"
                  checked={
                    this.props.proximiteServicesPublics === "Trés éloignés"
                  }
                  onChange={this.props.onChange}
                />
                Trés éloignés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Assez éloignés"
                  checked={
                    this.props.proximiteServicesPublics === "Assez éloignés"
                  }
                  name="proximiteServicesPublics"
                  onChange={this.props.onChange}
                />
                Assez éloignés
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normales"
                  name="proximiteServicesPublics"
                  checked={this.props.proximiteServicesPublics === "Normales"}
                  onChange={this.props.onChange}
                />
                Normales
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Proches"
                  name="proximiteServicesPublics"
                  checked={this.props.proximiteServicesPublics === "Proches"}
                  onChange={this.props.onChange}
                />
                Proches
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés proches"
                  name="proximiteServicesPublics"
                  checked={
                    this.props.proximiteServicesPublics === "Trés proches"
                  }
                  onChange={this.props.onChange}
                />
                Très proches
              </label>
            </div>
            {errors.proximiteServicesPublics && (
              <p className="help is-danger">
                {errors.proximiteServicesPublics}
              </p>
            )}
            <h1>Critère Généraux</h1>
            <hr />
            <h3>Qualité de la distribution</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="qualiteDistribution"
                  checked={this.props.qualiteDistribution === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="qualiteDistribution"
                  checked={this.props.qualiteDistribution === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="qualiteDistribution"
                  checked={this.props.qualiteDistribution === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="qualiteDistribution"
                  checked={this.props.qualiteDistribution === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
            </div>
            {errors.qualiteDistribution && (
              <p className="help is-danger">{errors.qualiteDistribution}</p>
            )}
            <h3>Etat des murs et des plafonds</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="A refaire"
                  name="etatMursPlafonds"
                  checked={this.props.etatMursPlafonds === "A refaire"}
                  onChange={this.props.onChange}
                />
                A refaire
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Usagé"
                  name="etatMursPlafonds"
                  checked={this.props.etatMursPlafonds === "Usagé"}
                  onChange={this.props.onChange}
                />
                Usagé
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="etatMursPlafonds"
                  checked={this.props.etatMursPlafonds === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Récent"
                  name="etatMursPlafonds"
                  checked={this.props.etatMursPlafonds === "Récent"}
                  onChange={this.props.onChange}
                />
                Récent
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Neuf"
                  name="etatMursPlafonds"
                  checked={this.props.etatMursPlafonds === "Neuf"}
                  onChange={this.props.onChange}
                />
                Neuf
              </label>
            </div>
            {errors.etatMursPlafonds && (
              <p className="help is-danger">{errors.etatMursPlafonds}</p>
            )}
            <h3>Sols et revetement de sols</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="A refaire"
                  name="solsEtRevetementSols"
                  checked={this.props.solsEtRevetementSols === "A refaire"}
                  onChange={this.props.onChange}
                />
                A refaire
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="solsEtRevetementSols"
                  checked={this.props.solsEtRevetementSols === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Convenable"
                  name="solsEtRevetementSols"
                  checked={this.props.solsEtRevetementSols === "Convenable"}
                  onChange={this.props.onChange}
                />
                Convenable
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="solsEtRevetementSols"
                  checked={this.props.solsEtRevetementSols === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="solsEtRevetementSols"
                  checked={this.props.solsEtRevetementSols === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très bon
              </label>
            </div>
            {errors.solsEtRevetementSols && (
              <p className="help is-danger">{errors.solsEtRevetementSols}</p>
            )}
            <h1>Séjour</h1>
            <hr />
            <h3>Taille du sejour</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés petit"
                  name="tailleSejour"
                  checked={this.props.tailleSejour === "Trés petit"}
                  onChange={this.props.onChange}
                />
                Trés petit
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Petit"
                  name="tailleSejour"
                  checked={this.props.tailleSejour === "Petit"}
                  onChange={this.props.onChange}
                />
                Petit
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normal"
                  name="tailleSejour"
                  checked={this.props.tailleSejour === "Normal"}
                  onChange={this.props.onChange}
                />
                Normal
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Grand"
                  name="tailleSejour"
                  checked={this.props.tailleSejour === "Grand"}
                  onChange={this.props.onChange}
                />
                Grand
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés grand"
                  name="tailleSejour"
                  checked={this.props.tailleSejour === "Trés grand"}
                  onChange={this.props.onChange}
                />
                Très grand
              </label>
            </div>
            {errors.tailleSejour && (
              <p className="help is-danger">{errors.tailleSejour}</p>
            )}
            <h3>Exposition du séjour</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="expositionSejour"
                  checked={this.props.expositionSejour === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="expositionSejour"
                  checked={this.props.expositionSejour === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normale"
                  name="expositionSejour"
                  checked={this.props.expositionSejour === "Normale"}
                  onChange={this.props.onChange}
                />
                Normale
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="expositionSejour"
                  checked={this.props.expositionSejour === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="expositionSejour"
                  checked={this.props.expositionSejour === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Très bonne
              </label>
            </div>
            {errors.expositionSejour && (
              <p className="help is-danger">{errors.expositionSejour}</p>
            )}
            <h3>Vu du séjour</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="VisAVis/Proche"
                  name="vueSejour"
                  checked={this.props.vueSejour === "VisAVis/Proche"}
                  onChange={this.props.onChange}
                />
                Vis-à-vis/Proche
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="vueSejour"
                  checked={this.props.vueSejour === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Ordinaire"
                  name="vueSejour"
                  checked={this.props.vueSejour === "Ordinaire"}
                  onChange={this.props.onChange}
                />
                Ordinaire
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Belle"
                  name="vueSejour"
                  checked={this.props.vueSejour === "Belle"}
                  onChange={this.props.onChange}
                />
                Belle
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Exceptionnelle"
                  name="vueSejour"
                  checked={this.props.vueSejour === "Exceptionnelle"}
                  onChange={this.props.onChange}
                />
                Exeptionnelle
              </label>
            </div>
            {errors.vueSejour && (
              <p className="help is-danger">{errors.vueSejour}</p>
            )}
            <h3>Luminosité</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="luminosite"
                  checked={this.props.luminosite === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="luminosite"
                  checked={this.props.luminosite === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Simple"
                  name="luminosite"
                  checked={this.props.luminosite === "Simple"}
                  onChange={this.props.onChange}
                />
                Simple
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="luminosite"
                  checked={this.props.luminosite === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="luminosite"
                  checked={this.props.luminosite === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Trés bonne
              </label>
            </div>
            {errors.luminosite && (
              <p className="help is-danger">{errors.luminosite}</p>
            )}
            <h3>cheminée</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Inexistante"
                  name="cheminee"
                  checked={this.props.cheminee === "Inexistante"}
                  onChange={this.props.onChange}
                />
                Inexistante
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="cheminee"
                  checked={this.props.cheminee === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Simple"
                  name="cheminee"
                  checked={this.props.cheminee === "Simple"}
                  onChange={this.props.onChange}
                />
                Simple
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Belle"
                  name="cheminee"
                  checked={this.props.cheminee === "Belle"}
                  onChange={this.props.onChange}
                />
                Belle
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Exceptionnelle"
                  name="cheminee"
                  checked={this.props.cheminee === "Exceptionnelle"}
                  onChange={this.props.onChange}
                />
                Exeptionnelle
              </label>
            </div>
            {errors.cheminee && (
              <p className="help is-danger">{errors.cheminee}</p>
            )}
          </div>
          <div className="column">
            <h1>Cuisine</h1>
            <hr />

            <h3>Taille</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés petite"
                  name="taille"
                  checked={this.props.taille === "Trés petite"}
                  onChange={this.props.onChange}
                />
                Trés petite
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Petite"
                  name="taille"
                  checked={this.props.taille === "Petite"}
                  onChange={this.props.onChange}
                />
                Petite
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normale"
                  name="taille"
                  checked={this.props.taille === "Normale"}
                  onChange={this.props.onChange}
                />
                Normale
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Grande"
                  name="taille"
                  checked={this.props.taille === "Grande"}
                  onChange={this.props.onChange}
                />
                Grande
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés grande"
                  name="taille"
                  checked={this.props.taille === "Trés grande"}
                  onChange={this.props.onChange}
                />
                Trés Grande
              </label>
            </div>
            {errors.taille && <p className="help is-danger">{errors.taille}</p>}

            <h3>Equipement</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Inexistant"
                  name="equipement"
                  checked={this.props.equipement === "Inexistant"}
                  onChange={this.props.onChange}
                />
                Inexistant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="equipement"
                  checked={this.props.equipement === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="equipement"
                  checked={this.props.equipement === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="equipement"
                  checked={this.props.equipement === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="equipement"
                  checked={this.props.equipement === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très bon
              </label>
            </div>
            {errors.equipement && (
              <p className="help is-danger">{errors.equipement}</p>
            )}

            <h3>Etat général</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="etatGeneral"
                  checked={this.props.etatGeneral === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="etatGeneral"
                  checked={this.props.etatGeneral === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="etatGeneral"
                  checked={this.props.etatGeneral === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="etatGeneral"
                  checked={this.props.etatGeneral === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="etatGeneral"
                  checked={this.props.etatGeneral === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très bon
              </label>
            </div>
            {errors.etatGeneral && (
              <p className="help is-danger">{errors.etatGeneral}</p>
            )}

            <h3>Agrément</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="agrement"
                  checked={this.props.agrement === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="agrement"
                  checked={this.props.agrement === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="agrement"
                  checked={this.props.agrement === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Agreable"
                  name="agrement"
                  checked={this.props.agrement === "Agreable"}
                  onChange={this.props.onChange}
                />
                Agréable
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés agreable"
                  name="agrement"
                  checked={this.props.agrement === "Trés agreable"}
                  onChange={this.props.onChange}
                />
                Très agréable
              </label>
            </div>
            {errors.agrement && (
              <p className="help is-danger">{errors.agrement}</p>
            )}

            <h1>Chambre</h1>
            <hr />

            <h3>Taille des pièces</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés petite"
                  name="tailleDesPieces"
                  checked={this.props.tailleDesPieces === "Trés petite"}
                  onChange={this.props.onChange}
                />
                Trés petite
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Petite"
                  name="tailleDesPieces"
                  checked={this.props.tailleDesPieces === "Petite"}
                  onChange={this.props.onChange}
                />
                Petite
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normale"
                  name="tailleDesPieces"
                  checked={this.props.tailleDesPieces === "Normale"}
                  onChange={this.props.onChange}
                />
                Normale
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Grande"
                  name="tailleDesPieces"
                  checked={this.props.tailleDesPieces === "Grande"}
                  onChange={this.props.onChange}
                />
                Grande
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés grande"
                  name="tailleDesPieces"
                  checked={this.props.tailleDesPieces === "Trés grande"}
                  onChange={this.props.onChange}
                />
                Trés Grande
              </label>
            </div>
            {errors.tailleDesPieces && (
              <p className="help is-danger">{errors.tailleDesPieces}</p>
            )}

            <h3>Etat des pièces</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvais"
                  name="etatDesPieces"
                  checked={this.props.etatDesPieces === "Mauvais"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="etatDesPieces"
                  checked={this.props.etatDesPieces === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="etatDesPieces"
                  checked={this.props.etatDesPieces === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bon"
                  name="etatDesPieces"
                  checked={this.props.etatDesPieces === "Bon"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bon"
                  name="etatDesPieces"
                  checked={this.props.etatDesPieces === "Trés bon"}
                  onChange={this.props.onChange}
                />
                Très bon
              </label>
            </div>
            {errors.etatDesPieces && (
              <p className="help is-danger">{errors.etatDesPieces}</p>
            )}

            <h3>Exposition aux bruits</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bruyante"
                  name="expositionAuxBruits"
                  checked={this.props.expositionAuxBruits === "Trés bruyante"}
                  onChange={this.props.onChange}
                />
                Trés bruyant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bruyante"
                  name="expositionAuxBruits"
                  checked={this.props.expositionAuxBruits === "Bruyante"}
                  onChange={this.props.onChange}
                />
                Bruyant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="expositionAuxBruits"
                  checked={this.props.expositionAuxBruits === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Faible"
                  name="expositionAuxBruits"
                  checked={this.props.expositionAuxBruits === "Faible"}
                  onChange={this.props.onChange}
                />
                Faible
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés faible"
                  name="expositionAuxBruits"
                  checked={this.props.expositionAuxBruits === "Trés faible"}
                  onChange={this.props.onChange}
                />
                Très faible
              </label>
            </div>
            {errors.expositionAuxBruits && (
              <p className="help is-danger">{errors.expositionAuxBruits}</p>
            )}

            <h1>Sanitaire</h1>
            <hr />

            <h3>Taille des pièces sanitaires</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés petite"
                  name="taillePiecesSanitaires"
                  checked={this.props.taillePiecesSanitaires === "Trés petite"}
                  onChange={this.props.onChange}
                />
                Trés petite
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Petite"
                  name="taillePiecesSanitaires"
                  checked={this.props.taillePiecesSanitaires === "Petite"}
                  onChange={this.props.onChange}
                />
                Petite
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normale"
                  name="taillePiecesSanitaires"
                  checked={this.props.taillePiecesSanitaires === "Normale"}
                  onChange={this.props.onChange}
                />
                Normale
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Grande"
                  name="taillePiecesSanitaires"
                  checked={this.props.taillePiecesSanitaires === "Grande"}
                  onChange={this.props.onChange}
                />
                Grande
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés grande"
                  name="taillePiecesSanitaires"
                  checked={this.props.taillePiecesSanitaires === "Trés grande"}
                  onChange={this.props.onChange}
                />
                Trés Grande
              </label>
            </div>
            {errors.taillePiecesSanitaires && (
              <p className="help is-danger">{errors.taillePiecesSanitaires}</p>
            )}

            <h3>Nombre de sanitaire</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Inexistant"
                  name="nombreDeSanitaires"
                  checked={this.props.nombreDeSanitaires === "Inexistant"}
                  onChange={this.props.onChange}
                />
                Inexistant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Insuffisant"
                  name="nombreDeSanitaires"
                  checked={this.props.nombreDeSanitaires === "Insuffisant"}
                  onChange={this.props.onChange}
                />
                Insuffisant
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Normal"
                  name="nombreDeSanitaires"
                  checked={this.props.nombreDeSanitaires === "Normal"}
                  onChange={this.props.onChange}
                />
                Normal
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Elevé"
                  name="nombreDeSanitaires"
                  checked={this.props.nombreDeSanitaires === "Elevé"}
                  onChange={this.props.onChange}
                />
                Elevé
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés elevé"
                  name="nombreDeSanitaires"
                  checked={this.props.nombreDeSanitaires === "Trés elevé"}
                  onChange={this.props.onChange}
                />
                Très elevé
              </label>
            </div>
            {errors.nombreDeSanitaires && (
              <p className="help is-danger">{errors.nombreDeSanitaires}</p>
            )}

            <h3>Qualité et etat des sanitaires</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="qualiteEtatSanitaires"
                  checked={this.props.qualiteEtatSanitaires === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvais
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="qualiteEtatSanitaires"
                  checked={this.props.qualiteEtatSanitaires === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="qualiteEtatSanitaires"
                  checked={this.props.qualiteEtatSanitaires === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="qualiteEtatSanitaires"
                  checked={this.props.qualiteEtatSanitaires === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bon
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="qualiteEtatSanitaires"
                  checked={this.props.qualiteEtatSanitaires === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Très Bon
              </label>
            </div>
            {errors.qualiteEtatSanitaires && (
              <p className="help is-danger">{errors.qualiteEtatSanitaires}</p>
            )}

            <h1>Energie</h1>
            <hr />

            <h3>Facture energitique</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés elevée"
                  name="factureEnergetique"
                  checked={this.props.factureEnergetique === "Trés elevée"}
                  onChange={this.props.onChange}
                />
                Trés elevée
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Elevée"
                  name="factureEnergetique"
                  checked={this.props.factureEnergetique === "Elevée"}
                  onChange={this.props.onChange}
                />
                Elevée
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="factureEnergetique"
                  checked={this.props.factureEnergetique === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Faible"
                  name="factureEnergetique"
                  checked={this.props.factureEnergetique === "Faible"}
                  onChange={this.props.onChange}
                />
                Faible
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés faible"
                  name="factureEnergetique"
                  checked={this.props.factureEnergetique === "Trés faible"}
                  onChange={this.props.onChange}
                />
                Très faible
              </label>
            </div>
            {errors.factureEnergetique && (
              <p className="help is-danger">{errors.factureEnergetique}</p>
            )}

            <h3>Installation électrique</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="installationElectrique"
                  checked={this.props.installationElectrique === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="installationElectrique"
                  checked={this.props.installationElectrique === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="installationElectrique"
                  checked={this.props.installationElectrique === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="installationElectrique"
                  checked={this.props.installationElectrique === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="installationElectrique"
                  checked={this.props.installationElectrique === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Très bonne
              </label>
            </div>
            {errors.installationElectrique && (
              <p className="help is-danger">{errors.installationElectrique}</p>
            )}

            <h3>Installation du gaz</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Mauvaise"
                  name="installationGaz"
                  checked={this.props.installationGaz === "Mauvaise"}
                  onChange={this.props.onChange}
                />
                Mauvaise
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="installationGaz"
                  checked={this.props.installationGaz === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="installationGaz"
                  checked={this.props.installationGaz === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyenne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="installationGaz"
                  checked={this.props.installationGaz === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bonne
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bonne"
                  name="installationGaz"
                  checked={this.props.installationGaz === "Trés bonne"}
                  onChange={this.props.onChange}
                />
                Très bonne
              </label>
            </div>
            {errors.installationGaz && (
              <p className="help is-danger">{errors.installationGaz}</p>
            )}

            <h1>Annexes</h1>
            <hr />

            <h3>Balcon Loggia Terasse</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Aucun"
                  name="balconLogiaTerasse"
                  checked={this.props.balconLogiaTerasse === "Aucun"}
                  onChange={this.props.onChange}
                />
                Aucun
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="balconLogiaTerasse"
                  checked={this.props.balconLogiaTerasse === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="balconLogiaTerasse"
                  checked={this.props.balconLogiaTerasse === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bien"
                  name="balconLogiaTerasse"
                  checked={this.props.balconLogiaTerasse === "Bien"}
                  onChange={this.props.onChange}
                />
                Bien
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bien"
                  name="balconLogiaTerasse"
                  checked={this.props.balconLogiaTerasse === "Trés bien"}
                  onChange={this.props.onChange}
                />
                Trés Bien
              </label>
            </div>
            {errors.balconLogiaTerasse && (
              <p className="help is-danger">{errors.balconLogiaTerasse}</p>
            )}

            <h3>Cave / sous-sol</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Aucun"
                  name="caveSousSol"
                  checked={this.props.caveSousSol === "Aucun"}
                  onChange={this.props.onChange}
                />
                Aucun
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="caveSousSol"
                  checked={this.props.caveSousSol === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="caveSousSol"
                  checked={this.props.caveSousSol === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bien"
                  name="caveSousSol"
                  checked={this.props.caveSousSol === "Bien"}
                  onChange={this.props.onChange}
                />
                Bien
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Exceptionnel"
                  name="caveSousSol"
                  checked={this.props.caveSousSol === "Exceptionnel"}
                  onChange={this.props.onChange}
                />
                Exeptionnel
              </label>
            </div>
            {errors.caveSousSol && (
              <p className="help is-danger">{errors.caveSousSol}</p>
            )}

            <h3>Agrément du jardin</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Trés médiocre"
                  name="agrementJardin"
                  checked={this.props.agrementJardin === "Trés médiocre"}
                  onChange={this.props.onChange}
                />
                Trés mediocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="agrementJardin"
                  checked={this.props.agrementJardin === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="agrementJardin"
                  checked={this.props.agrementJardin === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bien"
                  name="agrementJardin"
                  checked={this.props.agrementJardin === "Bien"}
                  onChange={this.props.onChange}
                />
                Bien
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Remarquable"
                  name="agrementJardin"
                  checked={this.props.agrementJardin === "Remarquable"}
                  onChange={this.props.onChange}
                />
                Remarquable
              </label>
            </div>
            {errors.agrementJardin && (
              <p className="help is-danger">{errors.agrementJardin}</p>
            )}

            <h3>Garage ou parking couvert</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Sans"
                  name="garageOuParkingOuvert"
                  checked={this.props.garageOuParkingOuvert === "Sans"}
                  onChange={this.props.onChange}
                />
                Sans
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Médiocre"
                  name="garageOuParkingOuvert"
                  checked={this.props.garageOuParkingOuvert === "Médiocre"}
                  onChange={this.props.onChange}
                />
                Médiocre
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyen"
                  name="garageOuParkingOuvert"
                  checked={this.props.garageOuParkingOuvert === "Moyen"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bien"
                  name="garageOuParkingOuvert"
                  checked={this.props.garageOuParkingOuvert === "Bien"}
                  onChange={this.props.onChange}
                />
                Bien
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Exceptionnel"
                  name="garageOuParkingOuvert"
                  checked={this.props.garageOuParkingOuvert === "Exceptionnel"}
                  onChange={this.props.onChange}
                />
                Exceptionnel
              </label>
            </div>
            {errors.garageOuParkingOuvert && (
              <p className="help is-danger">{errors.garageOuParkingOuvert}</p>
            )}

            <h3>Combles</h3>
            <div className="control">
              <label className="radio">
                <input
                  type="radio"
                  value="Aucune"
                  name="combles"
                  checked={this.props.combles === "Aucune"}
                  onChange={this.props.onChange}
                />
                Aucun
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Peu"
                  name="combles"
                  checked={this.props.combles === "Peu"}
                  onChange={this.props.onChange}
                />
                Peu
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Moyenne"
                  name="combles"
                  checked={this.props.combles === "Moyenne"}
                  onChange={this.props.onChange}
                />
                Moyen
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Bonne"
                  name="combles"
                  checked={this.props.combles === "Bonne"}
                  onChange={this.props.onChange}
                />
                Bien
              </label>
              <label className="radio">
                <input
                  type="radio"
                  value="Trés bien"
                  name="combles"
                  checked={this.props.combles === "Trés bien"}
                  onChange={this.props.onChange}
                />
                Trés Bien
              </label>
            </div>
            {errors.combles && (
              <p className="help is-danger">{errors.combles}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step3Super;
