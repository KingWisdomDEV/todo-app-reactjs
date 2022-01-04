import { memo } from 'react'
import TodoItem from './TodoItem'

const TodoTask = ({ tasks = [], onDelete, onEdit }) => {
    console.log("render-TodoTask")
    if (tasks.length <= 0) return null

    return (
        <div className="todo-tasks">
            {tasks.map((task, index) => 
                <TodoItem key={index} task={task} index={index} onDelete={onDelete} onEdit={onEdit} />
            )}
        </div>
    )
}

export default memo(TodoTask)
