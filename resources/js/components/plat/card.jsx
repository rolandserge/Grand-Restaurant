import React from 'react';
import { SlHandbag } from "react-icons/sl";
import { useDisclosure } from '@mantine/hooks';
import DishModal from './dishModal';

export default function Card({ item }) {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <div 
                className='plat-card-image'
                onClick={open}
            >
                <img 
                    src={item.image}
                    alt={item.nom}     
                />
            </div>
            <div className='plat-detail'>            
                <div>
                    <h3 onClick={open}>{item.nom}</h3>
                </div>
                <div className='description' style={{ textAlign: "justify"}}>
                    <p>{item.description.slice(0, 75)}</p>
                </div>
                <div className='action-button'>
                    <div className="prix">
                        <p><span>{(item.prix).toLocaleString()} FCFA</span>/450</p>
                    </div>
                    <div className='panier'>
                        <SlHandbag size={20} fontWeight={900} />
                    </div>
                </div>
            </div>

            <DishModal
                plat={item}
                close={close}
                opened={opened}
            />
        </>
    );
};
