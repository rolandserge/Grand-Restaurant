import React from 'react'
import { Drawer } from '@mantine/core';
import { IoCloseOutline } from "react-icons/io5";
import { TbSquareMinusFilled } from "react-icons/tb";
import { FaSquarePlus } from "react-icons/fa6";
import CheckoutModal from '../checkout/checkoutModal';
import { useDisclosure } from '@mantine/hooks';
import { useCart } from 'react-use-cart';

export default function BasketModal({ basketOpened, basketClose}) {

    const [opened, { open, close }] = useDisclosure(false);
    const { items, cartTotal, removeItem, updateItemQuantity } = useCart()

    const handleTransition = () => {
        basketClose()
        open()
    }

    return (
        <>
            <Drawer 
                opened={basketOpened} 
                onClose={basketClose} 
                position='right'
                title="Votre panier"
            >
                <div className='container-basket'>
                    {items.map(item => (
                        <div className='basket-card' key={item.id}>
                            <div className='card-one'>
                                <div className='plat-image'>
                                    <img 
                                        src={item.image} 
                                        alt='plat image card'
                                    />
                                </div>
                                <div className='plat-info'>
                                    <div className='header'>
                                        <p>{item.name}</p>
                                        <IoCloseOutline 
                                            color="#FBD146" 
                                            className='delete' 
                                            onClick={() => removeItem(item.id)}
                                        />
                                    </div>
                                    <p className='specialite'>{item.categorie}</p>
                                    <div className='body'>
                                        <div className='quantity'>
                                            <TbSquareMinusFilled 
                                                color='#FBD146' size={22} 
                                                style={{ cursor: "pointer"}}
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            />
                                            <span>{item.quantity}</span>
                                            <FaSquarePlus 
                                                color='#FBD146' size={22} 
                                                style={{ cursor: "pointer"}} 
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            />
                                        </div>
                                        <div className='prix'>
                                            {item.price.toLocaleString()} FCFA
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-two'>
                                <p>Garnitures : </p>
                                {item?.garnitures?.map(item => (
                                    <span key={item.id}>{item.value}</span>
                                ))}
                                {item?.supplements?.map(item => (
                                    <span key={item.id}>{item.value}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className='basket-action'>
                        <div>
                            <p>Total</p>
                            <p>{cartTotal.toLocaleString()} FCFA</p>
                        </div>
                        <button onClick={handleTransition}>Commander</button>
                    </div>
                </div>
            </Drawer>

            <CheckoutModal
                checkoutOpened={opened}
                checkoutClose={close}
            />
        </>
    )
}
