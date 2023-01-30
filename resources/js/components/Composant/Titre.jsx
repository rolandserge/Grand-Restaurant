import React from 'react';
import { Link } from 'react-router-dom';
import Gauche from "../../Assets/fleche.png"
import "../../Styles/Titre.css"

const Titre = () => {
    return (
        <div className='container_titre'>
            <div className='titre_div'>
                <h1>Most Popular Dishes</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum. Lorem, ipsum.
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
            </div>
            <div className='fleche'>
                <div>
                    <Link className='clique'>
                        <img src={Gauche} alt="" />
                    </Link>
                </div>
                <div className='active'>
                    <Link className='clique'>
                        <img src={Gauche} alt="" className='fleche_droite'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Titre;
