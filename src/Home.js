import React from 'react'
import List from './components/List'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
     <header>
        <h1 className="icon">Time Tracker</h1>
        <nav>
            <Link to="task" className='link' >Add Task</Link>
            <Link to="project" className='link'>Add Project</Link>
        </nav>
    </header>
    <List/>
    </>
   
  )
}

export default Home
