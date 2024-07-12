import React, { useState } from 'react'
import { Modal } from '@mantine/core'
import { IoMdCheckmark } from 'react-icons/io'
import toast from 'react-hot-toast'
import { useCart } from 'react-use-cart'

export default function DishModal({ plat, close, opened }) {

    const [supplements, setSupplements] = useState([])
    const [garnitures, setGarnitures] = useState([])
    const { addItem } = useCart()

    const handleCheckBox = (event, id, value) => {

        if (event.target.checked) {
            setSupplements((prevState) => [
                ...prevState,
                { id, value }
            ]);
        } else {
            setSupplements((prevState) => 
                prevState.filter(item => item.id !== id)
            );
        }
    }
    // garniture
    const handleChangeGarniture = (event, id, value) => {
        if(event.target.checked) {
            setGarnitures(prevState => [
                ...prevState,
                { id, value }
            ])
        } else {
            setGarnitures((prevState) => 
                prevState.filter(item => item.id !== id)
            );
        }
    }

    const addItemToBasket = () => {

        if(garnitures.length == 0) {
            toast.error('Veillez choisir au moins un garniture')
        } else {
            const items = {
                ...plat,
                price: plat.prix + (garnitures.length > 1 && 2000 * (garnitures.length - 1)),
                garnitures,
                supplements
            }
            addItem(items)
            setGarnitures([])
            setSupplements([])

            toast.success("Le plat a été ajouté au panier avec success !")
        }
    }

    return (
        <Modal 
            opened={opened} 
            onClose={close} 
            title="Detail du plat" 
            size="xl" centered
        >
        {/* Modal content */}
        <div className='container-modal'>
            <div className='image-plat'>
                <img
                    src={plat.image}
                    alt={plat.nom}
                    className='image-plat'
                />
            </div>
            <div className='container-detail'>
                <div className='info-plat'>
                    <p className='plat'>{plat.nom}</p>
                    <div className='description'>
                        <p>{plat.description}</p>
                    </div>
                    <div className='specia-prix'>
                        <p>{plat.categorie.nom}</p>
                        <h3>{(plat.prix).toLocaleString()} FCFA</h3>
                    </div>
                    <div className='garniture'>
                        <p>Choisir vos garnitures</p>
                        <div className='container-card'>
                            {
                                plat?.garnitures.map(item => (
                                    <label 
                                        htmlFor={item.nom} 
                                        className='card'
                                        key={item.id}
                                    >
                                        <div>
                                            <input 
                                                type="checkbox" 
                                                name={item.nom} 
                                                id={item.nom} 
                                                value={item.nom}
                                                checked={garnitures.some(garItem => garItem.id === item.id)}
                                                className='demo'
                                                onChange={(event) => handleChangeGarniture(event, item.id, item.nom)}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={item.nom}>
                                                {item.nom}
                                            </label>
                                        </div>
                                    </label>
                                ))
                            }
                        </div>
                        <span>Nb : si vous choisissez au dela de 1, 1 garniture est facturé à 2000 FCFA </span>
                    </div>
                    <div className='garniture-gratuit'>
                        <p className='supplement'>Choisir vos garnitures supplementaires</p>
                        <div className='container-card'>
                            {plat?.supplements.map(item => (
                                <div 
                                    className='card' 
                                    style={{border: supplements.some(checkedItem => checkedItem.id === item.id) && "1px solid orange"}}
                                    key={item.id}
                                >
                                    <div className='card-image'>
                                        <img src={item.image} alt={item.nom} />
                                    </div>
                                    <p>{item.nom}</p>
                                    <input 
                                        type="checkbox" 
                                        checked={supplements.some(checkedItem => checkedItem.id === item.id)}
                                        value={item.nom}
                                        onChange={(event) => handleCheckBox(event, item.id, item.name)}
                                    />
                                    <div className='check-icon' style={{ opacity: supplements.some(checkedItem => checkedItem.id === item.id) ? 1 : 0, position: "absolute", top: "0.1em", right: "0.2em"}}>
                                        <IoMdCheckmark size={20} style={{color: "orange"}} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='action-button-modal'>
                    <button onClick={addItemToBasket}>
                        Ajouter au panier pour {(plat.prix + (garnitures.length > 1 && 2000 * (garnitures.length - 1) )).toLocaleString()} FCFA
                    </button>
                </div>
            </div>
        </div>
      </Modal>
    )
}
