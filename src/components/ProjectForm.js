import React, { useState } from 'react';
import { useSelector , useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import './ProjectForm.css'

const ProjectForm = ({ onSubmit }) => {
  const [projectName, setProjectName] = useState('');
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'AddProject' , value:projectName})
console.log(state)
    setProjectName('');
  };

  return (
    <form onSubmit={handleSubmit} className='project-form'>
      <label htmlFor="project-name">Project name:</label>
      <input
        id='project-name'
        type="text"
        placeholder="Project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button type="submit">Create Project</button>
      <Link className='homeButtonProject' to="/">Home</Link>
      <Link className='taskButon' to='/task' >Add task</Link>
    </form>
  );
};

export default ProjectForm