import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Plat.css";
import Fleche from "../../Assets/fleche.png";
import Pizza from "../../Assets/pizza1.jpg";
import Viande from "../../Assets/viande.jpg"
import Etoile from "../../Assets/etoile.png";
import Pizza1 from "../../Assets/pizza2.jpg";
import Pizza2 from "../../Assets/pizza3.jpg";
import Feuille from "../../Assets/feuille.jpg"
import Plat1 from "../../Assets/plat1.jpg"
import Plat2 from "../../Assets/plat2.jpg"
import Plat3 from "../../Assets/plat3.jpg"
import Plat4 from "../../Assets/plat4.jpg"
import Plat5 from "../../Assets/plat5.jpg"
import Plat6 from "../../Assets/plat6.jpg"
import Plat7 from "../../Assets/plat7.jpg"
import Plat8 from "../../Assets/plat8.jpg"
import Plat9 from "../../Assets/plat9.jpg"

const Plat = () => {

    const platsName = [
        "Special",
        "Ivoirienne",
        "Cameroonaise",
        "Congolaise",
        "Senegalaise",
        "Marocaine",
    ];
    const plats = [
        {
            name : "Cameroonais plat 3",
            prix : 2800,
            image : Plat1,
            categorie : "Cameroonaise"
        },
        {
            name : "Porc au four sauté",
            prix : 2000,
            image : Pizza,
            categorie : "Ivoirienne"
        },
        {
            name : "Senegalais plat 3",
            prix : 2500,
            image : Plat7,
            categorie : "Senegalaise"
        },
        {
            name : "Viande harché",
            prix : 9000,
            image : Viande,
            categorie : "Ivoirienne"
        },
        {
            name : "Spaghetti",
            prix : 5500,
            image : Pizza2,
            categorie : "Ivoirienne"
        },
        {
            name : "Cameroonais plat 1",
            prix : 7100,
            image : Pizza1,
            categorie : "Cameroonaise"
        },
        {
            name : "Cameroonais plat 2",
            prix : 3200,
            image : Feuille,
            categorie : "Cameroonaise"
        },
        {
            name : "Congolais plat 1",
            prix : 1500,
            image : Plat2,
            categorie : "Congolaise"
        },
        {
            name : "Congolais plat 2",
            prix : 4000,
            image : Plat3,
            categorie : "Congolaise"
        },
        {
            name : "Congolais plat 3",
            prix : 3500,
            image : Plat4,
            categorie : "Congolaise"
        },
        {
            name : "Senegalais plat 1",
            prix : 7000,
            image : Plat5,
            categorie : "Senegalaise"
        },
        {
            name : "Senegalais plat 2",
            prix : 5000,
            image : Plat6,
            categorie : "Senegalaise"
        },
        {
            name : "Marocain plat 1",
            prix : 1000,
            image : Plat8,
            categorie : "Marocaine"
        },
        {
            name : "Marocain pat 2",
            prix : 3000,
            image : Plat9,
            categorie : "Marocaine"
        },
        {
            name : "Marocain pat 3",
            prix : 10000,
            image : Plat1,
            categorie : "Marocaine"
        },
    ]
    const [data, setData] = useState(plats)
    const [value, setValue] = useState()

    const FilterData = (index, name) => {

        setValue(index)
        if(name === "Special") {
            const filter = plats.filter((x) => x.categorie != "Marocaine")
            setData(filter)
        } else {

            const filter = plats.filter((x) => x.categorie === name)
            setData(filter)
        }
    }
    const ChangeClasse = (index) => {

        if(index ==  value) {

            return "active"
       }
       else {
            return ""
       }
    }
    console.log(data)
    return (
        <div className="container_plat">
            <div className="plat_intro">
                <div className="titre_plat">
                    <h3>Notre Pack de Menus Qui Fait Foujours</h3>
                </div>
                <div className="plat_fleche">
                    <div>
                        <Link className="lien">
                            <img src={Fleche} alt="" />
                        </Link>
                    </div>
                    <div className="active">
                        <Link className="lien">
                            <img src={Fleche} className="droite" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="plat_liste">
                <div className="button_plat">
                    {
                        platsName.map((plat, index) => {
                            return (
                                <button className={ChangeClasse(index)} key={index} onClick={() => FilterData(index, plat)}>{plat}</button>
                            )
                        })
                    }
                </div>
                <div className="plat_infos">
                    {
                        data.slice(0, 3).map((plat, index) => {

                            return (
                                <div className="plat_card" key={index}>
                                    <div className="plat_image">
                                        <img src={`${plat.image}`} alt={plat.name} />
                                    </div>
                                    <div className="plat_infos_card">
                                        <div className="plat_etoile">
                                            <img src={Etoile} alt="" />
                                            <img src={Etoile} alt="" />
                                            <img src={Etoile} alt="" />
                                            <img src={Etoile} alt="" />
                                            <img src={Etoile} alt="" />
                                        </div>
                                        <div className="plat_order">
                                            <p>{plat.name}</p>
                                            <h3>{(plat.prix).toLocaleString()} FCFA</h3>
                                        </div>
                                        <div className="description">
                                            <p>
                                                Lorem, ipsum dolor sit amet consectetur
                                                adipisicing elit. Obcaecati necessitatibus
                                            </p>
                                        </div>
                                        <div className="order_button">
                                            <Link to="" className="order">
                                                Order Now
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default Plat;
