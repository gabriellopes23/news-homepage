import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/logo.svg';
import MenuIcon from '../assets/images/icon-menu.svg';
import CloseIcon from '../assets/images/icon-menu-close.svg';
import './Header.css';

export default () => {
    const [isMobile, setIsMobile] = useState(false)
    return (
        <div className="page">
            <div className='logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <nav className='navBar'>
                <ul className={isMobile ? 'mobile-itens' : 'itens'}>
                    <li className='home'>
                        <a href="">Home</a>
                    </li>
                    <li className='new1'>
                        <a href="">New</a>
                    </li>
                    <li className='popular'>
                        <a href="">Popular</a>
                    </li>
                    <li className='trending'>
                        <a href="">Trending</a>
                    </li>
                    <li className='categories'>
                        <a href="">Categories</a>
                    </li>
                </ul>
                <button className='mobile-icon' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <img src={CloseIcon} /> : <img src={MenuIcon} />}
                </button>
            </nav>
        </div>
    );
};