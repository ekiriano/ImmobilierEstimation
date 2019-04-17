import React, { Component } from "react";
import classnames from "classnames";

class Step2Maison extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <h1>Etape 2 - Surface</h1>

        <div className="field">
        <label className="label">Surface habitable : </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface_habitable
              })}
              type="number"
              name="surface_habitable"
              placeholder="surface habitable"
              value={this.props.surface_habitable}
              onChange={this.props.onChange}
              required
              min="0"
            />
            {errors.surface_habitable && (
              <p className="help is-danger">{errors.surface_habitable}</p>
            )}
          </div>
        </div>

        <div className="field">
        <label className="label">Surface totale terrain : </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface_totale_terrain
              })}
              type="number"
              name="surface_totale_terrain"
              placeholder="surface totale terrain"
              value={this.props.surface_totale_terrain}
              onChange={this.props.onChange}
              min="0"
              required
            />
            {errors.surface_totale_terrain && (
              <p className="help is-danger">{errors.surface_totale_terrain}</p>
            )}
          </div>
        </div>

        <div className="field">
        <label className="label">Surface habitable constructible  : </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface_habitable_constructible
              })}
              type="number"
              name="surface_habitable_constructible"
              placeholder="surface habitable constructible"
              value={this.props.surface_habitable_constructible}
              onChange={this.props.onChange}
              min="0"
              required
            />
            {errors.surface_habitable_constructible && (
              <p className="help is-danger">
                {errors.surface_habitable_constructible}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step2Maison;
