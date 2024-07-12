import React from 'react'
import { Modal } from '@mantine/core'
import { Link } from 'react-scroll'

export default function BasketVideModal({ videOpened, videClose}) {

    return (
        <Modal 
            opened={videOpened} 
            onClose={videClose} 
            title="Panier vide"
            centered
        >
            <div className='basket-vide-container'>
                <img
                    src='/assets/vide.png'
                    alt='panier vide'
                    width={200} height={200}
                />
                <p>Votre panier est vide...</p>
                <div onClick={videClose}>
                    <Link to='menu' className='menu'>Voir les achats</Link>
                </div>
            </div>
        </Modal>
    )
}
