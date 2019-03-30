import React, { Component } from "react";
import classnames from "classnames";

/*
- civilite
- prenom
- nom
- adressePostale
- email
- telephone
*/



class Step1Super extends Component {
    render() {
        const errors = this.props.errors;
        if (this.props.currentStep !== 1) {
          return null;
        }
        return (
          <div>
            <h1>Test 1 </h1>
            <div className="control">
                <label className="radio">
                  <input type="radio" name="civilite"></input>
                  Aucun
                </label>
                <label className="radio">
                  <input type="radio" name="civilite"></input>
                  Monsieur
                </label>
                <label className="radio">
                  <input type="radio" name="civilite"></input>
                  Madame.
                </label>
                <label className="radio">
                  <input type="radio" name="civilite"></input>
                  Monsieur et Madame.
                </label>
                <label className="radio">
                  <input type="radio" name="civilite"></input>
                  Messieurs.
                </label>
                <label className="radio">
                  <input type="radio" name="civilite"></input>
                  Mesdames.
                </label>
            </div>

            <div className="field">
              <div className="control">
                <label className="text">
                Prénom
                  <input
                    className="input is-medium"
                    type="text"
                    name="Prenom"
                    placeholder="Prenom"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Nom
                  <input
                    className="input is-medium"
                    type="text"
                    name="nom"
                    placeholder="nom"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Adresse Postale
                  <input
                    className="input is-medium"
                    type="text"
                    name="adressePostale"
                    placeholder="Adresse Postale"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Email
                  <input
                    className="input is-medium"
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  </label>
              </div>
           </div>

           <div className="field">
              <div className="control">
                <label className="text">
                Téléphone 
                  <input
                    className="input is-medium"
                    type="text"
                    name="telephone"
                    placeholder="Telephone"
                    required
                  />
                  </label>
              </div>
           </div>

            
          </div>
        );
      }
}

export default Step1Super;
