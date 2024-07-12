import React from 'react';

export default function Contact() {

    return (
        <div className='center-contact' name="contact">
            <div className='container-contact'>
                <div className='contact'>
                    <p className='email'>Newsletter</p>
                    <p className='infos'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minima.</p>
                </div>
                <div className='contact_form'>
                    <form action="">
                        <input type="text" placeholder='Entrer votre e-mail svp' />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

