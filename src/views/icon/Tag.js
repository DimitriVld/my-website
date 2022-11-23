import React from 'react';

const TagIcon = (props) => {
  return (
    <span  className={`${props.class ? props.class : ''}`}>
      <svg width="37" height="17" viewBox="0 0 37 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5667 14.9976L5.13334 8.4892L13.5667 1.98081L11 0L0 8.4892L11 16.9784L13.5667 14.9976ZM23.1 14.9976L31.5334 8.4892L23.1 1.98081L25.6667 0L36.6667 8.4892L25.6667 16.9784L23.1 14.9976Z" fill="#3FD3FF"/>
      </svg>
    </span>
  );
}

export default TagIcon;