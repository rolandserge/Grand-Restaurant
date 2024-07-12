import React from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import { CiMenuBurger } from "react-icons/ci";
import { navLink } from '../../constant';
import { Link } from 'react-scroll';
import { PiUserPlus, PiUserCircleLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Avatar } from '@mantine/core';

export default function MobileNav({ openLogin, openRegister }) {

    const [opened, { open, close }] = useDisclosure(false);
    const { authState, user, logout } = useAuth()

    const handleTransition = (type) => {
        close()
        if(type === "login") {
            openLogin()
        } else {
            openRegister()
        }
    }

    const handleLogout = async() => {
        try {
            await axios.post('/api/logout')
            .then(res => {
                if(res.status == 200) {
                    toast.success("Deconnexion avec success !")
                    logout()
                } else if(res.status == 401){
                    toast.error("Votre session a expiré, veillez vous reconnecter")
                    logout()
                } else {
                    console.log(res)
                }
            })
        } catch (error) {
            if(error.response.status == 401) {
                toast.error("Votre session a expirée ! veillez vous connectez")
                logout()
            }
            console.log(error)
        }
    }

    return (
        <>
            <div className="logo">
                <p className='logo-grand'>grand</p>
                <p className='logo-restaurant'>Restaurant</p>
            </div>
            <div 
                className='burger-card'
                onClick={open}
            >
                <CiMenuBurger 
                    size={25} 
                    className='burger' 
                />
            </div>

            <Drawer
                opened={opened}
                onClose={close}
                overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
            >   
                <div className="logo" onClick={close}>
                    <p className='logo-grand'>grand</p>
                    <p className='logo-restaurant'>Restaurant</p>
                </div>
                <div className='nav-card'>
                    <div className='items'>
                        {navLink.map(nav => {
                            const Icon = nav.Icon
                            return (
                                <Link 
                                    className='card'
                                    key={nav.id}
                                    to={nav.section}
                                    onClick={close}
                                >
                                    <Icon className='icon' />
                                    <p className='nav-item'>{nav.name}</p>
                                </Link>
                            )
                        })}
                    </div>
                    { authState.authenticated ? (
                        <div className='auth-section'>
                            <Avatar src="/assets/user.jpeg" alt="it's me" />
                            <div className='data'>
                                <div>
                                    <p>{user.name}</p>
                                    <span>{user.email}</span>
                                </div>
                                <button onClick={() => handleLogout()}>
                                    <CiLogout className='icon' />
                                    Déconnexion
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className='connexion-auth'>
                            <button onClick={() => handleTransition('register')}>
                                <PiUserPlus className="icon" />
                                S'inscrire
                            </button>
                            <button 
                                onClick={() => handleTransition('login')}
                                className='login'
                            >
                                <PiUserCircleLight className="icon" />
                                Se connecter
                            </button>
                        </div>
                    )}
                </div>
            </Drawer>
        </>
    )
}
