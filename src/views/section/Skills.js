import React, {useEffect, useState}  from 'react';
import axios from 'axios';

const Skills = () => {
  const [technos, setTechnos] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/technos?populate=*')
      .then((response) => setTechnos(response.data.data))
      .catch((error) => console.log("erreur"))
      .finally(() => console.log('okokok'));
  }, []);

  return (
    <div className={'s-skills'}>
      <div className='container'>
        <div className="bg"></div>
        <div className='description'>
          <h3 className='ui-h1'><hr></hr>My techno</h3>
          <p>We gather a panel of techno to succeed at best all of our projects</p>
        </div>

        <ul className='icons'>
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
