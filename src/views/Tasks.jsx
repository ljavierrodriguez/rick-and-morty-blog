import React, { useContext } from 'react'
import TaskList from '../components/TaskList'
import { GlobalContext } from '../context/AppContext'
import TaskForm from '../components/TaskForm'

const Tasks = () => {

    const { store } = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <TaskForm />
                    <TaskList todos={store.todos} />
                </div>
            </div>
        </div>
    )
}

export default Tasks