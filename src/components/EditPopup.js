import { CloseIcon, SaveIcon } from './Icons'

const EditPopup = ({ onClosePopup, onSave, editTask, onChangeEditTask }) => {
    console.log("render EditPopup")
    return (
        <div className="popup-edit">
            <div className="popup-content">
                <div className="popup-header">
                    <h2 className="heading-secondary">Edit Task</h2>
                    <button className="btn-close" onClick={onClosePopup}><CloseIcon className="close-icon" fill="red" /></button>
                </div>
                <div className="popup-body" >
                    <textarea
                        value={editTask.text}
                        onChange={(e => { onChangeEditTask(editTask.index, e.target.value) })}
                        className="todo-text"
                        placeholder="Enter todo here..."
                        rows={5} />
                    <button 
                        className="btn btn-secondary rounded" 
                        onClick={onSave}>
                        <SaveIcon className="medium-icon" /> Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditPopup