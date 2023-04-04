import React from 'react';
import './Project.css';

const Project = ({ project, onSelect }) => {
  const handleClick = () => {
    onSelect(project);
  };

  return (
    <div className="project" onClick={handleClick}>
      <h3>{project.name}</h3>
    </div>
  );
};

export default Project;


