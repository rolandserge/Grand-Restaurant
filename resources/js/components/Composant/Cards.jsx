import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Frite from "../../Assets/Frite.png"
import "../../Styles/Card.css"
import Poulet from "../../Assets/poulet.png"
import Burger from "../../Assets/burger.png"
import Crepe from "../../Assets/crepe.png"
import Etoile from "../../Assets/etoile.png"

const Cards = () => {
    return (
        <>
            {/* <Carousel> */}
            <div className="cards">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                // spaceBetween={50}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                    <div className="card">
                        <div className='card_image'>
                            <img src={Frite} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Askip soupe</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>2 500 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card active">
                        <div className='card_image'>
                            <img src={Poulet} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Poulet braisé</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>2 000 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button className='active'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card">
                        <div className='card_image'>
                            <img src={Crepe} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Tchep Ivoirien</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>10 000 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card">
                        <div className='card_image'>
                            <img src={Burger} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Porc sauté reveni</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>4 000 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card">
                        <div className='card_image'>
                            <img src={Frite} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Askip soupe</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>2 500 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card active">
                        <div className='card_image'>
                            <img src={Poulet} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Poulet braisé</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>2 000 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button className='active'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card">
                        <div className='card_image'>
                            <img src={Crepe} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Tchep Ivoirien</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>10 000 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="card">
                        <div className='card_image'>
                            <img src={Burger} alt="" />
                        </div>
                        <div className='infos_div'>
                            <div className="etoile_image">
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                                <img src={Etoile} alt="" />
                            </div>
                            <div>
                                <h3>Porc sauté reveni</h3>
                            </div>
                            <div className='description'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi!</p>
                            </div>
                        </div>
                        <div className='action_button'>
                            <div className="prix">
                                <p><span>4 000 FCFA</span>/450</p>
                            </div>
                            <div className='panier'>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                {/* </SwiperSlide> */}
            {/* </Carousel> */}
            ...
            </Swiper>
            </div>
        </>
    );
};

export default Cards;
