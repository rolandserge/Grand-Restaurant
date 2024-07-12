import React from 'react'
import { Modal } from '@mantine/core'
import { MdCleanHands, MdAttachEmail } from "react-icons/md";
import { BiSolidDish } from "react-icons/bi";
import { FaShippingFast, FaFacebook, FaUsers } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

export default function AboutModal({ aboutOpened, aboutClose }) {

    return (
        <Modal 
            opened={aboutOpened} 
            onClose={aboutClose} 
            title="A PROPOS DE GRAND RESTAURANT"
            centered size="xl"
        >
            <div className='container-modal-about'>
                <div className='restaurant-card'>
                    <img 
                        src="/assets/restaurant.jpg" 
                        alt="Image du restaurant" 
                    />
                </div>
                <div className='restaurant-info'>
                    <div className="logo">
                        <p className='logo-grand'>grand</p>
                        <p className='logo-restaurant'>Restaurant</p>
                    </div>
                    <div className='detail'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum, ipsa magni 
                            nesciunt eos eius. Perferendis error officia fugit aspernatur. 
                            Aliquam quis numquam placeat minus vitae voluptate ipsam iusto veritatis?
                            Voluptatibus numquam perspiciatis minima, officia, alias mollitia illo eos, 
                            quidem commodi dignissimos repellendus animi voluptates similique placeat 
                        </p>
                    </div>
                    <div className='container-atout'>
                        <p>Nos atouts</p>
                        <div className='atout-cards'>
                            <div>
                                <MdCleanHands className='icon' />
                                <span>Propreté</span>
                            </div>
                            <div>
                                <FaUsers className='icon' />
                                <span>Proximité</span>
                            </div>
                            <div>
                                <BiSolidDish className='icon' />
                                <span>Qualité</span>
                            </div>
                            <div>
                                <FaShippingFast className='icon' />
                                <span>Rapidité</span>
                            </div>
                        </div>
                    </div>
                    <div className='reseau-social'>
                        <p>Ou vous pouvez nous trouvé ?</p>
                        <div className='social-card'>
                            <div>
                                <FaFacebook className='icon' />
                                <span>Grand Restaurant de CI</span>
                            </div>
                            <div>
                                <BsInstagram className='icon' />
                                <span>Grand Restaurant CI</span>
                            </div>
                            <div>
                                <AiFillTikTok className='icon' />
                                <span>Grand Restaurant</span>
                            </div>
                            <div>
                                <MdAttachEmail className='icon' />
                                <span>grandrestaurant@gmail.ci</span>
                            </div>
                            <div>
                                <IoLocationSharp className='icon' />
                                <span>Abidjan - Koumassi Carrefour 147</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
