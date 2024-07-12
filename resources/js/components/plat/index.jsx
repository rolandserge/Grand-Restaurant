import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import { EffectFade } from "swiper/modules";
import NavigationBtn from "@/components/navigationBtn"
import Card from "./card";

import 'swiper/css/effect-fade';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { getCategories } from "../../utils";

export default function Plat({ plats }) {

    const platsName = [
        "Special",
        "Ivoirienne",
        "Cameroonaise",
        "Congolaise",
        "Senegalaise",
        "Marocaine",
    ];
    
    const [categories, setCategories] = useState([])
    const [value, setValue] = useState()
    const [name, setName] = useState()

    const FilterData = (index, name) => {

        setValue(index)
        setName(name)

        if(name === "Special") {
            const filter = plats.filter((x) => x.categorie != "Marocaine")
            setData(filter)
        } else {
            const filter = plats.filter((x) => x.categorie === name)
            setData(filter)
        }
    }
    
    const ChangeClasse = (index) => {
        if(index == value) {
            return "active"
       }
       else {
            return ""
       }
    }

    const fetchCategories = async() => {

        const result = await getCategories()

        setCategories(result)
    }

    useEffect(() => {

        fetchCategories()

    }, [])

    return (
        <div name="menu" className="container-plat">
            <div className="plat-intro">
                <h3>Notre pack de menus que nous faisons toujours !</h3>
            </div>
            <div className="plat-liste">
                <div className="button-plat">
                    {
                        categories?.map((item, index) => {
                            return (
                                <button 
                                    key={index} 
                                    className={ChangeClasse(index)} 
                                    onClick={() => FilterData(index, item.nom)}
                                >
                                    {item.nom}
                                </button>
                            )
                        })
                    }
                </div>
                <Swiper
                    modules={[EffectFade]}
                    slidesPerView={1}
                    spaceBetween={10}
                    className="plat-infos"
                    breakpoints={{
                         // when window width is >= 320px
                        // when window width is >= 480px
                        480: {
                            slidesPerView: 1,
                            spaceBetween: 10
                        },
                        // when window width is >= 640px
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 10
                        },
                        900: {
                            slidesPerView: 2.5,
                            spaceBetween: 10
                            // min-width: 900
                        },
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 10
                        }
                    }}
                >   
                    <div className="plat-btn-navigation">
                        <NavigationBtn />
                    </div>

                    { plats
                        ?.filter((x) => name ? name === "Spécial" ? x.categorie.nom != "special" : x.categorie.nom === name : x.categorie.nom != "special")
                        .map((plat, index) => (
                        <SwiperSlide 
                            key={index}
                            className="plat-card"
                        >
                            <Card item={plat} />
                        </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};