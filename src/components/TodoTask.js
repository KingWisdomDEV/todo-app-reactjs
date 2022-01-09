import { memo } from 'react'
import TodoItem from './TodoItem'

const TodoTask = ({ tasks = [], onDelete, onEdit, onCheckDoneTask, isTypeDone, onDeleteDoneTask, onUnCheckDoneTask }) => {
    console.log("render-TodoTask", isTypeDone)
    if (tasks.length <= 0) return null

    return (
        <div className="todo-tasks">
            {tasks.map((task, index) =>
                <TodoItem
                    key={Math.floor(Math.random() * 10000)} 
                    isTypeDone={isTypeDone}
                    task={task} 
                    index={index} 
                    onDelete={onDelete} 
                    onDeleteDoneTask={onDeleteDoneTask}
                    onEdit={onEdit}
                    onCheckDoneTask={onCheckDoneTask}
                    onUnCheckDoneTask={onUnCheckDoneTask} />
            )}
        </div>
    )
}

export default memo(TodoTask)
