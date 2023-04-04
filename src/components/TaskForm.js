import React, { useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './TaskForm.css';

const TaskForm = ({ onSubmit }) => {
  const dispatch = useDispatch()
  const State = useSelector( (state) => state)
  const [projectName, setProjectName] = useState('');
  const [taskName, setTaskName] = useState('');
  const [timeSpent, setTimeSpent] = useState(0);
  const [description, setDescription] = useState('');
  const projects=State.project 


  const handleSubmit = (e) => {
    e.preventDefault();
    const unique_id = uuid();
    const small_id = unique_id.slice(0,8)
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
  const task = {

      id:small_id,
      projectName: projectName,
      taskName,
      timeSpent,
      description,
      date: today,
  };

  dispatch({type:'AddTask' , value:task})
  setProjectName('');
  setTaskName('');
  setTimeSpent(0);
  setDescription('');
  console.log(State)
  };


  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label htmlFor="project-select">Select a project:</label>
      <select
        id="project-select"
        onChange={(e) => setProjectName(e.target.value)}
        value={projectName}
      >
        
        <option value="Select a project" >Select a project</option>
        {projects.map((project , index) => (
          <option key={index} value={project}>
            {project}
          </option>
        ))}
      </select>
      <label htmlFor="task-name">Task name:</label>
      <input
        type="text"
        id="task-name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <label htmlFor="time-spent">Time spent (in hours):</label>
      <input
        type="number"
        id="time-spent"
        value={timeSpent}
        onChange={(e) => setTimeSpent((e.target.value))}
      />
      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Task</button>
      <Link className='homeButtonTask' to="/">Home</Link>
      <Link className='projectButton' to="/project">Add Project</Link>
    </form>
  );
};

export default TaskForm;


