import React, { useContext } from 'react';
import thumbnail from '../../images/thumbnail.png'
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
                     Oi!
                    <br/>
                        Sou o <span className="main-color">{name || 'Vitor'}</span>,
                    <br/>
                    
                    {`desenvolvedor front-end` || about}
                </h2>
                </Fade>
                <Fade bottom duration={1500}>
                <Link className="btn btn-primary" smooth duration={1000} to="about">MAIS INFO</Link>
                </Fade>
                <img className="thumbnail" src={thumbnail} alt="Thumbnail"/>
            </div>
        </div>
    )
}

export default Hero;