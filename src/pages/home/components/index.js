import { useReducer, useCallback, useRef } from "react"
import TodoNew from '../../../components/TodoNew'
import TodoTask from '../../../components/TodoTask'
import EditPopup from '../../../components/EditPopup'
import reducer, { initState } from "../../../store/reducer"
import { setNewTask, addNewTask, deleteTask, setEditTask, updateTask, addDoneTask, deleteDoneTask, setShowPopup } from "../../../store/actions"
import logger from "../../../utils/logger"

function HomePage() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
  const { newTask, tasks, editTask, doneTasks, isShowPopup } = state;

  const todoInputRef = useRef()

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

  return (
    <div className="container">
      <div className="todo-box">
        <h1 className="heading">Todos<span> ({tasks.length || 0})</span></h1>
        <div className="todo-body">
          <TodoNew
            ref={todoInputRef}
            newTask={newTask}
            onChange={handleChangeTask}
            onSubmit={handleAddTask} />
          <TodoTask
            tasks={tasks}
            onDelete={handleDeleteTask}
            onEdit={handleOpenPopup}
            onCheckDoneTask={handleCheckDoneTask} />
        </div>
      </div>
      <div className="todo-box">
        <h1 className="heading">Done<span> ({doneTasks.length || 0})</span></h1>
        <div className="todo-body">
          <TodoTask
            tasks={doneTasks}
            isTypeDone={true}
            onDelete={handleDeleteTask}
            onDeleteDoneTask={handleDeleteDoneTask}
            onEdit={handleOpenPopup}
            onCheckDoneTask={handleCheckDoneTask}
            onUnCheckDoneTask={handleUnCheckDoneTask} />
        </div>
      </div>
      {isShowPopup &&
        <EditPopup
          editTask={editTask}
          onChangeEditTask={handleChangeEditTask}
          onClosePopup={handleClosePopup}
          onSave={handleSave} />}
    </div>
  );
}

export default HomePage;
