import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import { textReveal, titleReveal } from '../../super/TextReveal';

const Skills = () => {
  const [technos, setTechnos] = useState(null);

  useEffect(() => {
    titleReveal('.js-s-skills', '.s-skills .js-textReveal-text span');
    textReveal('.js-s-skills', '.js-s-skills-text');

    axios
      .get('http://localhost:1337/api/technos?populate=*')
      .then((response) => setTechnos(response.data.data))
      .catch((error) => console.log("erreur"))
      .finally(() => console.log('okokok'));
  }, []);
  

  return (
    <div className={'s-skills js-s-skills'}>
      <div className='container'>
        <div className="bg"></div>
        <div className='description'>
          <h3 className='s-skills-title ui-h1 is-medium js-textReveal-text' data-text='My technos'>
            <hr></hr>
            <span>My technos</span>
          </h3>
          <p>We gather a panel of techno to succeed at best all of our projects</p>
        </div>

        <ul className='icons js-s-skills-text'>
          {technos && technos.map((techno, index) => (
            <li key={index} className='icon'>
              <img src={`http://localhost:1337${techno.attributes.Logo.data.attributes.url}`} alt="image" />
            </li>
          ))}
        </ul>
      </div>
    </div>
);
}

export default Skills;
