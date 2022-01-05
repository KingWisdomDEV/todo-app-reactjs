import { memo } from 'react'
import TodoItem from './TodoItem'

const TodoTask = ({ tasks = [], onDelete, onEdit, onCheckDoneTask, isTypeDone }) => {
    console.log("render-TodoTask", isTypeDone)
    if (tasks.length <= 0) return null

    return (
        <div className="todo-tasks">
            {tasks.map((task, index) =>
                <TodoItem
                    key={index} 
                    isTypeDone={isTypeDone}
                    task={task} 
                    index={index} 
                    onDelete={onDelete} 
                    onEdit={onEdit}
                    onCheckDoneTask={onCheckDoneTask} />
            )}
        </div>
    )
}

export default memo(TodoTask)
