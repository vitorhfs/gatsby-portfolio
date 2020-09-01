import React, { useContext } from 'react';
import DataContext from '../context/context';
import Fade from 'react-reveal/Fade';

const About = () => {
    const { about } = useContext(DataContext);
    const { image, paragraphOne, paragraphTwo, tecnologies, resume } = about;

    return (
        <div className="about-container" id="about">
            <div className="img-div">
                <Fade bottom duration={1000}>
                    <img className="img about-img" alt='Profile' src={image} />
                </Fade>
            </div>
            <div className="text-div">
            <Fade bottom duration={1000}>
                <p className="about-text">
                    {paragraphOne || 'Plain text'}<br />
                    {paragraphTwo || ''}<br />
                    {tecnologies || ''}
                </p>
                <button className="btn btn-resume"><a href={resume || ''}>Resume</a></button>
            </Fade>
            </div>
        </div>
    )
}

export default About;