import TaskForm from './components/TaskForm';
import ProjectForm from './components/ProjectForm';
import { Routes, Route } from "react-router-dom"
import Home from './Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/task' element={ <TaskForm/>} ></Route>
        <Route path='/project' element={ <ProjectForm/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
