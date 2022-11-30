import React, { useEffect } from 'react';
import { textReveal } from '../../super/TextReveal';
import DevicesIcon from '../icon/Devices';
import TagIcon from '../icon/Tag';
import DefenderIcon from '../icon/Defender';

const Services = () => {

  useEffect(() => {
    textReveal('.js-s-services' , '.js-s-services-text');
  });

  return (
    <div className={"s-services js-s-services"}>
      <div className='container'>
        <div className='service js-s-services-text' style={{borderLeft: `solid 1px #74FDE6`}}>
          <DevicesIcon />
          <ul>
            <li>Wireframing & Prototyping</li>
            <li>UX design</li>
            <li>UI design</li>
            <li>Responsive design</li>
            <li>Usability & accessibility</li>
          </ul>
        </div>

        <div className='service js-s-services-text' style={{borderLeft: `solid 1px #3FD3FF`}}>
          <TagIcon />
          <ul>
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Responsive Development</li>
            <li>Mobile Development</li>
          </ul>
        </div>

        <div className='service js-s-services-text' style={{borderLeft: `solid 1px #4C29FF`}}>
          <DefenderIcon />
          <ul>
            <li>Performence optimization</li>
            <li>Site security</li>
            <li>Site Back-up</li>
            <li>Accessibility testing</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
