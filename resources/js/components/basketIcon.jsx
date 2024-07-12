import React from 'react'
import { BsHandbagFill } from "react-icons/bs";
import BasketModal from './panier/basketModal';
import { useDisclosure } from '@mantine/hooks';
import BasketVideModal from './panier/basketVideModal';
import { useCart } from 'react-use-cart';


export default function BasketIcon({ stylesContainer}) {

    const [opened, { open, close }] = useDisclosure(false);
    const { isEmpty, totalItems  } = useCart()

    return (
        <>
            <div 
                className="container-basket-icon" 
                style={stylesContainer}
                onClick={open}
            >
                <BsHandbagFill size={24} className="basket" />
                <span>{totalItems}</span>
            </div>

            {isEmpty ?
                <BasketVideModal
                    videOpened={opened}
                    videClose={close}
                />
            :
                <BasketModal
                    basketOpened={opened}
                    basketClose={close}
                />
            }
        </>
    )
}
