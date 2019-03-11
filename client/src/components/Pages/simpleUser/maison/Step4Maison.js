import React, { Component } from "react";
import classnames from "classnames";
class Step4Maison extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <div>
        <h1>Etape 4 - Auxiliaire</h1>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.annee_construction
              })}
              type="text"
              name="annee_construction"
              placeholder="annee_construction"
              value={this.props.annee_construction}
              onChange={this.props.onChange}
              required
            />
            {errors.annee_construction && (
              <p class="help is-danger">{errors.annee_construction}</p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.diagnostic_performance_energetique
              })}
              type="text"
              name="diagnostic_performance_energetique"
              placeholder="diagnostic performance energetique "
              value={this.props.diagnostic_performance_energetique}
              onChange={this.props.onChange}
              required
            />
            {errors.diagnostic_performance_energetique && (
              <p class="help is-danger">
                {errors.diagnostic_performance_energetique}
              </p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.etat_bien
              })}
              type="text"
              name="etat_bien"
              placeholder=" etat bien"
              value={this.props.etat_bien}
              onChange={this.props.onChange}
              required
            />
            {errors.etat_bien && (
              <p class="help is-danger">{errors.etat_bien}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step4Maison;
