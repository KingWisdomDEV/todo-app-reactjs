import { useReducer, useCallback, useRef, useState } from "react"
import './App.css';
import TodoNew from './components/TodoNew'
import TodoTask from './components/TodoTask'
import EditPopup from './components/EditPopup'
import reducer, { initState } from "./store/reducer"
import { setNewTask, addNewTask, deleteTask } from "./store/actions"

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const [isShowPopup, setIsShowPopup] = useState(false)
  const { newTask, tasks } = state;

  const todoInputRef = useRef()

  const handleChangeTask = useCallback((task) => {
    dispatch(setNewTask(task))
  }, [newTask])

  const handleAddTask = useCallback(() => {
    dispatch(addNewTask(newTask))
    dispatch(setNewTask(""))
    todoInputRef.current.focus()
  }, [newTask])

  const handleDeleteTask = useCallback((index) => {
    dispatch(deleteTask(index))
  }, [tasks.length])

  const handleOpenPopup = (index) => {
    console.log(index)
    setIsShowPopup(true);
  }

  const handleClosePopup = () => {
    setIsShowPopup(false);
  }

  const handleSave = () => {
    console.log("save")
    setIsShowPopup(false);
  }

  console.log("re-render")

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
      {isShowPopup && <EditPopup onClosePopup={handleClosePopup} onSave={handleSave} />}
    </div>
  );
}

export default App;
