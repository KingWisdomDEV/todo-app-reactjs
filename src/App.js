import { useReducer } from "react"
import './App.css';
import TodoNew from './components/TodoNew'
import TodoTask from './components/TodoTask'
import reducer, { initState } from "./store/reducer"
import { setNewTask, addNewTask, deleteTask } from "./store/actions"

function App() {
  const [state, dispatch] = useReducer(reducer, initState)
  const { newTask, tasks } = state;

  const handleChangeTask = (task) => {
    dispatch(setNewTask(task))
  }
  
  const handleAddTask = () => {
    dispatch(addNewTask(newTask))
    dispatch(setNewTask(""))
  }
  
  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index))
  }

  console.log("re-render")

  return (
    <div className="container">
      <div className="todo-box">
        <h1 className="heading">Todos<span> (5)</span></h1>
        <div className="todo-body">
          <TodoNew onChange={handleChangeTask} onSubmit={handleAddTask} />
          <TodoTask tasks={tasks} onDelete={handleDeleteTask}/>
        </div>
      </div>
    </div>
  );
}

export default App;
