import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div className={'c-menu'} >
            <nav className='c-menu-nav'>
                    <Link to='/' className={'c-menu-link'}>Homepage</Link>
                    <Link to='/works' className={'c-menu-link'}>Our works</Link>
                    <Link to='/services' className={'c-menu-link'}>Our Services</Link>
                    <Link to='/about-us' className={'c-menu-link'}>About Us</Link>
                    <Link to='/contact' className={'c-menu-link'}>Contact us</Link>
                </nav>
        </div>
    )
}

export default Menu;