import React from 'react';
import "../../Styles/Reservation.css"
import Recette from "../../Assets/recette.jpg"

const Reservation = () => {
    return (
        <div className='center'>
            <div className='container_reservation'>
                <div className="reservation_image">
                    <img src={Recette} alt="" />
                </div>
                <div className="formulaire_container">
                    <div className='infos_reserve'>
                        <h3>Faire une Réservation</h3>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, magnam.
                            Lorem ipsum dolor
                        </p>
                    </div>
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder='Entrer votre nom'/>
                            <select name="" id="">
                                <option value="">--- Personne ---</option>
                                <option value="">Etudiant</option>
                                <option value="">Eleve</option>
                                <option value="">Travailleur</option>
                            </select>
                            <input type="date" placeholder='Choisissez la date'/>
                            <input type="time" placeholder="Choisissez l'heure"/>
                            <div className='reserve_button'>
                                <button>Book a table</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
