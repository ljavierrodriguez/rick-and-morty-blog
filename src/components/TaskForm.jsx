import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'

const TaskForm = () => {

    const { actions } = useContext(GlobalContext)

    const handleKeyUp = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            actions.addTask(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <input
            type="text"
            className="form-control my-3"
            placeholder='Insert Task'
            onKeyUp={handleKeyUp}
        />
    )
}

export default TaskForm