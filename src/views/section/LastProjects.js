import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';

const LastProjects = () => {
  const context = useContext(AppContext)

  return (
    <div className={"s-lastProjects"}>
      <div className={'container'}>
        <h3 className='s-lastProjects-title ui-h1 is-medium'><hr></hr>Our last works</h3>
        <ul className='s-lastProjects-list'>
          {context && context.map((project) => (
            <li className="s-lastProjects-item" key={project.id}>
              <div className="s-lastProjects-bg"></div>
              <div className="s-lastProjects-infos">
                <Link to={`/work-${project.id}`} className="s-lastProjects-itemTitle ui-h1">
                    <h4><hr></hr>{project.attributes.Title}</h4>
                </Link>
                <Link to={'/'} className="s-lastProjects-imgWrapper">
                  <Desktop />
                </Link>
              </div>

              <div className="s-lastProjects-description">
                <p>His cognitis Gallus ut serpens adpetitus telo vel saxo iamque spes extremas opperiens et succurrens saluti suae quavis ratione colligi omnes iussit armatos et cum starent attoniti, districta dentium acie stridens adeste inquit viri fortes mihi periclitanti vobiscum.</p>
                <Link className='ui-button' to={`/work-${project.id}`}>Discover</Link>
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
