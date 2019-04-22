import React, { Component } from "react";
import classnames from "classnames";

/*
- civilite
- prenom
- nom
- adressePostale
- email
- telephone
*/



class Step1Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 1) {
          return null;
        }
        return (
          <div>
            <h1>Test 1 </h1> <hr/>

            <div className="control">
                <label className="radio">
                  <input type="radio" value="Aucun" name="civilite" onChange={this.props.onChange}></input>
                  Aucun.
                </label>
                <label className="radio">
                  <input type="radio" value="Monsieur" name="civilite" onChange={this.props.onChange}></input>
                  Monsieur.
                </label>
                <label className="radio">
                  <input type="radio" value="Madame" name="civilite" onChange={this.props.onChange}></input>
                  Madame.
                </label>
                <label className="radio">
                  <input type="radio" value="MonsieurEtMadame" name="civilite" onChange={this.props.onChange}></input>
                  Monsieur et Madame.
                </label>
                <label className="radio">
                  <input type="radio" value="Messieurs" name="civilite" onChange={this.props.onChange}></input>
                  Messieurs.
                </label>
                <label className="radio">
                  <input type="radio" value="Mesdames" name="civilite" onChange={this.props.onChange}></input>
                  Mesdames.
                </label>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Prénom</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Prénom"
                    name="prenom"
                    // onChange={this.props.onChange}
                    value={this.props.client.prenom}
                    required/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Nom</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Nom"
                    name="nom"
                    value={this.props.client.nom}
                    required/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Adresse Postale</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Adresse Postale"
                    name="adressePostale"
                    onChange={this.props.onChange}
                    value={this.props.client.adressePostale}
                    required/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Email</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="email" placeholder="Email"
                    name="email"
                    // onChange={this.props.onChange}
                    value={this.props.client.email}
                    required/>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Téléphone</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input className="input" type="texte" placeholder="Téléphone"
                    name="telephone"
                    // onChange={this.props.onChange}
                    value={this.props.client.telephone}
                    required/>
                  </p>
                </div>
              </div>
            </div>


          </div>
        );
      }
}

export default Step1Super;
