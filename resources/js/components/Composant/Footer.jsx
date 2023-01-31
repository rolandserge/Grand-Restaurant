import React from 'react';
import "../../Styles/Footer.css"
import Fb from "../../Assets/Fbook.png"
import Twitter from "../../Assets/twt.png"
import Insta from "../../Assets/Insta.png"
import Email from "../../Assets/E-mail.png"
import Telephone from "../../Assets/appel.png"
import Localisation from "../../Assets/localisation.png"

const Footer = () => {
    return (
        <div className='footer_center'>
            <div className='footer_container'>
                <div className="card titre">
                    <div className='logo'>
                        <p className='grand'>GRAND</p>
                        <p className='resto'>RESTAURANT</p>
                    </div>
                    <div className='description'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aspernatur, at?
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className='compte_infos'>
                        <div className='image_card'>
                            <img src={Fb} alt="" />
                        </div>
                        <div className='image_card'>
                            <img src={Insta} alt="" />
                        </div>
                        <div className='image_card'>
                            <img src={Twitter} alt="" />
                        </div>
                        <div className='image_card'>
                            <img src={Email} alt="" />
                        </div>
                    </div>
                </div>
                <div className="card quicks">
                    <div>
                        <p className='quick'>Quicks Link</p>
                    </div>
                    <div className='quick_menu'>
                        <p>Menu</p>
                        <p>Services</p>
                        <p>Restauration</p>
                        <p>Super Chef</p>
                        <p>Order Food</p>
                    </div>
                </div>
                <div className="card working">
                    <div className='work'>
                        <p>Woorking Hours</p>
                    </div>
                    <div className='horaire'>
                        <p>Lundi - Vendredi ---- 09 H a 22 H</p>
                        <p>Samedi ----- 10 H 30 20</p>
                        <p>Dimanche ----- 12 H a 19 H</p>
                    </div>
                </div>
                <div className="card coordonner">
                    <div className='finds'>
                        <p>Find Us</p>
                    </div>
                    <div className='mes_contacts'>
                        <div>
                            <img src={Email} alt="" />
                            <p>GrandRestaurant@gmail.com</p>
                        </div>
                        <div>
                            <img src={Telephone} alt="" />
                            <p>+ 225 07 04 21 91 95</p>
                        </div>
                        <div>
                            <img src={Localisation} alt="" />
                            <p>Esatic bd de Marseille</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
