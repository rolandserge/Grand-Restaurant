import React, { useState } from 'react'
import { Modal } from '@mantine/core'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../context/authContext';
import axios from 'axios';

export default function AuthModal({ 
    authOpened, authClose, authLabel, 
    authDescription, authType, labelButton, registerModal, loginModal
}) {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loading, setLoading] = useState(false)
    const { setSession, setTokenHandler } = useAuth()

    const handleTransition = () => {
        authClose()
        if(authType === "sign-up") {
            loginModal()
        } else {
            registerModal()
        }
    }
                
    const onSubmit = async(data) => {
        
        setLoading(true);
        const { name, email, password } = data

        try {
            if(authType === "sign-up") {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    axios.post('/api/register', {
                        name,
                        email,
                        password
                    }).then(res => {
                        if(res.status == 200) {
                            setSession(res.data.user)
                            setTokenHandler()
                            authClose()
                        }
                        console.log(res)
                    }).finally(() => (
                        setLoading(false)
                    ))
                });
            }
            if(authType === "sign-in") {
                axios.get('/sanctum/csrf-cookie').then(response => {
                    // Login...
                    axios.post('/api/login', {
                        email,
                        password
                    }).then(res => {
                        if(res.status == 200) {
                            setSession(res.data.user)
                            setTokenHandler()
                            authClose()
                            // document.querySelector("form")
                        }
                        console.log(res)
                    }).finally(() => (
                        setLoading(false)
                    )
                    )
                });
            }
            
        } catch (error) {
            console.log(error)
        }
    } 

    return (
        <Modal 
            opened={authOpened} 
            onClose={authClose} 
            title="AUTHENTICATION"
            centered
        >
            <div className='auth-container'>
                <p className='label'>{authLabel}</p>
                <p className='description'>{authDescription}</p>
                <form onSubmit={handleSubmit(onSubmit)} id='form'>
                    {authType === "sign-up" && 
                        <div>
                            <label htmlFor="">Entrer votre nom</label>
                            <input 
                                placeholder='Ex : John Doe'
                                {...register("name", { required: true })}
                            />
                        </div>
                    }
                    <div>
                        <label htmlFor="">Enter votre adresse email</label>
                        <input 
                            type="email" 
                            placeholder='Ex : johndoe@example.ci'
                            {...register("email", { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="">Entrer votre mot de passe</label>
                        <input 
                            type="password" 
                            placeholder='Ex : *********'
                            {...register("password", { required: true })}
                        />
                    </div>
                        
                    <button 
                        type='submit'
                        disabled={loading}
                        style={{ background: loading && "#f1f1f1", color: loading && "black", cursor: loading && "not-allowed" }}
                    >
                        {labelButton}
                    </button>
                </form>

                <div className='footer-form'>
                    <p>
                        {authType === "sign-in" ? 
                            <>
                                Vous n'avez pas de compte ! <span onClick={handleTransition}>S'incrire</span>  
                            </> 
                        :   <>
                                Vous avez deja un compte ! <span onClick={handleTransition}>Se connecter</span>
                            </>
                        }
                    </p>
                </div>
            </div>
        </Modal>
    )
}
