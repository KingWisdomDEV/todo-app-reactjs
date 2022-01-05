import { SET_NEW_TASK, ADD_NEW_TASK, DELETE_TASK, SET_EDIT_TASK, UPDATE_TASK } from "./constants"

// Init state
export const initState = {
    newTask: "", 
    editTask: {
        index: 0,
        text: ""
    },
    tasks: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_NEW_TASK: 
            return {
                ...state,
                newTask: action.payload
            }
        case ADD_NEW_TASK: 
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case UPDATE_TASK:
            state.tasks[action.payload.index] = action.payload.text
            return { 
                ...state, 
                tasks: [...state.tasks]}
        case DELETE_TASK: 
            return {
                ...state,
                tasks: state.tasks.filter((task, index) => index !== action.payload)
            }
        case SET_EDIT_TASK: 
            return {
                ...state,
                editTask: action.payload
            }
        default:
            throw new Error("Invalid action")
    }
}

export default reducer