import React, { Component } from "react";
import classnames from "classnames";
class Step1Appartement extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <h1>Etape 1 - Ladresse</h1>
        <div className="field">
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
              required
            />

            {errors.rue && <p class="help is-danger">{errors.rue}</p>}
          </div>
        </div>
        <div className="field">
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
              required
            />
            {errors.code_postal && (
              <p class="help is-danger">{errors.code_postal}</p>
            )}
          </div>
        </div>
        <div className="field">
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
              required
            />
            {errors.ville && <p class="help is-danger">{errors.ville}</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default Step1Appartement;
