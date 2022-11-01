import React, { useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';
import ArrowRightIcon from '../icon/ArrowRight';

const Project = () => {
  let { projectId } = useParams();
  const context = useContext(AppContext);
  const project = context?.find(element => element.id == projectId);

  return (
    <div className={'p-project'}>
      <div className='container'>
        <div className='p-project-header'>
          <p className='p-project-type'>{project?.attributes.Type}</p>
          <h3 className='p-project-title ui-h1 is-medium'>{project?.attributes.Title}</h3>
        </div>

        <div className='p-project-content'>
          <div className='p-project-infos'>
            <p className='p-project-description'>{project?.attributes.Description}</p>
            <div className='p-project-technos'>
              <p>Techno we used</p>
              <ul>
                {project?.attributes.Techno.map((element, index) => {
                    return <li key={index}>{element.Text}</li>
                })}
              </ul>
            </div>
          </div>

          <div className='p-project-imgWrapper'>
            <Desktop img={project?.attributes.Preview.data.attributes.url}/>
          </div>
        </div>

        <Link className='p-project-link' to={project?.attributes.Link}>
          <span>Go to the website</span>
          <ArrowRightIcon />
        </Link>
      </div>
    </div>
  );
};

export default Project;