import React, { Component } from "react";
import classnames from "classnames";

class Step2Appartement extends Component {
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
              Surface  : <br />
            </label>
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.surface
              })}
              type="text"
              name="surface"
              placeholder="surface"
              value={this.props.surface}
              onChange={this.props.onChange}
              required
            />
            {errors.surface && (
              <p class="help is-danger">{errors.surface}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>
            {" "}
            Nombre de Pieces : <br />
          </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.nombre_pieces
              })}
              type="text"
              name="nombre_pieces"
              placeholder="Nombre de Pieces"
              value={this.props.nombre_pieces}
              onChange={this.props.onChange}
              required
            />
            {errors.nombre_pieces && (
              <p class="help is-danger">{errors.nombre_pieces}</p>
            )}
          </div>
        </div>
        <div className="field">
          <label>
            Nombre de Salles de Bain : <br />
          </label>
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.nombre_salle_bain
              })}
              type="text"
              name="nombre_salle_bain"
              placeholder="Nombre de Salles de Bain"
              value={this.props.nombre_salle_bain}
              onChange={this.props.onChange}
              required
            />
            {errors.nombre_salle_bain && (
              <p class="help is-danger">
                {errors.nombre_salle_bain}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step2Appartement;
