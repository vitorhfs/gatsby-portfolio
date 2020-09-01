import React, { useContext } from 'react';
import DataContext from '../context/context';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    const { contact } = useContext(DataContext);    
    const { text, link } = contact;

    return (
        <div className="contact-container">
            <Fade bottom duration={1000}>
            <h1>CONTACT</h1>
            <p>{text}</p>
            <button className="btn btn-contact"><a href={link}>Mail me</a></button>
            </Fade>
        </div>
    )
};

export default Contact;