import React, { useState, useEffect } from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

import { DataProvider } from './context/context';

import { heroData, aboutData, projectsData, footerData, contactData } from '../mock/data';

function App (){
    const [ hero, setHero ] = useState({});
    const [ about, setAbout ] = useState({});
    const [ projects, setProjects ] = useState([]);
    const [ contact, setContact ] = useState({});
    const [ footer, setFooter ] = useState({});

    useEffect(() => {
        setHero({...heroData});
        setAbout({...aboutData});
        setProjects([...projectsData]);
        setContact({...contactData});
        setFooter({...footerData}); 
    }, []);

    

    return(
        <DataProvider value={{ hero, about, projects, contact, footer }}>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </DataProvider>
    )
}

export default App;