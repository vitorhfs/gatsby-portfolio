import React, { useContext } from 'react';
import DataContext from '../context/context';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Hero = function(){
    const { hero } = useContext(DataContext);
    const { name, about } = hero;

    return(
        <div className="hero-section">
            <div className="hero-text">
                <Fade left duration={1000}>
                <h2 className="hero-title">
                     Hi!
                    <br/>
                        I'm <span className="main-color">{name || 'John Doe'}</span>,
                    <br/>
                    
                    {about}
                </h2>
                </Fade>
                <Fade bottom duration={1500}>
                <Link className="btn btn-primary" smooth duration={1000} to="about">SEE MORE</Link>
                </Fade>
            </div>
        </div>
    )
}

export default Hero;