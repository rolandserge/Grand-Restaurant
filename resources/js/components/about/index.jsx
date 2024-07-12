import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import AboutModal from './aboutModal';

export default function About() {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div className='cuisinier-container' name="about">
            <div className='cuisinier-image'>
                <img src= "/assets/chef1.jpg" alt="" />
            </div>
            <div className='cuisinier-infos'>
                <div className='infos-titre'>
                    <h3>Bienvenue à Grand. Nous Offrons une Variété de Cuisines</h3>
                </div>
                <div className='description'>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste tempora illo eligendi nobis id? Repellat necessitatibus doloribus optio minima quae modi, consequuntur, placeat suscipit ut vitae dolore fugiat assumenda nobis!
                    Delectus neque deserunt odio veritatis nam
                    </p>
                </div>
                <div className='about-action'>
                    <div className='about-div'>
                        <button 
                            className='about'
                            onClick={open}
                        >
                            About Us
                        </button>
                    </div>
                    <div className='about-image'>
                        <img src="/assets/tomatoes.png" alt="" />
                    </div>
                </div>
            </div>
            <AboutModal
                aboutOpened={opened}
                aboutClose={close}
            />
        </div>
    );
};
