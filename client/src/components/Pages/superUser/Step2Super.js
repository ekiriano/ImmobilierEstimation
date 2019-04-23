import React, { Component } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class Step2Super extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pointFortValueInput: "",
      pointFaibleValueInput: "",
      commentairesConfidentiels: EditorState.createEmpty(),
      descriptifsBien: EditorState.createEmpty(),
      commentaire: "",
      descriptif: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onCommentaireConfEditorStateChange: Function = commentairesConfidentiels => {
    //onsole.log(editorState);
    this.setState({
      commentairesConfidentiels: commentairesConfidentiels
    });
    this.setState({
      commentaire: draftToHtml(
        convertToRaw(commentairesConfidentiels.getCurrentContent())
      )
    });
    this.props.onChangeComConf(this.state.commentaire);
  };
  onDescriptifStateChange: Function = descriptif => {
    //onsole.log(editorState);
    this.setState({
      descriptifsBien: descriptif
    });
    this.setState({
      descriptif: draftToHtml(convertToRaw(descriptif.getCurrentContent()))
    });
    this.props.onChangeDescriptif(this.state.descriptif);
  };
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 2) {
      return null;
    }
    const { commentairesConfidentiels, descriptifsBien } = this.state;
    var listePointsForts = this.props.pointsForts.map((pointfort, i) => {
      return (
        <div key={i}>
          <p>{pointfort}</p>
          <button
            onClick={this.props.deletePointFort.bind(this, i)}
            type="button"
            className="button is-danger "
          >
            <i className="uil uil-trash-alt" /> Supprimer
          </button>
        </div>
      );
    });
    var listePointsFaibles = this.props.pointsFaibles.map((pointfaible, i) => {
      return (
        <div key={i}>
          <p>{pointfaible}</p>
          <button
            onClick={this.props.deletePointFaible.bind(this, i)}
            type="button"
            className="button is-danger "
          >
            <i className="uil uil-trash-alt" /> Supprimer
          </button>
        </div>
      );
    });
    return (
      <div>
        <div className="columns">
          <div className="column">
            <h1>Localisation du bien</h1> <hr />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">N°</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="texte"
                      placeholder="Numéro"
                      name="numero"
                      onChange={this.props.onChange}
                      value={this.props.numero}
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
                    <input
                      className="input"
                      type="texte"
                      placeholder="Voie"
                      name="voie"
                      value={this.props.voie}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="texte"
                      placeholder="Code postal"
                      name="codePostal"
                      value={this.props.codePostal}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="texte"
                      placeholder="Ville"
                      name="ville"
                      value={this.props.ville}
                      onChange={this.props.onChange}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <h1> Informations </h1> <hr />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Année de construction</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Année de construction"
                      name="anneeConstruction"
                      value={this.props.anneeConstruction}
                      onChange={this.props.onChange}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div
                  className={classnames("select is-medium", {
                    "is-danger": errors.typeBienAffiche
                  })}
                >
                  <select
                    name="typeBienAffiche"
                    value={this.props.typeBienAffiche}
                    onChange={this.props.onChange}
                  >
                    <option>Type de bien</option>
                    <option value="maison">Maison</option>
                    <option value="appartement">Appartement</option>
                  </select>
                </div>
                {errors.typeBienAffiche && (
                  <p className="help is-danger">{errors.typeBienAffiche}</p>
                )}
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nombre de pièces</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Nombre de pièces"
                      name="nombrePieces"
                      value={this.props.nombrePieces}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="number"
                      placeholder="Nombre de chambres"
                      name="nombreChambres"
                      value={this.props.nombreChambres}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="number"
                      placeholder="Surface habitable"
                      name="surfaceHabitable"
                      value={this.props.surfaceHabitable}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="number"
                      placeholder="Surface terrain"
                      name="surfaceTerrain"
                      value={this.props.surfaceTerrain}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="number"
                      placeholder="Nombre de niveaux"
                      name="nombreNiveaux"
                      value={this.props.nombreNiveaux}
                      onChange={this.props.onChange}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <label className="radio">
              Ascenseur
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="ascenseur"
                    value="Non"
                    checked={this.props.ascenseur === "Non"}
                    onChange={this.props.onChange}
                  />
                  Non
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="ascenseur"
                    value="Oui"
                    checked={this.props.ascenseur === "Oui"}
                    onChange={this.props.onChange}
                  />
                  Oui
                </label>
              </div>
            </label>
            <label className="radio">
              Balcon/Terasse
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="balconOuTerrasse"
                    value="Non"
                    checked={this.props.balconOuTerrasse === "Non"}
                    onChange={this.props.onChange}
                  />
                  Non
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="balconOuTerrasse"
                    value="Oui"
                    checked={this.props.balconOuTerrasse === "Oui"}
                    onChange={this.props.onChange}
                  />
                  Oui
                </label>
              </div>
            </label>
            <label className="radio">
              Libre A La Vente
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="LibreALaVente"
                    value="Non"
                    checked={this.props.LibreALaVente === "Non"}
                    onChange={this.props.onChange}
                  />
                  Non
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="LibreALaVente"
                    value="Oui"
                    checked={this.props.LibreALaVente === "Oui"}
                    onChange={this.props.onChange}
                  />
                  Oui
                </label>
              </div>
            </label>
            <input
              className="input"
              name="titreDossier"
              placeholder="Titre du dossier"
              value={this.props.titreDossier}
              onChange={this.props.onChange}
              required
            />
            {/*
            <textarea
              className="textarea"
              name="descriptifBien"
              placeholder="Description"
              value={this.props.descriptifBien}
              onChange={this.props.onChange}
              required
            />*/}
            <div className="descriptif">
              <Editor
                editorState={descriptifsBien}
                onEditorStateChange={this.onDescriptifStateChange}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true }
                }}
              />
            </div>
            <div className="field">
              <div className="control">
                <div
                  className={classnames("select is-medium", {
                    "is-danger": errors.DPE
                  })}
                >
                  <select
                    name="DPE"
                    value={this.props.DPE}
                    onChange={this.props.onChange}
                  >
                    <option>Diag. Perf. Energetique</option>
                    <option value="A++">A++</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                </div>
                {errors.DPE && <p className="help is-danger">{errors.DPE}</p>}
              </div>
            </div>
            <div className="field">
              <div className="control">
                <div
                  className={classnames("select is-medium", {
                    "is-danger": errors.GES
                  })}
                >
                  <select
                    name="GES"
                    value={this.props.GES}
                    onChange={this.props.onChange}
                  >
                    <option>GES</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                  </select>
                </div>
                {errors.GES && <p className="help is-danger">{errors.GES}</p>}
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Prix mandat</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="$"
                      name="prixMandat"
                      value={this.props.prixMandat}
                      onChange={this.props.onChange}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <h1>Charges et impots</h1> <hr />
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Charges annuelles totales</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="number"
                      placeholder="Charges annuelles totales"
                      name="chargesAnnuellesTotales"
                      value={this.props.chargesAnnuellesTotales}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="number"
                      placeholder="Charges de copropriete"
                      name="chargesDeCopropriete"
                      value={this.props.chargesDeCopropriete}
                      onChange={this.props.onChange}
                      required
                    />
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
                    <input
                      className="input"
                      type="number"
                      placeholder="Impots fonciers"
                      name="impotsFonciers"
                      value={this.props.impotsFonciers}
                      onChange={this.props.onChange}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Annexes</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Annexes"
                      name="annexes"
                      value={this.props.annexes}
                      onChange={this.props.onChange}
                      required
                    />
                  </p>
                </div>
              </div>
            </div>
            <h1>Points forts et faibles</h1> <hr />
            <div className="fort">
              {listePointsForts}
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="points forts"
                    name="pointFortValueInput"
                    onChange={this.onChange}
                    value={this.state.pointFortValueInput}
                    required
                  />
                </div>
              </div>
              <button
                className="button is-success"
                onClick={this.props.addPointFort.bind(
                  this,
                  this.state.pointFortValueInput
                )}
              >
                <i className="uil uil-plus" />
                Ajouter point fort
              </button>
            </div>
            <div className="faible">
              {listePointsFaibles}
              <div className="field">
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    name="pointFaibleValueInput"
                    placeholder="points faibles"
                    onChange={this.onChange}
                    value={this.state.pointFaibleValueInput}
                    required
                  />
                </div>
              </div>
              <button
                className="button is-success"
                onClick={this.props.addPointFaible.bind(
                  this,
                  this.state.pointFaibleValueInput
                )}
              >
                <i className="uil uil-plus" /> Ajouter point faible
              </button>
            </div>
            <h1>Commentaires confidentiels</h1> <hr />
            <div className="commentairesConfidentioels">
              <Editor
                editorState={commentairesConfidentiels}
                onEditorStateChange={this.onCommentaireConfEditorStateChange}
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true }
                }}
              />
            </div>
            {/*
            <textarea
              className="textarea"
              name="commentairesConfidentiels"
              placeholder="Ce commentaire n'apparait pas dans les documents clients"
              value={this.props.commentairesConfidentiels}
              onChange={this.props.onChange}
              required
            />*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Step2Super;
