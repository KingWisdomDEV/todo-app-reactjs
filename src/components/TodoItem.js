import { DeleteIcon, EditIcon } from './Icons'

const TodoItem = ({ task = "", index, isTypeDone, onDelete, onEdit, onCheckDoneTask, onDeleteDoneTask, onUnCheckDoneTask }) => {
    console.log("render-TodoItem with type", isTypeDone)
    return (
        <div className="todo-item">
            <input 
                className="todo-checkbox" 
                onChange={() => { isTypeDone ? onUnCheckDoneTask(index) : onCheckDoneTask(index) }} 
                type="checkbox"
                checked={isTypeDone} 
                />
            <p className="todo-content" style={{ textDecoration: isTypeDone ? "line-through" : "unset"}}>{task}</p>
            <div className="todo-actions">
                {!isTypeDone && <button className="btn btn-secondary mr-small" onClick={() => onEdit(index)}>
                    <EditIcon className="medium-icon" />
                </button>}
                <button className="btn btn-danger" onClick={() => isTypeDone ? onDeleteDoneTask(index) : onDelete(index)}>
                    <DeleteIcon className="medium-icon" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
