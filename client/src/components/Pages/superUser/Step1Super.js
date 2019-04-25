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
        <div className="card mt-is-0_5">
          <div className="card-content">
            <h1>Informations sur le Client </h1> <hr />
            <label className="radio">
              <b>Civilité</b>
              <div className="control">
                <label className="radio">
                  <input
                    type="radio"
                    name="civilite"
                    value="Aucun"
                    checked={this.props.civilite === "Aucun"}
                    onChange={this.props.onChange}
                  />
                  Aucun
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="civilite"
                    value="Monsieur"
                    checked={this.props.civilite === "Monsieur"}
                    onChange={this.props.onChange}
                  />
                  Monsieur
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="civilite"
                    value="Madame"
                    checked={this.props.civilite === "Madame"}
                    onChange={this.props.onChange}
                  />
                  Madame
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="civilite"
                    value="Monsieur et madame"
                    checked={this.props.civilite === "Monsieur et madame"}
                    onChange={this.props.onChange}
                  />
                  Monsieur et madame
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="civilite"
                    value="Messieurs"
                    checked={this.props.civilite === "Messieurs"}
                    onChange={this.props.onChange}
                  />
                  Messieurs
                </label>
                <label className="radio">
                  <input
                    type="radio"
                    name="civilite"
                    value="Mesdames"
                    checked={this.props.civilite === "Mesdames"}
                    onChange={this.props.onChange}
                  />
                  Mesdames
                </label>
              </div>
            </label>
            {errors.civilite && (
              <p className="help is-danger">{errors.civilite}</p>
            )}
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label">Prénom</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className={classnames("input ", {
                        "is-danger": errors.prenom
                      })}
                      type="texte"
                      placeholder="Prénom"
                      name="prenom"
                      onChange={this.props.onChange}
                      value={this.props.prenom}
                      required
                    />
                    {errors.prenom && (
                      <p className="help is-danger">{errors.prenom}</p>
                    )}
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
                    <input
                      className={classnames("input", {
                        "is-danger": errors.nom
                      })}
                      type="texte"
                      placeholder="Nom"
                      name="nom"
                      onChange={this.props.onChange}
                      value={this.props.nom}
                      required
                    />
                    {errors.nom && (
                      <p className="help is-danger">{errors.nom}</p>
                    )}
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
                    <input
                      className={classnames("input ", {
                        "is-danger": errors.adressePostale
                      })}
                      type="texte"
                      placeholder="Adresse Postale"
                      name="adressePostale"
                      onChange={this.props.onChange}
                      value={this.props.adressePostale}
                      required
                    />
                    {errors.adressePostale && (
                      <p className="help is-danger">{errors.adressePostale}</p>
                    )}
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
                    <input
                      className={classnames("input ", {
                        "is-danger": errors.email
                      })}
                      type="email"
                      placeholder="Email"
                      name="email"
                      onChange={this.props.onChange}
                      value={this.props.email}
                      required
                    />
                    {errors.email && (
                      <p className="help is-danger">{errors.email}</p>
                    )}
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
                    <input
                      className={classnames("input ", {
                        "is-danger": errors.telephone
                      })}
                      type="number"
                      placeholder="Téléphone"
                      name="telephone"
                      onChange={this.props.onChange}
                      value={this.props.telephone}
                      required
                    />
                    {errors.telephone && (
                      <p className="help is-danger">{errors.telephone}</p>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step1Super;
