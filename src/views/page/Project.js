import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import AppContext from '../../context/AppContext';
import Desktop from '../icon/Desktop';
import ArrowRightIcon from '../icon/ArrowRight';

const Project = () => {
  const [project, setProject] = useState(null);
  const {t} = useTranslation('common');
  let { projectId } = useParams();
  const context = useContext(AppContext);
  
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/projects?populate=*&locale=${t('lang')}`)
      .then((response) => {
        response.data.data.forEach(element => {
          if (element.attributes.projectId == projectId) setProject(element);
          console.log(element)
        });
      })
      .catch(() => {return ;})
      .finally(() => {return ;});
  }, [context]);

  return (
    <div className={'p-project'}>
      {project &&
      <div className='container'>
        <div className='p-project-header'>
          <p className='p-project-type'>{project?.attributes.Type}</p>
          <h3 className='p-project-title ui-h1 is-medium'>{project?.attributes.Title}</h3>
        </div>

        <div className='p-project-content'>
          <div className='p-project-infos'>
            <p className='p-project-description'>{project?.attributes.Description}</p>
            <div className='p-project-technos'>
              <p>{t('page.project.text')}</p>
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

        <a className='p-project-link js-cursor-pointer' href={project?.attributes.Link} target="_blank" rel="noreferrer">
          <span>{t('page.project.link')}</span>
          <ArrowRightIcon />
        </a>
      </div>
      }
    </div>
  );
};

export default Project;