import { createStore } from "redux";

const reducer = ( state = {task:[] , project:[]} , action) =>{


    if(action.type === 'AddTask'){
        let {task , project} = state
        return {task:[...task , action.value] , project }
    }
    if(action.type === "AddProject"){
        let {task , project} = state
        if(project.includes(action.value)){
            return{task , project}
        }
        return {task , project: [...project , action.value] }
    }
    if(action.type ==="updatedTask"){
        let {task , project} = state
        return {task: [...action.value] , project }
    }

    return state
}

const store = createStore(reducer)

export default store;