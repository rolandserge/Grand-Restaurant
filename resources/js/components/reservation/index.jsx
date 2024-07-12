import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast'
import axios from 'axios';
import { useAuth } from '../../context/authContext';

export default function Reservation() {

    const { register, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    const { logout } = useAuth()

    const onSubmit = async(data) => {
        setLoading(true)
        try {
            const { nom, nombre, heure, date } = data
            await axios.post("/api/addReservation", { 
                nom, 
                nombre, 
                heure, 
                date, 
                description: "La description de la reservation"
            }).then(res => {
                if(res.status == 200) {
                    toast.success("Votre reservation a été traiter avec success !")
                    document.getElementById("form").reset();
                }
            })

        } catch (error) {
            if(error.response.status == 401) {
                toast.error("Votre session a expirée ! veillez vous connectez")
                logout()
            }
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='center' name="reservation">
            <div className='container_reservation'>
                <div className="reservation_image">
                    <img src="/assets/recette.jpg" alt="" />
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
                        <form onSubmit={handleSubmit(onSubmit)} id='form'>
                            <input 
                                type="text" 
                                placeholder='Entrer votre nom'
                                {...register("nom", { required: true })}
                            />
                            <input 
                                type="number" 
                                placeholder='Entrer le nombre de personne'
                                {...register("nombre", { required: true })}
                            />
                            <input 
                                type="date" 
                                placeholder='Choisissez la date'
                                {...register("date", { required: true })}
                            />
                            <input 
                                type="time" 
                                placeholder="Choisissez l'heure"
                                {...register("heure", { required: true })}
                            />
                            <div className='reserve_button'>
                                <button type='submit' disabled={loading}>
                                    Reserver une table
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

