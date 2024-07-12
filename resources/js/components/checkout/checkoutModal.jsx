import React, { useEffect, useState } from 'react'
import { Modal } from '@mantine/core'
import { useCart } from 'react-use-cart'
import { useForm } from 'react-hook-form'

export default function CheckoutModal({ checkoutOpened, checkoutClose}) {

    const [isSucess, setIsSucess] = useState(false)
    const { items, cartTotal } = useCart()
    const [count, setCount] = useState(5)
    const { register, formState: { errors }, handleSubmit } = useForm();

    useEffect(() => {
        if(isSucess) {
            const timer = setTimeout(() => {
                if(count > 1) {
                    setCount(count - 1)
                }
            }, 2000)
            // clear timer
            return () => clearTimeout(timer)
        }
    })

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Modal 
            opened={checkoutOpened} 
            onClose={checkoutClose} 
            title={!isSucess && "ADRESSE DE LIVRAISON"} 
            size="xl" centered
        >
            { isSucess ? 
                <div className='finish-modal-container'>
                    <p>
                        Nous vous remercions, Votre commandé a été passée avec succes
                    </p>
                    <img
                        src='/assets/terminer.gif'
                        alt='image pour valider la commande'
                        width={150} height={150}
                    />
                    <div>Cette fenetre va se fermer dans <span>{count}</span> secondes</div>
                </div>
            : 
                <form className='container-shipping' onSubmit={handleSubmit(onSubmit)}>
                        <div className='adresse-info-card'>
                            <div className='adresse'>
                                <input 
                                    placeholder='Entrer votre nom' 
                                    {...register("nom", { required: true })}
                                />
                                <input 
                                    placeholder='Entrer votre prenom'
                                    {...register("prenom", { required: true })}
                                />
                            </div>
                            <div className='adresse'>
                                <input 
                                    type="number" 
                                    placeholder='Entrer votre numero'
                                    {...register("numero", {required: true, maxLength: 10, minLength: 10 })}
                                    aria-invalid={errors.numero ? "true" : "false"} 
                                />
                                <input 
                                    type="email" 
                                    placeholder='Entre votre email'
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className='commune'>
                                <select 
                                    {...register("commune", { required: "Ce champ est obligatoire *" })}
                                    aria-invalid={errors.commune ? "true" : "false"}
                                >
                                    <option value="">Choisissez votre commune</option>
                                    <option value="Plateau">Plateau</option>
                                    <option value="Adjame">Adjamé</option>
                                    <option value="Koumassi">Koumassi</option>
                                    <option value="Marcory">Marcory</option>
                                    <option value="Port-Bouet">Port-Bouet</option>
                                    <option value="Treichville">Treichville</option>
                                    <option value="Yopougon">Yopougon</option>
                                    <option value="Abobo">Abobo</option>
                                    <option value="Cocody">Cocody</option>
                                    <option value="Bassam">Bassam</option>
                                    <option value="Attecoube">Attecoubé</option>
                                </select>
                                <p>{errors.commune && errors.commune.type}</p>
                            </div>
                            <div className='livraison'>
                                <textarea 
                                    placeholder='Entrer votre adresse de livraison'
                                    {...register("adresse", { required: true })}
                                >
                                </textarea>
                            </div>
                        </div>
                        <div className='order-card'>
                            <div className='order-info-card'>
                                <p className='title'>Votre commande</p>
                                <div className='basket-card'>
                                    {items.map(item => (
                                        <div key={item.id}>
                                            <p>{item.name} * {item.quantity}</p>
                                            <p>{(item.price * item.quantity).toLocaleString()} F</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='total-card'>
                                    <p>TOTAL</p>
                                    <p>{cartTotal.toLocaleString()} FCFA</p>
                                </div>
                            </div>
                            <div className='order-button-card'>
                                <button type='submit'>Commander</button>
                            </div>
                        </div>
                    </form>
            }
        </Modal>
    )
}
