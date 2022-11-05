import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';

const LastProjects = () => {
  const context = useContext(AppContext)

  return (
    <div className={"panel s-lastProjects overflow-s"}>
      <div className={'container'}>
        <h3 className='s-lastProjects-title ui-h1 is-medium'><hr></hr>My last works</h3>
        <ul className='s-lastProjects-list'>
          {context && context.map((project, index) => (
            <li className={`s-lastProjects-item ${index > 2 ? 'display-n' : ''}`} key={index}>
              <div className="s-lastProjects-bg"></div>
              <div className="s-lastProjects-infos">
                <Link to={`/project/${project.id}`} className="s-lastProjects-itemTitle ui-h1">
                    <h4><hr></hr>{project.attributes.Title}</h4>
                </Link>
                <Link to={project.attributes.Link} className="s-lastProjects-imgWrapper">
                  <Desktop img={project.attributes.Preview.data.attributes.url}/>
                </Link>
              </div>

              <div className="s-lastProjects-description">
                <p>{project.attributes.Intro}</p>
                <Link className='ui-button' to={`/project/${project.id}`}>Discover</Link>
              </div>
            </li>
          ))}
        </ul>

        <Link className='s-lastProjects-btn ui-button' to={'/projects'}>View all projects</Link>
      </div>
    </div>
  );
}

export default LastProjects;
