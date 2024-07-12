import React from 'react'
import { useSwiper } from 'swiper/react'
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export default function NavigationBtn() {

    const swiper = useSwiper()

    return (
        <div className="plat-fleche">
            <button 
                onClick={() => swiper.slidePrev()}
            >
                <BsArrowLeftCircle size={30} color='orange' />
            </button>
            <button 
                onClick={() => swiper.slideNext()}
            >
                <BsArrowRightCircle size={30} />    
            </button>
        </div>
    )
}
