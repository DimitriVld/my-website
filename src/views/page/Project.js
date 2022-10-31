import React, { useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import AppContext from '../../context/AppContext';

const Project = () => {
  let { projectId } = useParams();
  const context = useContext(AppContext);
  const project = context?.find(element => element.id == projectId);

  return (
    <div className={'p-project'}>
      <div className='container'>
        <div className='p-project-header'>
          <p className='p-project-type'>type</p>
          <h3 className='p-project-title ui-h1 is-medium'>title</h3>
        </div>

        <div className='p-project-content'>
          <div className='p-project-infos'>
            <p className='p-project-description'>content</p>
            <div className='p-project-technos'>
              <p>Techno we used</p>
              <ul>
                {/* {work.techno.map((element, index) => {
                    return <li key={index}>{element.name}</li>
                })} */}
              </ul>
            </div>
          </div>

          <div className='p-project-imgWrapper'>
            img
          </div>
        </div>

        <Link className='p-project-link' to={'/'}>
          Go to the website
          arrow
        </Link>
      </div>
    </div>
  );
};

export default Project;