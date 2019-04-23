import React, { Component} from "react";
import PropTypes from 'prop-types';

import {getSavedBiens,deleteSavedBien} from "../../../../actions/superBienActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from 'react-awesome-modal';

class savedBiens extends Component {
    constructor(props){
        super(props);
        this.state = {
            biens : [],
            errors :{},
            visible: false,
        }
    }

    componentDidMount(){
        this.props.getSavedBiens();
    }

    onClickDelete(id){
        this.props.deleteSavedBien(id);

    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }


  render() {

    var bienCards =  this.props.savedBiens.map((bien,i) => {
        return(
            <div className="card mb-is-1" key={i}>
            <header className="card-header">
                <p className="card-header-title">
                    Addresse :{bien.ville}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <div className="columns">
                        <div className="column is-half">
                            <p> <i className='uil uil-ruler-combined'></i>surface : {bien.surface}m²</p>
                            <p>nombre pièces : {bien.nombre_pieces}</p>
                            <p>nombre salle bain : {bien.nombre_salle_bain}</p>
                            <p>etage : {bien.etage}</p>
                            <p>nombre etage total : {bien.nombre_etage_total}</p>
                        </div>
                        <div className="column is-half">
                        <p><i className='uil uil-clock-two'></i>année construction : {bien.annee_construction}</p>
                        <p><i className='uil uil-bolt-alt'></i>DPE : {bien.diagnostic_performance_energetique} </p>
                        <p>etat bien : {bien.etat_bien}</p>
                        <p>qualité luminosité : {bien.luminosite}</p>
                        <p>calme : {bien.calme}</p>
                        <p>proximité : {bien.proximite_transports}</p>
                        </div>
                    </div>
                    <p>Estimmé a : {bien.prix_final} €</p>
                    <a class="button is-success is-small" onClick={() => this.openModal()}>Plus de détails</a>
                    <Modal visible={this.state.visible} width="65%" height="80%" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                      <div>
                        <h1>{bien.ville}</h1> <hr/>
                          <div className="columns">
                            <div className="column is-half">
                              <p>nombre pièces : {bien.nombre_pieces}</p>
                              <p>nombre salle bain : {bien.nombre_salle_bain}</p>
                              <p>etage : {bien.etage}</p>
                              <p>nombre etage total : {bien.nombre_etage_total}</p>
                            </div>
                            <div className="column is-half">
                              <p>nombre pièces : {bien.nombre_pieces}</p>
                              <p>nombre salle bain : {bien.nombre_salle_bain}</p>
                              <p>etage : {bien.etage}</p>
                              <p>nombre etage total : {bien.nombre_etage_total}</p>
                            </div>
                          </div>
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                      </div>
                    </Modal>
                </div>
            </div>
           <footer className="card-footer">
           <button
            onClick={this.onClickDelete.bind(this, bien._id)}
            type="button"
            className="button is-warning card-footer-item"
            >
                <i className='uil uil-trash-alt'></i>   Supprimer
            </button>
           </footer>
        </div>
        );
    });


    return (
      <div>
        <h1 className="mb-is-0_5">Mes Estimations de biens</h1>
        <div className="columns is-centered">
            <div className="column is-6">
                {bienCards}
            </div>
        </div>
      </div>
    )
  }
}

savedBiens.propTypes = {
    getSavedBiens : PropTypes.func.isRequired,
    deleteSavedBien : PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    savedBiens : state.superBiens.savedBiens
});

export default connect(mapStateToProps,{getSavedBiens,deleteSavedBien})(savedBiens);
