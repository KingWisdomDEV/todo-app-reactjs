import { SET_NEW_TASK, ADD_NEW_TASK, DELETE_TASK } from "./constants"

export const setNewTask = payload => {
    return {
        type: SET_NEW_TASK,
        payload: payload
    }
}

export const addNewTask = payload => {
    return {
        type: ADD_NEW_TASK,
        payload: payload
    }
}

export const deleteTask = payload => {
    return {
        type: DELETE_TASK,
        payload: payload
    }
}