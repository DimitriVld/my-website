import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';
import LogoIcon from '../icon/Logo';

const Projects = () => { 
  const context = useContext(AppContext)

  return (
    <div className='p-projects'>
      <div className='container'>
        <LogoIcon class='p-projects-logo' />
        <h1 className='ui-h1'>My projects</h1>
        <ul className='p-projects-list'>
          {context && context.map((project) => (
            <li className="p-projects-item cursor-p" key={project.id}>
              <Link to={`/project/${project.id}`} className="p-projects-imgWrapper">
                <Desktop img={project.attributes.Preview.data.attributes.url}/>
                <div className='p-projects-itemInfos'>
                  <p className='p-projects-itemTitle'>{project.attributes.Title}</p>
                  <p className='p-projects-itemType'>{project.attributes?.Type}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;