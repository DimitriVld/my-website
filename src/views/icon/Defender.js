import React from 'react';

const DefenderIcon = (props) => {
  return (
    <span  className={`${props.class ? props.class : ''}`}>
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
        <path d="M22 1.83334L5.5 9.16668V20.1667C5.5 30.3417 12.54 39.8567 22 42.1667C31.46 39.8567 38.5 30.3417 38.5 20.1667V9.16668L22 1.83334ZM22 21.9817H34.8333C33.8617 29.535 28.82 36.2633 22 38.3717V22H9.16667V11.55L22 5.84834V21.9817Z" fill="#4C29FF"/>
        </g>
        <defs>
        <clipPath>
        <rect width="44" height="44" fill="white"/>
        </clipPath>
        </defs>
      </svg>
    </span>
  );
}

export default DefenderIcon;