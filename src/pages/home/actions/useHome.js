import { useCallback } from "react"
import { setNewTask, addNewTask, deleteTask, setEditTask, updateTask, addDoneTask, deleteDoneTask, setShowPopup } from "../../../store/actions"

export const useHome = ({ state, dispatch, todoInputRef }) => {
  const { newTask, tasks, editTask, doneTasks } = state;

  // Event in TodoNew Component
  const handleChangeTask = useCallback((task) => {
    dispatch(setNewTask(task))
  }, [newTask])

  const handleAddTask = useCallback(() => {
    dispatch(addNewTask(newTask))
    dispatch(setNewTask(""))
    todoInputRef.current.focus()
  }, [newTask])

  // Event in TodoTask Component
  const handleDeleteTask = useCallback((index) => {
    dispatch(deleteTask(index))
  }, [tasks])

  const handleOpenPopup = useCallback((index) => {
    dispatch(setEditTask({ index: index, text: tasks[index] }))
    dispatch(setShowPopup(true))
  }, [tasks])

  const handleCheckDoneTask = useCallback((index) => {
    dispatch(addDoneTask(tasks[index]))
    dispatch(deleteTask(index))
  }, [tasks])

  // Event in EditPopup Component
  // In this component, don't need using useCallback and memo 
  // because this only rerender when user click edit task 
  // and in EditPopup Component only have 1 event to rerender
  const handleClosePopup = () => {
    dispatch(setShowPopup(false))
  }

  const handleSave = () => {
    dispatch(updateTask({ index: editTask.index, text: editTask.text }))
    dispatch(setShowPopup(false))
  }

  const handleChangeEditTask = (index, task) => {
    dispatch(setEditTask({ index: index, text: task }))
  }

  //
  // Events in Done Task box
  //
  const handleDeleteDoneTask = useCallback((index) => {
    dispatch(deleteDoneTask(index))
  }, [doneTasks])

  const handleUnCheckDoneTask = useCallback((index) => {
    dispatch(addNewTask(doneTasks[index]))
    dispatch(deleteDoneTask(index))
  }, [doneTasks])

  console.log("re-render App")
  return {
    handleChangeTask,
    handleAddTask,
    handleDeleteTask,
    handleOpenPopup,
    handleCheckDoneTask,
    handleClosePopup,
    handleSave,
    handleChangeEditTask,
    handleDeleteDoneTask,
    handleUnCheckDoneTask
  }
}

