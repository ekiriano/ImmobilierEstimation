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
              <div 
                className={classnames("select is-medium", {
                  "is-danger": errors.diagnostic_performance_energetique
                })}
              >
                  <select
                     name="diagnostic_performance_energetique"
                     value={this.props.diagnostic_performance_energetique}
                     onChange={this.props.onChange}
                  >
                      <option>Diag. Perf. Energetique</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                  </select>
              </div>
              {errors.diagnostic_performance_energetique && (
                <p className="help is-danger">
                  {errors.diagnostic_performance_energetique}
                </p>
              )}
          </div>
        </div>

        

        <div className="field">
          <div className="control">
              <div 
               className={classnames("select is-medium", {
                "is-danger": errors.etat_bien
              })}
              >
                  <select
                     name="etat_bien"
                     value={this.props.etat_bien}
                     onChange={this.props.onChange}
                  >
                      <option>Etat du bien</option>
                      <option value="Refait a neuf" >Refait a neuf</option>
                      <option value="Standard" >Standard</option>
                      <option value="Rafraîchissment nécessaire" >Rafraîchissment nécessaire</option>
                      <option value="Travaux importants nécessaires" >Travaux importants nécessaires</option>
                  </select>
              </div>
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
