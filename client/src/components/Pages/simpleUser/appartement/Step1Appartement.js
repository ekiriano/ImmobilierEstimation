import React, { Component } from "react";
import classnames from "classnames";

import {setCoordinates} from "../../../../actions/mapActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";


import AlgoliaPlaces from 'algolia-places-react';

class Step1Appartement extends Component {

  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
     
      <div>

      <h1>Etape 1 - L'adresse</h1>


      <div className="field">
        <div className="control">
          <AlgoliaPlaces
            placeholder='rue'
            name="rue"
            className={classnames("input is-medium", {
              "is-danger": errors.rue
           })}
            //value={this.props.rue}
           
            required
            options={{
              appId: 'plWUDIFT7TRW',
              apiKey: '22f2e2fcd81c4671b9628b413b864801',
              templates: {
                value: function(suggestion) {
                
                  return suggestion.name;
                }
              },
              type: 'address',
              
            }}

            // eslint-disable-next-line react/jsx-no-duplicate-props
            onChange={({ query, rawAnswer, suggestion, suggestionIndex }) => 
              {
                this.props.setCoordinates(suggestion.latlng);
                var ville = document.querySelector('#ville');
                ville.value = suggestion.city || '';
                this.props.changeVille(suggestion.city);
                this.props.changeRue(suggestion.name);
                var code_postal = document.querySelector('#code_postal');
                code_postal.value = suggestion.postcode || '';
                this.props.changeCodePostal(suggestion.postcode || '');
              } 
          
            }
      
            onSuggestions={({ rawAnswer, query, suggestions }) => 
              console.log({rawAnswer})}
      
            onCursorChanged={({ rawAnswer, query, suggestion, suggestonIndex }) => 
              console.log()}
      
            onClear={() => 
              console.log()}
      
            onLimit={({ message }) => 
              console.log()}
      
            onError={({ message }) => 
              console.log()}
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
            id="code_postal"
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
            id="ville"
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


Step1Appartement.propTypes = {
  setCoordinates : PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  coordinates : state.map.coordinates,
})

export default connect(mapStateToProps,{setCoordinates})(Step1Appartement);