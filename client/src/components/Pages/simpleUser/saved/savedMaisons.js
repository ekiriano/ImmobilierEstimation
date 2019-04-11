import React, { Component} from "react";
import axios from "axios";

import PropTypes from "prop-types";

import { connect } from "react-redux";
import { Link } from "react-router-dom";


class savedMaisons extends Component {
    constructor(props){
        super(props);
        this.state = {
            maisons : [],
        }
    }
    
    componentDidMount(){
        axios.get("/api/estimation/default/house/saved")
        .then(res => console.log(res.data))
        .catch( error => console.log(error));
    }
  render() {
    return (
      <div>
        <h1>My saved maisons</h1>
        <div className="columns is-centered">
            <div className="column is-6">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            Addresse : 58 rue pomme ,34000 , Montpellier
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <div className="columns">
                                <div className="column is-half">
                                    <p> <i className='uil uil-ruler-combined'></i>surface : 350m²</p>
                                    <p>nombre pièces : 6</p>
                                    <p>nombre salle bain : 2</p>
                                    <p>etage : 3</p>
                                    <p>nombre etage total : 6</p>
                                </div>
                                <div className="column is-half">
                                    <p><i className='uil uil-clock-two'></i>année construction : 1992</p>
                                    <p><i className='uil uil-bolt-alt'></i>DPE : A+ </p>
                                    <p>etat bien : bon etat</p>
                                    <p>qualité luminosité : bonne</p>
                                    <p>calme : tres calme</p>
                                    <p>proximité : bien connecté</p>
                                </div>
                            </div>
                            <p>Estimmé a : 230 000 €</p>
                        </div>
                    </div>
                   <footer className="card-footer">
                        <Link to="#" className="card-footer-item"><i className='uil uil-trash-alt'></i>Delete</Link>
                   </footer>
                </div>
            </div> 
        </div>
      </div>
    )
  }
}

export default savedMaisons;