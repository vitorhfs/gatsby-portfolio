import React from 'react';
import Hero from './hero/Hero';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App (){   
    return(
        <>
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
}

export default App;