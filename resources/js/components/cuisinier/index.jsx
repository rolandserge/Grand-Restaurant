import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiTwitter } from "react-icons/fi";

export default function Cuisinier() {

    return (
        <div className='container-cuisiniere' name="chef">
            <div className='cuisiniere-titre'>
                <h2>Rencontrez nos Chefs exclusifs & maîtres</h2>
            </div>
            <div className='cuisiniere-cards'>
                <div className='card'>
                    <div className='card-image'>
                        <img src="/assets/cuisiniere2.jpg" alt="" />
                    </div>
                    <div className='card-infos'>
                        <p className='chef-nom'>Pierre N'gadeau</p>
                        <center>
                            <div className='sociaux'>
                                <FaFacebookF size={22} style={{cursor: "pointer" }} />
                                <FaInstagram size={22} style={{cursor: "pointer" }} />
                                <MdOutlineMailOutline size={22} style={{cursor: "pointer" }} />
                                <FiTwitter size={22} style={{cursor: "pointer" }} />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src="/assets/cuisiniere5.jpg" alt="" />
                    </div>
                    <div className='card-infos'>
                        <p className='chef-nom'>Chien vert 😂</p>
                        <center>
                            <div className='sociaux'>
                                <FaFacebookF size={22} style={{cursor: "pointer" }} />
                                <FaInstagram size={22} style={{cursor: "pointer" }} />
                                <MdOutlineMailOutline size={22} style={{cursor: "pointer" }} />
                                <FiTwitter size={22} style={{cursor: "pointer" }} />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src="/assets/cuisiniere3.jpg" alt="" />
                    </div>
                    <div className='card-infos'>
                        <p className='chef-nom'>Audrey la folle</p>
                        <center>
                            <div className='sociaux'>
                                <FaFacebookF size={22} style={{cursor: "pointer" }} />
                                <FaInstagram size={22} style={{cursor: "pointer" }} />
                                <MdOutlineMailOutline size={22} style={{cursor: "pointer" }} />
                                <FiTwitter size={22} />
                            </div>
                        </center>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-image'>
                        <img src="/assets/cuisiniere4.jpg" alt="" />
                    </div>
                    <div className='card-infos'>
                        <p className='chef-nom'>Vanessa de yopougon</p>
                        <center>
                            <div className='sociaux'>
                                <FaFacebookF size={22} style={{cursor: "pointer" }} />
                                <FaInstagram size={22} style={{cursor: "pointer" }} />
                                <MdOutlineMailOutline size={22} style={{cursor: "pointer" }} />
                                <FiTwitter size={22} style={{cursor: "pointer" }} />
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
};
