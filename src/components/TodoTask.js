import TodoItem from './TodoItem'

const TodoTask = ({ tasks = [], onDelete }) => {
    console.log("render-TodoTask")
    console.log(tasks)
    return (
        <div className="todo-tasks">
            {tasks.map((task, index) => 
                <TodoItem key={index} task={task} index={index} onDelete={onDelete} />
            )}
        </div>
    )
}

export default TodoTask
