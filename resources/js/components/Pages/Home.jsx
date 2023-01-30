import React from 'react';
import Header from '../Composant/Header';
import "../../Styles/Home.css"
import Acceuil from "../Composant/Acceuil"
import Titre from '../Composant/Titre';
import Cards from '../Composant/Cards';
import Cuisinier from "../Composant/Cuisinier"
import Plat from '../Composant/Plat';
import Temoignage from '../Composant/Temoignage';
import Cuisiniere from '../Composant/Cuisiniere';
import Reservation from '../Composant/Reservation';
import Contact from '../Composant/Contact';
import Footer from '../Composant/Footer';

const Home = () => {
    return (
        <div>
            <header>
                <div>
                    <Header />
                </div>
                <div>
                    <Acceuil />
                </div>
            </header>
            <main>
                <section>
                    <Titre />
                    <Cards />
                </section>
                <section>
                    <Cuisinier />
                </section>
                <section>
                    <Plat />
                </section>
                <section>
                    <Temoignage />
                </section>
                <section>
                    <Cuisiniere />
                </section>
                <section>
                    <Reservation />
                </section>
                <section>
                    <Contact />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Home;
