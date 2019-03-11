import React, { Component } from "react";
import classnames from "classnames";
class Step5Maison extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 5) {
      return null;
    }
    return (
      <div>
        <h1>Etape 5 - Etats et Transports</h1>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.qualite_maison
              })}
              type="text"
              name="qualite_maison"
              placeholder="qualite maison"
              value={this.props.qualite_maison}
              onChange={this.props.onChange}
              required
            />
            {errors.qualite_maison && (
              <p class="help is-danger">{errors.qualite_maison}</p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.luminosite
              })}
              type="text"
              name="luminosite"
              placeholder="luminosite"
              value={this.props.luminosite}
              onChange={this.props.onChange}
              required
            />
            {errors.luminosite && (
              <p class="help is-danger">{errors.luminosite}</p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.calme
              })}
              type="text"
              name="calme"
              placeholder="calme"
              value={this.props.calme}
              onChange={this.props.onChange}
              required
            />
            {errors.calme && <p class="help is-danger">{errors.calme}</p>}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.proximite_transports
              })}
              type="text"
              name="proximite_transports"
              placeholder="proximite transports"
              value={this.props.proximite_transports}
              onChange={this.props.onChange}
              required
            />
            {errors.proximite_transports && (
              <p class="help is-danger">{errors.proximite_transports}</p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.qualite_toiture
              })}
              type="text"
              name="qualite_toiture"
              placeholder="qualite toiture"
              value={this.props.qualite_toiture}
              onChange={this.props.onChange}
              required
            />
            {errors.qualite_toiture && (
              <p class="help is-danger">{errors.qualite_toiture}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step5Maison;
