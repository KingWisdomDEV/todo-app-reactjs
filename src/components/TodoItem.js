import { DeleteIcon, EditIcon } from './Icons'

const TodoItem = () => {
    return (
        <div className="todo-item">
            <input className="todo-checkbox" type="checkbox" />
            <p className="todo-content">walk the dog</p>
            <div className="todo-actions">
                <button className="btn btn-secondary mr-small">
                    <EditIcon className="medium-icon" />
                </button>
                <button className="btn btn-danger">
                    <DeleteIcon className="medium-icon" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
