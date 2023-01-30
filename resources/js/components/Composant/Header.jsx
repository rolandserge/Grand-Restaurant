import React from 'react';
import { Link } from 'react-router-dom';
import "../../Styles/Header.css"

const Header = () => {
    return (
        <div className='container_header'>
            <div className="logo">
                <p className='logo_grand'>grand</p>
                <p className='logo_restaurant'>Restaurant</p>
            </div>
            <div className='header_link'>
                <Link to="" className='lien'>Home</Link>
                <Link to="" className='lien'>Menu</Link>
                <Link to="" className='lien'>Reservation</Link>
                <Link to="" className='lien'>Pages</Link>
                <Link to="#contact" className='lien'>Contact</Link>
            </div>
            <div className='header_auth'>
                <Link to="" className='search'>Q</Link>
                <Link to={""} className='login'>Se connecter</Link>
                <Link to={""} className="register">S'inscrire</Link>
            </div>
        </div>
    );
};

export default Header;
