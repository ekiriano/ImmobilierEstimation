import axios from 'axios';
import {saveAs} from 'file-saver';

import React, { Component } from 'react'

 class FinalStepAppartement extends Component {
  render() {

    const errors = this.props.errors;
   
    if (this.props.currentStep !== 6) {
      return null;
    }

    createPDF = {} => {
      axios.post('/createPDF', this.props)
      .then(() => axios.get('fetch-pdf', {responseType: 'blob'}))
      .then((res) => {
        const pdfBlob = new Blob([res.data], {type: 'application/pdf'})

        saveAs(pdfBlob, 'newpdf.pdf');
      })
    }

    return (
      <div>
        <div>
            <h1> Votre bien a été estimmé à : {this.props.prix_estimation}  € </h1> 

            <button onClick={this.createPDF}> Download PDF</button>
        </div>
      </div>
    )
  }
}

export default FinalStepAppartement;
