import { SET_NEW_TASK, ADD_NEW_TASK, DELETE_TASK } from "./constants"

// Init state
export const initState = {
    newTask: "", 
    tasks: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NEW_TASK: 
        console.log("newstate: " , {...state,
            newTask: action.payload})
            return {
                ...state,
                newTask: action.payload
            }
        case ADD_NEW_TASK: 
        console.log("newstate: ", {...state,
            tasks: [...state.tasks, action.payload]})
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case DELETE_TASK: 
        console.log("newstate: ", {...state,
            tasks: [...state.tasks, action.payload]})
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.payload)
            }
        default:
            throw new Error("Invalid action")
    }
}

export default reducer