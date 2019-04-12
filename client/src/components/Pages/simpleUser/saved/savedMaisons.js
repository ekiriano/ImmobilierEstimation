import React, { Component} from "react";
import axios from "axios";

import { Link } from "react-router-dom";


class savedMaisons extends Component {
    constructor(props){
        super(props);
        this.state = {
            maisons : 
            [
                {
                  "_id": "5caf4bb10e2e7f210ca847e9",
                  "user": "5cab5863afd62f0350396981",
                  "rue": "34 rue shirin ebadie, Appt A11, Appt A11",
                  "code_postal": "34000",
                  "ville": "Montpellier",
                  "surface_habitable": 150,
                  "surface_totale_terrain": 54,
                  "surface_habitable_constructible": 150,
                  "nombre_pieces": 10,
                  "nombre_salle_bain": 10,
                  "nombre_niveaux": 10,
                  "annee_construction": 1991,
                  "diagnostic_performance_energetique": "A",
                  "etat_bien": "Bon",
                  "qualite_maison": "Bon",
                  "luminosite": "Bon",
                  "calme": "BON",
                  "proximite_transports": "Bon",
                  "qualite_toiture": "BON",
                  "__v": 0
                },
                {
                  "_id": "5caf4bb60e2e7f210ca847ea",
                  "user": "5cab5863afd62f0350396981",
                  "rue": "69 rue shirin ebadie, Appt A11, Appt A11",
                  "code_postal": "34000",
                  "ville": "Montpellier",
                  "surface_habitable": 150,
                  "surface_totale_terrain": 54,
                  "surface_habitable_constructible": 150,
                  "nombre_pieces": 10,
                  "nombre_salle_bain": 10,
                  "nombre_niveaux": 10,
                  "annee_construction": 1991,
                  "diagnostic_performance_energetique": "A",
                  "etat_bien": "Bon",
                  "qualite_maison": "Bon",
                  "luminosite": "Bon",
                  "calme": "BON",
                  "proximite_transports": "Bon",
                  "qualite_toiture": "BON",
                  "__v": 0
                }
              ], // set to empty array then fetch das data
        }
    }
    
    componentDidMount(){/*
        axios.get("/api/estimation/default/house/saved")
        .then(res => console.log(res.data))
        .catch( error => console.log(error));*/
    }
  render() {

    var maisonCards = this.state.maisons.map( maison => {
        return (
            <div className="card mb-is-1">
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
                        <Link to="#" className="card-footer-item"><i className='uil uil-trash-alt'></i>Delete</Link>
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