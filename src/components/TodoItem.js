import { DeleteIcon, EditIcon } from './Icons'

const TodoItem = ({ task = "", onDelete, index }) => {
    console.log("render-TodoItem")
    return (
        <div className="todo-item">
            <input className="todo-checkbox" type="checkbox" />
            <p className="todo-content">{task}</p>
            <div className="todo-actions">
                <button className="btn btn-secondary mr-small">
                    <EditIcon className="medium-icon" />
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(index)}>
                    <DeleteIcon className="medium-icon" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
