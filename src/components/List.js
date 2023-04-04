import React from 'react'
import './List.css'
import { useSelector , useDispatch } from 'react-redux'

const List = () => {
const dispatch = useDispatch()
const {task , project} = useSelector( (store) => store)

const projectTask = project.map( (item) => {
    return task.filter((task) =>{
      return task.projectName === item
    })
})
console.log(projectTask)

const deleteHandler = (e) =>{
console.log(e.target.id)
  const filteredTask = task.filter( (taskItem) =>{
    return e.target.id !== taskItem.id
  })
  console.log(filteredTask)

  dispatch({type:'updatedTask' , value:filteredTask})

}


return (
    <div className='List'>
    {projectTask.length > 0 ? projectTask.map( (project) => {
      return ( project.length > 0 ? <div className='ListItem' key={project[0].id}>
        <h1>{project[0].projectName}</h1>
        <div className='task'>
        {project.map( (taskitem , index) => {
          return(
            <div key={taskitem.id} >
            <h6>{taskitem.taskName}</h6>
            <p>{taskitem.description}</p>
            <p>{taskitem.timeSpent} Hr</p>
            <p>{taskitem.date}</p>
            <button onClick={deleteHandler} id={taskitem.id} style={{cursor:"pointer"}} >Delete</button>
            <hr></hr>
            </div>
          )
        })}
        </div>
        <div className='totTime'> Total Time: {project.reduce( (acc , curr) =>{
           return acc + parseInt(curr.timeSpent)
        } , 0)}</div>
        </div> : "")
    }) : <h1>Please add the project first</h1>}
    </div>
  )
}

export default List;
