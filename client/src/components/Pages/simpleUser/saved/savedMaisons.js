import React, { Component} from "react";
import axios from "axios";

import { Link } from "react-router-dom";


class savedMaisons extends Component {
    constructor(props){
        super(props);
        this.state = {
            maisons : [], 
        }
    }
    
    componentDidMount(){
        axios.get("/api/estimation/default/maisons/saved")
        .then(res => this.setState({maisons : res.data}))
        .catch( error => console.log(error));
    }

    delete(e,maison){
        e.preventDefault();
        console.log(maison);
        /*
        axios.delete("/api/estimation/default/houses/saved/:id")
        .then( /* fade the the concerned card -> find the record in maison and delete it *//* )
        .catch( error => console.log(error));*/
    }

  render() {

    var maisonCards = this.state.maisons.map( (maison,i) => {
        return (
            <div className="card mb-is-1" key={i}>
                    <header className="card-header">
                        <p className="card-header-title">
                            Addresse : {maison.rue} {maison.code_postal} {maison.ville}
                        </p>
                    </header>
                    <div className="card-content">
                        <div className="content">
                            <div className="columns">
                                <div className="column is-half">
                                    <p> <i className='uil uil-ruler-combined'></i> surface habitable : {maison.surface_habitable}m²</p>
                                    <p> <i className='uil uil-ruler-combined'></i> surface constructible : {maison.surface_habitable_constructible}m²</p>
                                    <p> <i className='uil uil-ruler-combined'></i>surface  totale terrain : {maison.surface_totale_terrain}m²</p>
                                    <p>nombre pièces : {maison.nombre_pieces}</p>
                                    <p>nombre salle bain : {maison.nombre_salle_bain}</p>
                                    <p>nombre d'étages : {maison.nombre_niveaux}</p>
                                </div>
                                <div className="column is-half">
                                    <p><i className='uil uil-clock-two'></i>année construction : {maison.annee_construction}</p>
                                    <p><i className='uil uil-bolt-alt'></i>DPE : {maison.diagnostic_performance_energetique} </p>
                                    <p>etat bien : {maison.etat_bien}</p>
                                    <p>qualité luminosité : {maison.luminosite}</p>
                                    <p>calme : {maison.calme}</p>
                                    <p>proximité : {maison.proximite_transports}</p>
                                </div>
                            </div>
                            <p>Estimmé a : {maison.prix_estimation} €</p>
                        </div>
                    </div>
                   <footer className="card-footer">
                        <Link to="#" className="card-footer-item" onClick={e => this.delete(e,maison.id)}><i className='uil uil-trash-alt'></i>Delete</Link>
                   </footer>
                </div>
        );
    });

    return (
      <div>
        <h1>My saved maisons</h1>
        <div className="columns is-centered">
            <div className="column is-6">
                {maisonCards}
            </div> 
        </div>
      </div>
    )
  }
}

export default savedMaisons;