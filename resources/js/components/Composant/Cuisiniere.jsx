import React from 'react';
import "../../Styles/Cuisiniere.css"
import Fb from "../../Assets/Fbook.png"
import Email from "../../Assets/E-mail.png"
import Twitter from "../../Assets/twt.png"
import Insta from "../../Assets/Insta.png"
import Cuisiniere1 from "../../Assets/cuisiniere2.jpg"
import Cuisiniere2 from "../../Assets/cuisiniere3.jpg"
import Cuisiniere3 from "../../Assets/cuisiniere4.jpg"
import Cuisiniere4 from "../../Assets/cuisiniere5.jpg"

const Cuisiniere = () => {
    return (
        <div className='container_cuisiniere'>
            <div className='cuisiniere_titre'>
                <h2>Rencontrez Nos Chefs Exclusifs & Maîtres</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, doloribus.
                    Lorem ipsum dolor sit amet
                </p>
            </div>
            <div className='cuisiniere_cards'>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere1} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Pierre N'gadeau</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere2} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Chien vert 😂</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere3} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Audrey la folle</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_image'>
                        <img src={Cuisiniere4} alt="" />
                    </div>
                    <div className='card_infos'>
                        <p className='chef_nom'>Vanessa de yopougon</p>
                        <center>
                            <div className='sociaux'>
                                <img src={Fb} alt="" />
                                <img src={Insta} alt="" />
                                <img src={Email} alt="" />
                                <img src={Twitter} alt="" />
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cuisiniere;
