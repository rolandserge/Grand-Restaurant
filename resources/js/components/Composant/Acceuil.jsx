import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import User from "../../Assets/user.png"
import "../../Styles/Acceuil.css"
import Photo from "../../Assets/photo.jpg"
import Profil from '../../Assets/profil.jpg'
import Tomate from "../../Assets/Tomate.png"
import Frite from "../../Assets/frite.png"
import Ingredient from "../../Assets/ingredient.png"
import Crepe from "../../Assets/crepe.png"
import Poulet from "../../Assets/poulet.png"
import Burger from "../../Assets/burger.png"

const Acceuil = () => {

    const plats = [
        {
            id: 1,
            name: "Fruits",
            image: Tomate
        },
        {
            id: 2,
            name: "Legumes",
            image: Frite
        },
        {
            id: 3,
            name: "Dessert",
            image: Crepe
        },
        {
            id: 4,
            name: "Sortie",
            image: Poulet
        },
        {
            id: 5,
            name: "Entrée",
            image: Burger
        }
    ]
    const [image, setImage] = useState(Tomate)

    function ChangeImage(image) {
        setImage(image)
    }

     return (
        <div className='container_acceuil'>
            <div className='acceuil_gauche'>
                <div className='acceuil_titre'>
                    <h1>
                        Le Goût Délicieux du Léchage de Doigts
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
                <img src={image} alt="" />
            </div>
            <div className='acceuil_droite'>
                <div className='titre_grand'>
                    <h1>grand</h1>
                </div>
                <div className='center_plat'>
                    <div className='type_plat'>
                        {
                            plats.map((plat) => {

                                return (
                                <div className='plat_liste' onClick={() => ChangeImage(plat.image)}>
                                    <div className="plate_liste_image">
                                        <img src={plat.image} alt={plat.name} />
                                    </div>
                                    <div className='plate_liste_text'>
                                        <p>{plat.name}</p>
                                    </div>
                                </div>
                                    )
                            })
                        }
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
