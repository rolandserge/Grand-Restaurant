import React from 'react';
import { Link } from 'react-router-dom';

export default function Temoignage() {

    return (
        <div className='container_temoignage'>
            <div className='temoignage_resto'>
                <h2>Commentaires des clients du Grand Restaurant</h2>
            </div>
            <div className='temoignage_div'>
                <div className='temoignage_card'>
                    <div className='temoignage_text'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aut.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, perferendis!
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='user_infos'>
                        <div className='user_photo'>
                            <img src="/assets/profil.jpg" alt="" />
                        </div>
                        <div className='user_text'>
                            <p className='nom'>Serge-Roland Komenan</p>
                            <p className='role'>Utilisateur</p>
                        </div>
                    </div>
                </div>
                <div className='temoignage_card active'>
                    <div className='temoignage_text'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aut.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, perferendis!
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='user_infos'>
                        <div className='user_photo'>
                            <img src="/assets/chef1.jpg" alt="" />
                        </div>
                        <div className='user_text'>
                            <p className='nom'>Serge-Roland Komenan</p>
                            <p className='role'>Utilisateur</p>
                        </div>
                    </div>
                </div>
                <div className='temoignage_card'>
                    <div className='temoignage_text'>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, veritatis.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, aut.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, perferendis!
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='user_infos'>
                        <div className='user_photo'>
                            <img src="/assets/pizza2.jpg" alt="" />
                        </div>
                        <div className='user_text'>
                            <p className='nom'>Serge-Roland Komenan</p>
                            <p className='role'>Utilisateur</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='fleche_container'>
                <div className='gauche'>
                    <Link className='lien'>
                        <img src="/assets/fleche.png" alt="" />
                    </Link>
                </div>
                <div className='active'>
                    <Link className='lien'>
                        <img src="/assets/fleche.png" className="droite" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
