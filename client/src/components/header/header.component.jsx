import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import Logo from '../../assets/logo.png'

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <img className='logo' src={Logo} alt="Logo" />
        </Link>
    </div>
)

export default Header;
