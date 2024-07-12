import React, { useEffect, useState } from 'react';
import Header from "@/components/header"
import Footer from "@/components/footer"
import Contact from '@/components/contact';
import PlatPopular from '@/components/plat/platPopular';
import Plat from '@/components/plat';
import Reservation from '@/components/reservation'
import About from "@/components/about"
import Cuisinier from "@/components/cuisinier"
import BasketIcon from '../components/basketIcon';
import { getPlats } from '../utils';

export default function Home() {

    const styles = {
        position: "fixed", 
        border: "1px solid black",
        bottom: "2em",
        right: "2em",
    }

    const [plats, setPlats] = useState([])

    const fetchPlats = async() => {

        const data = await getPlats()

        setPlats(data)
    }

    useEffect(() => {
        fetchPlats()
    }, [])

    return (
        <div className='home-page'>
            <header>
                <Header />
            </header>
            <main>
                <section>
                    <PlatPopular />
                    <About />
                    <Plat plats={plats} />
                    <Cuisinier />
                    <Reservation />
                    <Contact />
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
            <div className='basket-phone'>
                <BasketIcon stylesContainer={styles} />
            </div>
        </div>
    );
};

