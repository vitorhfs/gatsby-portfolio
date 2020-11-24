import React, { useContext, useEffect } from 'react';
import thumbnail from '../../images/thumbnail.png'
import DataContext from '../context/context';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Hero = () => {
    const { hero } = useContext(DataContext);
    const { name, greeting, call, about } = hero;
 
    return(
        <div className="hero-section">
            <div className="switch-container">
                <p><span><a href="/">PT</a></span> | <span><a href="/en">EN</a></span></p>
            </div>
            <div className="hero-text">
                <Fade left duration={1000}>
                <h2 className="hero-title">
                    {greeting}
                    <br/>
                        {call} <span className="main-color">{name || 'Vitor'}</span>,
                    <br/>
                    
                    {about || `desenvolvedor front-end`}
                </h2>
                </Fade>
                <Fade bottom duration={1500}>
                <Link className="btn btn-primary" smooth duration={1000} to="about">+ INFO</Link>
                </Fade>
                <img className="thumbnail" src={thumbnail} alt="Thumbnail"/>
            </div>
        </div>
    )
}

export default Hero;