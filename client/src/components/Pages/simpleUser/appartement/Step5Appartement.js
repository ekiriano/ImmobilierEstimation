import React, { Component } from "react";
import classnames from "classnames";
class Step5Appartement extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 5) {
      return null;
    }
    return (
      <div>
        <h1>Etape 5 - </h1>

        <div className="field">
          <div className="control">
            <div
              className={classnames("select is-medium", {
                "is-danger": errors.qualite_appartement
              })}
            >
              <select
                name="qualite_appartement"
                value={this.props.qualite_appartement}
                onChange={this.props.onChange}
              >
                <option>Qualité de l'appartemmenr</option>
                <option value="Inférieur">Inférieur</option>
                <option value="Comparable">Comparable</option>
                <option value="Supérieure">Supérieure</option>
              </select>
            </div>
            {errors.qualite_appartement && (
              <p className="help is-danger">{errors.qualite_appartement}</p>
            )}
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div
              className={classnames("select is-medium", {
                "is-danger": errors.luminosite
              })}
            >
              <select
                name="luminosite"
                value={this.props.luminosite}
                onChange={this.props.onChange}
              >
                <option>Luminosité</option>
                <option value="Sombre">Sombre</option>
                <option value="Peu clair">Peu clair</option>
                <option value="Standard">Standard</option>
                <option value="Clair">Clair</option>
                <option value="Très Clair">Très Clair</option>
              </select>
            </div>
            {errors.luminosite && (
              <p className="help is-danger">{errors.luminosite}</p>
            )}
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div
              className={classnames("select is-medium", {
                "is-danger": errors.calme
              })}
            >
              <select
                name="calme"
                value={this.props.calme}
                onChange={this.props.onChange}
              >
                <option>Calme</option>
                <option value="Très bruyant">Très bruyant </option>
                <option value="Bruyant">Bruyant</option>
                <option value="Standard">Standard</option>
                <option value="Calme">Calme</option>
                <option value="Très calme">Très calme</option>
              </select>
            </div>
            {errors.calme && <p className="help is-danger">{errors.calme}</p>}
          </div>
        </div>

        <div className="field">
          <div className="control">
            <div
              className={classnames("select is-medium", {
                "is-danger": errors.proximite_transports
              })}
            >
              <select
                name="proximite_transports"
                value={this.props.proximite_transports}
                onChange={this.props.onChange}
              >
                <option>Proximité des Transports</option>
                <option value="Très éloigné">Très éloigné </option>
                <option value="éloigné">éloigné</option>
                <option value="Standard">Standard</option>
                <option value="Proche">Proche</option>
                <option value="Très Proche">Très Proche</option>
              </select>
            </div>
            {errors.proximite_transports && (
              <p className="help is-danger">{errors.proximite_transports}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step5Appartement;
