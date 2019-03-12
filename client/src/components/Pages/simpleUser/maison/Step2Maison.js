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
          <div className="control">
            <label>
              {" "}
              Surface habitable : <br />
            </label>
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface_habitable
              })}
              type="text"
              name="surface_habitable"
              placeholder="surface habitable"
              value={this.props.surface_habitable}
              onChange={this.props.onChange}
              required
            />
            {errors.surface_habitable && (
              <p class="help is-danger">{errors.surface_habitable}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>
            {" "}
            Surface habitable terrain : <br />
          </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface_totale_terrain
              })}
              type="text"
              name="surface_totale_terrain"
              placeholder="surface totale terrain"
              value={this.props.surface_totale_terrain}
              onChange={this.props.onChange}
              required
            />
            {errors.surface_totale_terrain && (
              <p class="help is-danger">{errors.surface_totale_terrain}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>
            Surface habitable constructible : <br />
          </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface_habitable_constructible
              })}
              type="text"
              name="surface_habitable_constructible"
              placeholder="surface habitable constructible"
              value={this.props.surface_habitable_constructible}
              onChange={this.props.onChange}
              required
            />
            {errors.surface_habitable_constructible && (
              <p class="help is-danger">
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
