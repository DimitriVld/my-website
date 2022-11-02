import React from 'react';

const Services = () => {
  return (
    <div className={"s-services"}>
      <div className='container'>
        <div className='service' style={{borderLeft: `solid 1px red`}}>
          icon
          <ul>
              <li>item list</li>
          </ul>
        </div>

        <div className='service' style={{borderLeft: `solid 1px red`}}>
          icon
          <ul>
              <li>item list</li>
          </ul>
        </div>

        <div className='service' style={{borderLeft: `solid 1px red`}}>
          icon
          <ul>
              <li>item list</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
