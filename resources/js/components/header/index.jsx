import React, { useState } from 'react';
import { Link } from "react-scroll";
import Nav from './nav';
import { categories } from '../../data';

export default function Header () {

    const [image, setImage] = useState("/assets/Tomate.png")

    function ChangeImage(image) {
        setImage(image)
    }

    return (
        <>  
            {/* Nav bar destop */}
            <Nav />

            <div className='container-acceuil'>
                <div className='acceuil-gauche'>
                    <div className='acceuil-titre'>
                        <h1>
                            Le Goût Délicieux du Léchage de Doigts
                        </h1>
                    </div>
                    <div className='lorem_titre'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis omnis dolorum tenetur ipsa voluptates ab tempore atque esse consequatur !</p>
                    </div>
                    <Link 
                        to='menu' 
                        className='food-explore'
                    >
                        Explorer nos plats &rarr;
                    </Link>
                    <div className='statistiques'>
                        <div className='card-profil'>
                            <img 
                                src="/assets/user.png" 
                                alt="image profile" 
                                className='profil-image'
                            />
                            <img 
                                src="/assets/photo.jpg"
                                alt="image profile"
                                className='profil-image' 
                            />
                            <img 
                                src="/assets/profil.jpg" 
                                alt="image profile" 
                                className='profil-image'    
                            />
                            <img 
                                src="/assets/profil.jpg" 
                                alt="image profile" 
                                className='profil-image' 
                            />
                        </div>
                        <div>
                            <p>+30 utilisateurs</p>
                            <p>4.8 (2.7 k Review )</p>
                        </div>
                    </div>
                </div>
                <div className='acceuil-droite'>
                    <div className='titre-grand'>
                        <h1>grand</h1>
                        <div className='plat-tomate'>
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div className='center-plat'>
                        <div className='type-plat'>
                            {
                                categories.map((categorie, index) => {

                                    return (
                                        <div className='plat-liste' key={index} onClick={() => ChangeImage(categorie.image)}>
                                            <div className="plat-liste-image">
                                                <img src={categorie.image} alt={categorie.name} />
                                            </div>
                                            <div className='plat-liste-text'>
                                                <p>{categorie.name}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='ingredient'>
                    <img src="/assets/ingredient.png" alt="" />
                </div>
            </div>
        </>
    );
};

