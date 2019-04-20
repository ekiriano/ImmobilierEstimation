import React, { Component } from "react";
import classnames from "classnames";
import Map from "../../Map";

class Step1Maison extends Component {

  constructor(props) {
    super(props);
  }

// search(){
//   console.log('this.state', this.state);
//   const BASE_URL = 'https://api-adresse.data.gouv.fr/search/?';
//   const FETCH_URL = '${BASE_URL}q=${this.props.rue}&postcode=${this.props.code_postal}&type=street&limit=1';
//   fetch(FETCH_URL)
// }

  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <h1>Etape 1 - Ladresse</h1>

        <div className="field">
        <label className="label">Adresse : </label>
          <div className="control">

            <input
              className={classnames("input is-medium", {
                "is-danger": errors.adresse_complete
              })}
              type="text"
              name="adresse_complete"
              placeholder="adresse_complete"
              value={this.props.adresse_complete}
              onChange={this.props.onChange}
              onKeyPress={this.props.onKeyPress}
              required
            />

            {errors.adresse_complete && <p className="help is-danger">{errors.adresse_complete}</p>}
          </div>
        </div>

        <div className="field">
        <label className="label">Rue : </label>
          <div className="control">

            <input
              className={classnames("input is-medium", {
                "is-danger": errors.rue
              })}
              type="text"
              name="rue"
              placeholder="rue"
              value={this.props.rue}
              onChange={this.props.onChange}
              onKeyPress={this.props.onKeyPress}
              readOnly
              required
            />

            {errors.rue && <p className="help is-danger">{errors.rue}</p>}
          </div>
        </div>

        <div className="field">
        <label className="label">Code Postal : </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.code_postal
              })}
              type="text"
              name="code_postal"
              placeholder="code postal"
              value={this.props.code_postal}
              onChange={this.props.onChange}
              readOnly
              required
            />
            {errors.code_postal && (
              <p className="help is-danger">{errors.code_postal}</p>
            )}
          </div>
        </div>

        <div className="field">
        <label className="label">Ville : </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.ville
              })}
              type="text"
              name="ville"
              placeholder="ville"
              value={this.props.ville}
              onChange={this.props.onChange}
              readOnly
              required
            />
            {errors.ville && <p className="help is-danger">{errors.ville}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Step1Maison;
