import { AddIcon } from './Icons'

const TodoNew = ({ onChange, onSubmit }) => {
    console.log("render-TodoNew")
    return (
        <div className="todo-new">
            <input className="todo-input" placeholder="Enter todo here..." onChange={(e) => onChange(e.target.value)} />
            <button className="btn btn-primary" onClick={onSubmit}>
                <AddIcon className="small-icon" /> Add
            </button>
        </div>
    )
}

export default TodoNew