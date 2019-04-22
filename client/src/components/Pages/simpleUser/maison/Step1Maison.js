import React, { Component } from "react";
import classnames from "classnames";

import {setCoordinates} from "../../../../actions/mapActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";


import AlgoliaPlaces from 'algolia-places-react';


class Step1Maison extends Component {
  render() {
    const errors = this.props.errors;
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div>

        <h1>Etape 1 - Ladresse</h1>

    {/*
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
            */}

        <div className="field">
          <div className="control">
            <AlgoliaPlaces
              placeholder='rue'
              name="rue"
              className="input is-medium"
              //value={this.props.rue}
              onChange={this.props.onChange}
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
                  console.log( suggestion.latlng)
                  this.props.setCoordinates(suggestion.latlng);
                  document.querySelector('#ville').value = suggestion.city || '';
                  document.querySelector('#code_postal').value = suggestion.postcode || '';
                } 
            
              }
        
              onSuggestions={({ rawAnswer, query, suggestions }) => 
                console.log()}
        
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

Step1Maison.propTypes = {
  setCoordinates : PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  coordinates : state.map.coordinates,
})

export default connect(mapStateToProps,{setCoordinates})(Step1Maison);