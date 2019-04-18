import React, { Component } from 'react'
import {setUserTypeToSuper} from "../../actions/userActions";
import PaypalExpressBtn from 'react-paypal-express-checkout';

import PropTypes from "prop-types";
import {connect} from "react-redux";


class BecomePremium extends Component {
  render() {

    const onSuccess = (payment) => {
      console.log("success");
      this.props.history.push('/login');
      //this.props.setUserTypeToSuper();
    }


    let env = 'sandbox';
    let currency = 'EUR';
    let total = 20; 

    const client = {
      sandbox : "AUQ9lu8J8H1c-8Uz1uS-439wg0w6YdCFm8DUzjFcNzIuT5vZs3N0uQNkpzfGg1CAHCoQ9nU_3e561-PL",
      production : "" //find a way to set up my key
    }

    const onCancel = (data) => {
     
      console.log('The payment was cancelled!', data);
      // set error local state
     
  }

  const onError = (err) => {
      
      console.log("Error!", err);
      // set error local state
      
  }

  const style = {
    layout:  'vertical',
    color:   'blue',
    shape:   'rect',
    label:   'paypal'
  }

    return (
      <div>
        <h1>Devenir premium</h1>
       
        <div className="columns is-centered">
            <div className="column">
               <p>Devenir premium pour la modique somme de 20€ vous permetra de  :</p>
               <ul>
                 <li>Gerer les estimmations de vos clients</li>
                 <li>Avoir acces a des estimmations plus completes</li>
                 <li>Avoir acces a de nombreuses methodes d'estimmations</li>
                 <li></li>
               </ul>
            </div>
        </div>

        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} style={style}/>
      </div>
    )
  }
}


BecomePremium.propTypes = {
  setUserTypeToSuper: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
  errors: state.errors,
});

export default connect(mapStateProps,{setUserTypeToSuper})(BecomePremium);