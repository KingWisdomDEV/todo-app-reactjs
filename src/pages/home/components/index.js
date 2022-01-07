import { useReducer, useRef } from "react"
import reducer, { initState } from "../../../store/reducer"
import logger from "../../../utils/logger"

import TodoNew from '../../../components/TodoNew'
import TodoTask from '../../../components/TodoTask'
import EditPopup from '../../../components/EditPopup'
import { useHome } from "../actions/useHome"

function HomePage() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { newTask, tasks, editTask, doneTasks, isShowPopup } = state;

    const todoInputRef = useRef()
    const {
        handleChangeTask,
        handleAddTask,
        handleDeleteTask,
        handleOpenPopup,
        handleCheckDoneTask,
        handleClosePopup,
        handleSave,
        handleChangeEditTask,
        handleDeleteDoneTask,
        handleUnCheckDoneTask } = useHome({ state, dispatch, todoInputRef });

    console.log("re-render App")

    return (
        <div className="container">
            <div className="todo-box">
                <h1 className="heading">Todos<span> ({tasks.length || 0})</span></h1>
                <div className="todo-body">
                    <TodoNew
                        ref={todoInputRef}
                        newTask={newTask}
                        onChange={handleChangeTask}
                        onSubmit={handleAddTask} />
                    <TodoTask
                        tasks={tasks}
                        onDelete={handleDeleteTask}
                        onEdit={handleOpenPopup}
                        onCheckDoneTask={handleCheckDoneTask} />
                </div>
            </div>
            <div className="todo-box">
                <h1 className="heading">Done<span> ({doneTasks.length || 0})</span></h1>
                <div className="todo-body">
                    <TodoTask
                        tasks={doneTasks}
                        isTypeDone={true}
                        onDelete={handleDeleteTask}
                        onDeleteDoneTask={handleDeleteDoneTask}
                        onEdit={handleOpenPopup}
                        onCheckDoneTask={handleCheckDoneTask}
                        onUnCheckDoneTask={handleUnCheckDoneTask} />
                </div>
            </div>
            {isShowPopup &&
                <EditPopup
                    editTask={editTask}
                    onChangeEditTask={handleChangeEditTask}
                    onClosePopup={handleClosePopup}
                    onSave={handleSave} />}
        </div>
    );
}

export default HomePage;
