import React, { Component } from "react";
import classnames from "classnames";
class Step4Appartement extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <div>
        <h1>Etape 4 - </h1>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.diagnostic_performance_energetique
              })}
              type="text"
              name="diagnostic_performance_energetique"
              placeholder="diagnostic_performance_energetique"
              value={this.props.diagnostic_performance_energetique}
              onChange={this.props.onChange}
              required
            />
            {errors.diagnostic_performance_energetique && (
              <p className="help is-danger">{errors.diagnostic_performance_energetique}</p>
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
              <p className="help is-danger">{errors.etat_bien}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step4Appartement;
