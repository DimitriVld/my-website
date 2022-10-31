import React, { useContext } from 'react';
import { useParams } from "react-router-dom";
import AppContext from '../../context/AppContext';

const Project = () => {
  let { projectId } = useParams();
  const context = useContext(AppContext);
  const project = context?.find(element => element.id == projectId);

  return (
    <div>
      {project?.id}
    </div>
  );
};

export default Project;