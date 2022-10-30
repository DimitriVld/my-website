import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const LastProjects = () => {
  const context = useContext(AppContext)

  console.log(context)
  
  return (
    <div className={"s-lastProjects"}>
      ok
    </div>
  );
}

export default LastProjects;
