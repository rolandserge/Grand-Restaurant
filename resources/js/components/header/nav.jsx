import React from 'react'
import { Link } from 'react-scroll'
import MobileNav from './mobileNav'
import { navLink } from '../../constant'
import BasketIcon from '../basketIcon'
import { useDisclosure } from '@mantine/hooks';
import LoginModal from '../auth/loginModal'
import RegisterModal from '../auth/registerModal'
import { Avatar } from '@mantine/core';
import { useAuth } from '../../context/authContext'
import { Popover } from '@mantine/core';
import { CiLogout, CiUser } from "react-icons/ci";
import toast from 'react-hot-toast'
import axios from 'axios'

export default function Nav() {

    const { authState, logout, user } = useAuth()
    const [isLoginModalOpen, { open: openLoginModal, close: closeLoginModal }] = useDisclosure(false);
    const [isRegisterModalOpen, { open: openRegisterModal, close: closeRegisterModal }] = useDisclosure(false);

    const handleLogout = async() => {
        try {
            await axios.post('/api/logout')
            .then(res => {
                if(res.status == 200) {
                    toast.success("Deconnexion avec success !")
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
            <div className='container-header'>
                <div className="logo">
                    <p className='logo-grand'>grand</p>
                    <p className='logo-restaurant'>Restaurant</p>
                </div>
                <nav>
                    <div className='header-link'>
                        {navLink.map(nav => (
                            <Link 
                                key={nav.id} 
                                smooth={true} 
                                className='lien'
                                to={nav.section}
                            >
                                {nav.name}
                            </Link>

                        ))}
                    </div>
                    <div className='header-auth'>
                        <BasketIcon />
                        { authState.authenticated ? (
                            <Popover 
                                width="auto" 
                                position="bottom" 
                                withArrow shadow="md"
                            >
                                <Popover.Target>
                                    <Avatar 
                                        src="/assets/user.jpeg" 
                                        style={{ cursor: "pointer" }} 
                                        alt="it's me" 
                                    />
                                </Popover.Target>
                                <Popover.Dropdown>
                                    <Avatar 
                                        src="/assets/user.jpeg" 
                                        style={{ cursor: "pointer" }} 
                                        alt="it's me"     
                                    />
                                    <div className='info'>
                                        <div className='data'>
                                            <p>{user.name}</p>
                                            <span>{user.email}</span>
                                        </div>
                                        <div className='action'>
                                            <button>
                                                <CiUser className='icon' />
                                                Mon compte
                                            </button>
                                            <button onClick={() => handleLogout()}>
                                                <CiLogout className='icon' />
                                                Déconnexion
                                            </button>
                                        </div>
                                    </div>
                                </Popover.Dropdown>
                            </Popover>
                        ) : (
                            <>
                                <button className="register" onClick={openRegisterModal}>S'inscrire</button>
                                <button className='login' onClick={openLoginModal}>Se connecter</button>
                            </>
                        )}
                    </div>
                </nav>
                <>
                    <LoginModal
                        authOpened={isLoginModalOpen}
                        authClose={closeLoginModal}
                        authDescription="Veillez vous connectez avant de passer une action sur la plateforme"
                        authType="sign-in"
                        authLabel="Connexion"
                        labelButton="Se connecter"
                        registerModal={openRegisterModal}
                    />
                    <RegisterModal
                        authOpened={isRegisterModalOpen}
                        authClose={closeRegisterModal}
                        authDescription="Veillez creer votre compte avant de passer une action sur la plateforme"
                        authType="sign-up"
                        authLabel="Inscription"
                        labelButton="S'inscrire"
                        loginModal={openLoginModal}
                    />
                </>
            </div>
            {/* Mobile nav bar */}
            <div className='mobile-nav'>
                <MobileNav 
                    openLogin={openLoginModal} 
                    openRegister={openRegisterModal}
                />
            </div>
        </>
    )
}
