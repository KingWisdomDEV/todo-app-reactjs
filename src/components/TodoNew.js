import { memo, forwardRef, useImperativeHandle, useRef } from 'react'
import { AddIcon } from './Icons'

const TodoNew = ({ newTask, onChange, onSubmit }, ref) => {
    console.log("render-TodoNew")
    const todoInputRef = useRef()

    useImperativeHandle(ref, () => ({
        focus() {
            todoInputRef.current.focus()
        }
    }))

    return (
        <div className="todo-new">
            <input
                ref={todoInputRef}
                className="todo-input"
                value={newTask}
                placeholder="Enter todo here..."
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={e => { e.key === "Enter" && onSubmit() }} />
            <button className="btn btn-primary" onClick={onSubmit}>
                <AddIcon className="small-icon" /> Add
            </button>
        </div>
    )
}

export default memo(forwardRef(TodoNew))