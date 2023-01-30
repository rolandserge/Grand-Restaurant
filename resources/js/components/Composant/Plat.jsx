import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/Plat.css"
import Fleche from '../../Assets/fleche.png'
import Pizza from "../../Assets/pizza1.jpg"
import Etoile from "../../Assets/etoile.png"
import Pizza1 from "../../Assets/pizza2.jpg"
import Pizza2 from "../../Assets/pizza3.jpg"

const Plat = () => {
    return (
        <div className='container_plat'>
            <div className='plat_intro'>
                <div className='titre_plat'>
                    <h3>Our Menu Pack That Always Makes</h3>
                </div>
                <div className='plat_fleche'>
                    <div>
                        <Link className='lien'>
                            <img src={Fleche} alt="" />
                        </Link>
                    </div>
                    <div className='active'>
                        <Link className='lien'>
                            <img src={Fleche} className="droite" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='plat_liste'>
                <div className='button_plat'>
                    <button>Special Food</button>
                    <button className='active'>Ivoirienne</button>
                    <button>Anglais</button>
                    <button>Senegal</button>
                    <button>Europenne</button>
                    <button>Cameroonais</button>
                </div>
                <div className='plat_infos'>
                    <div className='plat_card'>
                        <div className='plat_image'>
                            <img src={Pizza} alt="" />
                        </div>
                        <div className='plat_infos_card'>
                            <div className='plat_etoile'>
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div className='plat_order'>
                                <p>Porc au Four sauté</p>
                                <h3>5 000 FCFA</h3>
                            </div>
                            <div className='description'>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus
                                </p>
                            </div>
                            <div className='order_button'>
                                <Link to="" className='order'>Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='plat_card'>
                        <div className='plat_image'>
                            <img src={Pizza1} alt="" />
                        </div>
                        <div className='plat_infos_card'>
                            <div className='plat_etoile'>
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div className='plat_order'>
                                <p>Pizza Ivoirien</p>
                                <h3>10 000 FCFA</h3>
                            </div>
                            <div className='description'>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus
                                </p>
                            </div>
                            <div className='order_button'>
                                <Link to="" className='order'>Order Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='plat_card'>
                        <div className='plat_image'>
                            <img src={Pizza2} alt="" />
                        </div>
                        <div className='plat_infos_card'>
                            <div className='plat_etoile'>
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div className='plat_order'>
                                <p>Spaghetti de Diallo</p>
                                <h3>3 500 FCFA</h3>
                            </div>
                            <div className='description'>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus
                                </p>
                            </div>
                            <div className='order_button'>
                                <Link to="" className='order'>Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plat;
