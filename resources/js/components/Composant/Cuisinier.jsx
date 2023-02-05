import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/Cuisinier.css"
import Chef from "../../Assets/chef1.jpg"
import Tomate from "../../Assets/tomatoes.png"

const Cuisinier = () => {
    return (
        <div className='cuisinier_container'>
            <div className='cuisinier_image'>
                <img src={Chef} alt="" />
            </div>
            <div className='cuisinier_infos'>
                <div className='infos_titre'>
                    <h3>Bienvenue à Grand. Nous Offrons une Variété de Cuisines</h3>
                </div>
                <div className='description'>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora illo eligendi nobis id? Repellat necessitatibus doloribus optio minima quae modi, consequuntur, placeat suscipit ut vitae dolore fugiat assumenda nobis!
                    Delectus neque deserunt odio veritatis nam
                    </p>
                </div>
                <div className='about_action'>
                    <div className='about_div'>
                        <Link className='about'>About Us</Link>
                    </div>
                    <div className='about_image'>
                        <img src={Tomate} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cuisinier;
