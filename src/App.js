import { useReducer, useCallback, useRef } from "react"
import './App.css';
import TodoNew from './components/TodoNew'
import TodoTask from './components/TodoTask'
import reducer, { initState } from "./store/reducer"
import { setNewTask, addNewTask, deleteTask } from "./store/actions"

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
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
            onDelete={handleDeleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;
