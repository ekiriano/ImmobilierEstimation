import React, { Component } from 'react'
import PaypalExpressBtn from 'react-paypal-express-checkout';

class BecomePremium extends Component {
  render() {

    const onSuccess = (payment) => {
      console.log("The payment was succeeded!", payment);
      // this.props.setUserto premieu
    }


    let env = 'sandbox';
    let currency = 'EUR';
    let total = 0.5; 

    const client = {
      sandbox : "YOUR-SANDBOX",
      production : "YOUR-SANDBOX"
    }

    const onCancel = (data) => {
     
      console.log('The payment was cancelled!', data);
      // set error local state
     
  }

  const onError = (err) => {
      
      console.log("Error!", err);
      // set error local state
      
  }

    return (
      <div>
        <h1>Devenir premium</h1>
        {/*
        <div className="columns is-centered">
            <div className="column">
                <button className="button is-link">Devenir Premium pour 5€</button>
            </div>
        </div> */}

        <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel}/>
      </div>
    )
  }
}

export default BecomePremium;