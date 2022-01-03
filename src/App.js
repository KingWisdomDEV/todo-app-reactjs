import './App.css';
import TodoNew from './components/TodoNew'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <div className="container">
      <div className="todo-box">
        <h1 className="heading">Todos<span> (5)</span></h1>
        <div className="todo-body">
          <TodoNew/>
          <div className="todo-tasks">
            <TodoItem/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
