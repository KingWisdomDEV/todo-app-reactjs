import { AddIcon } from './Icons'

const TodoNew = () => {
    return (
        <div className="todo-new">
            <input className="todo-input" placeholder="Enter todo here..." />
            <button className="btn btn-primary">
                <AddIcon className="small-icon" /> Add
            </button>
        </div>
    )
}

export default TodoNew