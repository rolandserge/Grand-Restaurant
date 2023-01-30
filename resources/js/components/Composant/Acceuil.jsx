import React from 'react';
import { Link } from 'react-router-dom';
import User from "../../Assets/user.png"
import "../../Styles/Acceuil.css"
import Photo from "../../Assets/photo.jpg"
import Profil from '../../Assets/profil.jpg'
import Tomate from "../../Assets/Tomate.png"
import Frite from "../../Assets/frite.png"
import Ingredient from "../../Assets/ingredient.png"

const Acceuil = () => {
    return (
        <div className='container_acceuil'>
            <div className='acceuil_gauche'>
                <div className='acceuil_titre'>
                    <h1>
                        The Finger Licking Delicious Taste
                    </h1>
                </div>
                <div className='lorem_titre'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis omnis dolorum tenetur ipsa voluptates ab tempore atque esse consequatur !</p>
                </div>
                <div className='food'>
                    <Link to='' className='food_explore'>Explore Food</Link>
                    <Link to="" className='food_watch'>Watch video</Link>
                </div>
                <div className='statistiques'>
                    <div className='user_photo'>
                        <div className='photo_profil'>
                            <img src={User} alt="" />
                        </div>
                        <div className='photo_profil'>
                            <img src={Photo} alt="" />
                        </div>
                        <div className='photo_profil'>
                            <img src={Profil} alt="" />
                        </div>
                        <div className='photo_profil'>
                            <img src={Profil} alt="" />
                        </div>
                    </div>
                    <div>
                        <p>Our Happy Custumer</p>
                        <p>4.8 (2.7 k Review )</p>
                    </div>
                </div>
            </div>
            <div className='plat_tomate'>
                <img src={Tomate} alt="" />
            </div>
            <div className='acceuil_droite'>
                <div className='titre_grand'>
                    <h1>grand</h1>
                </div>
                <div className='center_plat'>
                    <div className='type_plat'>
                        <div className='plat_liste'>
                            <div className="plate_liste_image">
                                <img src={Tomate} alt="" />
                            </div>
                            <div className='plate_liste_text'>
                                <p>Fruit</p>
                            </div>
                        </div>
                        <div className='plat_liste'>
                            <div className="plate_liste_image">
                                <img src={Frite} alt="" />
                            </div>
                            <div className='plate_liste_text'>
                                <p>Legume</p>
                            </div>
                        </div>
                        <div className='plat_liste'>
                            <div className="plate_liste_image">
                                <img src={Tomate} alt="" />
                            </div>
                            <div className='plate_liste_text'>
                                <p>Entrée</p>
                            </div>
                        </div>
                        <div className='plat_liste'>
                            <div className="plate_liste_image">
                                <img src={Frite} alt="" />
                            </div>
                            <div className='plate_liste_text'>
                                <p>Sortie</p>
                            </div>
                        </div>
                        <div className='plat_liste'>
                            <div className="plate_liste_image">
                                <img src={Tomate} alt="" />
                            </div>
                            <div className='plate_liste_text'>
                                <p>Dessert</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ingredient'>
                <img src={Ingredient} alt="" />
            </div>
        </div>
    );
};

export default Acceuil;
