import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className='footer-center'>
            <div className='footer-container'>
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
                            <img src="/assets/Fbook.png" alt="" />
                        </div>
                        <div className='image_card'>
                            <img src="/assets/Insta.png" alt="" />
                        </div>
                        <div className='image_card'>
                            <img src="/assets/twt.png" alt="" />
                        </div>
                        <div className='image_card'>
                            <img src="/assets/E-mail.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="card quicks">
                    <div>
                        <p className='quick'>Quicks Link</p>
                    </div>
                    <div className='quick-menu'>
                        <Link to="#" className='link'>Menu</Link>
                        <Link to="#" className='link'>Services</Link>
                        <Link to="#" className='link'>Restauration</Link>
                        <Link to="#" className='link'>Super Chef</Link>
                        <Link to="#" className='link'>Order Food</Link>
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
                            <img src="/assets/E-mail.png" alt="" />
                            <p>grandrestaurant@gmail.com</p>
                        </div>
                        <div>
                            <img src="/assets/appel.png" alt="" />
                            <p>+ 225 07 04 21 91 95</p>
                        </div>
                        <div>
                            <img src="/assets/localisation.png" alt="" />
                            <p>Abidjan - Koumassi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
