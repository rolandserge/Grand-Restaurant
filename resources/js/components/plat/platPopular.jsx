import React from 'react';
import Card from "./card"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { plats } from "@/data"
import NavigationBtn from '../navigationBtn';

import 'swiper/css';;
import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';


export default function PlatPopular() {

    return (
        <div>
            
            <Swiper
                modules={[EffectFade, Autoplay]}
                slidesPerView={1}
                spaceBetween={15}
                className="cards"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 15
                        },
                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 15
                        },
                        960: {
                            slidesPerView: 3,
                            spaceBetween: 15
                            // min-width: 900
                        },
                        1200: {
                            slidesPerView: 3.5,
                            spaceBetween: 10
                            // min-width: 600
                        }
                    }}
            >   
                <div className='container-titre'>
                    <div className='titre-div'>
                        <h1>Plats les plus populaires</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, sequi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, harum. Lorem, ipsum.
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </p>
                    </div>
                    <NavigationBtn />
                </div>
                <div>
                    {plats?.slice(0, 5).map((item, index) => (
                        <SwiperSlide 
                            key={index}
                            className='card'
                        >
                            <Card item={item} />
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};

