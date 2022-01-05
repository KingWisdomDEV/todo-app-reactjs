import { DeleteIcon, EditIcon } from './Icons'

const TodoItem = ({ task = "", isTypeDone, onDelete, onEdit, onCheckDoneTask, index }) => {
    console.log("render-TodoItem")
    return (
        <div className="todo-item">
            <input 
                className="todo-checkbox" 
                onChange={() => { onCheckDoneTask(index) }} 
                type="checkbox"
                checked={isTypeDone} 
                />
            <p className="todo-content" style={{ textDecoration: isTypeDone ? "line-through" : "unset"}}>{task}</p>
            <div className="todo-actions">
                {!isTypeDone && <button className="btn btn-secondary mr-small" onClick={() => onEdit(index)}>
                    <EditIcon className="medium-icon" />
                </button>}
                <button className="btn btn-danger" onClick={() => onDelete(index)}>
                    <DeleteIcon className="medium-icon" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
