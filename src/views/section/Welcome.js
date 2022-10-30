import React from 'react';
import Logo from '../icon/logo.svggit';

const WelcomeSection = (props) => {
    return (
        <div className={`s-welcome height-100vh home ${props.services ? 'services' : ''} ${props.about ? 'about' : ''}`}>
            <div className="container-dft">
                <img className="s-welcome-logo" src="{Logo}" alt="logo" />
                <h1 className='s-welcome-title ui-h1 is-big'>{props.title}</h1>
                <p className='s-welcome-subtitle ui-h1 is-medium'>{props.subTitle}</p>
                <p className="s-welcome-scroll">Scroll</p>
            </div>
        </div>
    )
}

export default WelcomeSection;
