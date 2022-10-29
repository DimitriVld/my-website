import React from 'react';
import Menu from './Menu';

const Header = () => {
  return(
    <div className={'c-header'} >
      <Menu />
      <h1> This is a header </h1>
    </div>
  )
}

export default Header;