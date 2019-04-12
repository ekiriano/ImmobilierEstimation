import React, { Component } from "react";
import classnames from "classnames";

class Step3Appartement extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <h1>Etape 3 - Pieces</h1>

        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.nombre_pieces
              })}
              type="text"
              name="nombre_pieces"
              placeholder="nombre piece"
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
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.nombre_salle_bain
              })}
              type="text"
              name="nombre_salle_bain"
              placeholder="nombre salle bain"
              value={this.props.nombre_salle_bain}
              onChange={this.props.onChange}
              required
            />
            {errors.nombre_salle_bain && (
              <p class="help is-danger">{errors.nombre_salle_bain}</p>
            )}
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              className={classnames("input is-medium", {
                "is-danger": errors.nombre_niveaux
              })}
              type="text"
              name="nombre_niveaux"
              placeholder="nombre niveaux"
              value={this.props.nombre_niveaux}
              onChange={this.props.onChange}
              required
            />
            {errors.nombre_niveaux && (
              <p class="help is-danger">{errors.nombre_niveaux}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Step3Appartement;

