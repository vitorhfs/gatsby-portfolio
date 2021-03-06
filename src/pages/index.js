import React, { useEffect, useState } from "react";
import App from "../components/App";
import { Helmet } from "react-helmet";
import { 
    headData, heroData, aboutData, projectsData, footerData, contactData
} from '../mock/data';
import { DataProvider } from '../components/context/context';


import "../style/main.css";

export default function Home() {
  const { title, lang, description } = headData;
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

  return (
    <>
      <Helmet>
        <meta charset="utf-8"/>
        <title>{title || 'Portfolio'}</title>
        <html lang={lang || 'pt'}/>
        <meta name="description" content={description || 'Bem vindo!'}/>
      </Helmet>
      <DataProvider value={{ hero, about, projects, contact, footer }}>
        <App />
      </DataProvider>
    </>
  )
}
