import React from 'react';
import "../../Styles/Footer.css"
import Fb from "../../Assets/Fbook.png"
import Twitter from "../../Assets/twt.png"
import Insta from "../../Assets/Insta.png"
import Email from "../../Assets/E-mail.png"

const Footer = () => {
    return (
        <div>
            <div>
                <div>

                    <div>
                        <p>GRAND</p>
                        <p>RESTAURANT</p>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Aspernatur, at?
                        Lorem ipsum dolor sit amet.
                    </div>
                    <div>
                        <img src={Fb} alt="" />
                        <img src={Insta} alt="" />
                        <img src={Twitter} alt="" />
                        <img src={Email} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <p>Quicks Link</p>
                    </div>
                    <div>
                        <p>Menu</p>
                        <p>Services</p>
                        <p>Restauration</p>
                        <p>Super Chef</p>
                        <p>Order Food</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Woorking Hours</p>
                    </div>
                    <div>
                        <p>Lundi - Vendredi ---- 09 H a 22 H</p>
                        <p>Samedi ----- 10 H 30 20</p>
                        <p>Dimanche ----- 12 H a 19 H</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Find Us</p>
                    </div>
                    <div>
                        <div>
                            <img src={Email} alt="" />
                            <p>GrandRestaurant@gmail.com</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>+ 225 07 04 21 91 95</p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p>Esatic bd de Marseille</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
