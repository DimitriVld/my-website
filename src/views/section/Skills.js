import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import { textReveal, titleReveal } from '../../super/TextReveal';

const Skills = () => {
  const {t} = useTranslation('common');
  const [technos, setTechnos] = useState(null);

  useEffect(() => {
    titleReveal('.js-s-skills', '.s-skills .js-textReveal-text span');
    textReveal('.js-s-skills', '.js-s-skills-text');

    axios
      .get(`${process.env.REACT_APP_API_URL}/technos?populate=*`)
      .then((response) => setTechnos(response.data.data))
      .catch((error) => {return ;})
      .finally(() => {return ;});
  }, []);
  

  return (
    <div className={'s-skills js-s-skills'}>
      <div className='container'>
        <div className="bg"></div>
        <div className='description'>
          <h3 className='s-skills-title ui-h1 is-medium js-textReveal-text' data-text={t('section.skills.title')}>
            <hr></hr>
            <span>{t('section.skills.title')}</span>
          </h3>
          <p className='js-s-skills-text'>{t('section.skills.text')}</p>
        </div>

        <ul className='icons js-s-skills-text'>
          {technos && technos.map((techno, index) => (
            <li key={index} className='icon'>
              <img src={techno.attributes.Logo.data.attributes.url} alt="image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
);
}

export default Skills;
