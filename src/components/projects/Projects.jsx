import React, { useContext } from 'react';
import DataContext from '../context/context'
import Fade from 'react-reveal/Fade';

const Projects = () => {
   const { projects } = useContext(DataContext);
    
    return(
    <div className="project-session">
        {
            projects.map(project => (
                <div className="project-container">
                    <Fade left duration={1000}>
                    <img className="project-img" src={project.img} alt={project.title || 'source'} />
                    </Fade>
                    <div className="text-container">
                        <Fade right duration={1000}>
                        <h1>{project.title || 'title'}</h1>
                        <p className="project-description">{project.description || `project's description`}</p>
                        <p>Ferramentas utilizadas: {project.languages || 'none'}</p>
                        <button className="btn live-demo"><a target="_blank" rel="noreferrer" href={project.liveDemo}>Live Demo</a></button>
                        <button className="btn source-code"><a rel="noreferrer" target="_blank" href={project.sourceCode}>Source Code</a></button>
                        </Fade>
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default Projects;