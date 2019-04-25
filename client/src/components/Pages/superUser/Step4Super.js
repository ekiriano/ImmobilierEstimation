import React, { Component } from "react";
import classnames from "classnames";
import MapSuper from "../../Pages/MapSuper";



class Step4Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 4) {
          return null;
        }
        return (
          <div>
          <h1>{this.props.ville}</h1> <hr/>

          <div className="columns">
              <div className="column is-half">
              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Decote si bien vendu occupé: </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className={classnames("input is-small ", {
                        "is-danger": errors.decoteBienOccupe
                      })}
                      type="number"
                      placeholder="decoteBienOccupe"
                      name="decoteBienOccupe"
                      value={this.props.decoteBienOccupe}
                      onChange={this.props.onChange}
                      required/>
                      {errors.decoteBienOccupe && (<p className="help is-danger">{errors.decoteBienOccupe}</p>)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Autres élements: </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className={classnames("input is-small ", {
                        "is-danger": errors.autresElements
                      })}
                       type="number" placeholder="autresElements"
                      name="autresElements"
                      value={this.props.autresElements}
                      onChange={this.props.onChange} required/>
                      {errors.autresElements && (<p className="help is-danger">{errors.autresElements}</p>)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Travaux à réaliser </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className={classnames("input is-small ", {
                        "is-danger": errors.travauxARealiser
                      })}
                       type="number"
                      placeholder="travauxARealiser"
                      name="travauxARealiser"
                      value={this.props.travauxARealiser}
                      onChange={this.props.onChange}
                      required/>
                      {errors.travauxARealiser && (<p className="help is-danger">{errors.travauxARealiser}</p>)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Valorisation du terrain </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className={classnames("input is-small ", {
                        "is-danger": errors.valorisationTerrain
                      })}
                      type="number"
                      placeholder="valorisationTerrain"
                      name="valorisationTerrain"
                      value={this.props.valorisationTerrain}
                      onChange={this.props.onChange}
                      required/>
                      {errors.valorisationTerrain && (<p className="help is-danger">{errors.valorisationTerrain}</p>)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Rénové </label>
                </div>
                <div className="field-body">
                  <div className="field">
                    <p className="control">
                      <input className={classnames("input is-small ", {
                        "is-danger": errors.renove
                      })}
                      type="number"
                      placeholder="renove"
                      name="renove"
                      value={this.props.renove}
                      onChange={this.props.onChange}
                      required/>
                      {errors.renove && (<p className="help is-danger">{errors.renove}</p>)}
                    </p>
                  </div>
                </div>
              </div>
          </div> {/* closing the first half column*/}



              <div className="column is-half">
              <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  Les méthodes utilisées
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                <div className="control">
                <label className="checkbox">
                  <input
                  type="checkbox"
                  name="methodeReferenceSelected"
                  checked={this.props.methodeReferenceSelected}
                  onChange={this.props.onChange}></input>
                    méthode par référence
                </label>


              <label className="checkbox">
                <input
                type="checkbox"
                name="methodeComparaisonSelected"
                checked={this.props.methodeComparaisonSelected}
                onChange={this.props.onChange}></input>
                  méthode par comparaison
              </label>
              <label className="checkbox">
                <input
                type="checkbox"
                name="methodeCapitalisationSelected"
                checked={this.props.methodeCapitalisationSelected}
                onChange={this.props.onChange}></input>
                  méthode par capitalisation
              </label>
              {errors.methodes && (<p className="help is-danger">{errors.methodes}</p>)}
                </div>
                </div>

              </div>
              </div>
              </div>

              </div>
              </div>


        );
      }
}

export default Step4Super;
