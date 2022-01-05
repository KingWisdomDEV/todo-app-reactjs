import { useReducer, useCallback, useRef, useState } from "react"
import './App.css';
import TodoNew from './components/TodoNew'
import TodoTask from './components/TodoTask'
import EditPopup from './components/EditPopup'
import reducer, { initState } from "./store/reducer"
import { setNewTask, addNewTask, deleteTask, setEditTask, updateTask } from "./store/actions"

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [isShowPopup, setIsShowPopup] = useState(false)
  const { newTask, tasks, editTask } = state;

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
    setIsShowPopup(true);
  }, [tasks])

  // Event in EditPopup Component
  // In this component, don't need using useCallback and memo 
  // because this only rerender when user click edit task 
  // and in EditPopup Component only have 1 event to rerender
  const handleClosePopup = () => {
    setIsShowPopup(false);
  }

  const handleSave = () => {
    dispatch(updateTask({ index: editTask.index, text: editTask.text }))
    setIsShowPopup(false);
  }

  const handleChangeEditTask = (index, task) => {
    dispatch(setEditTask({ index: index, text: task }))
  }

  console.log("re-render", editTask)

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
            onEdit={handleOpenPopup} />
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

export default App;
