import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'

const TaskListItem = ({ pos, task }) => {

    const { actions } = useContext(GlobalContext)

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span>{task}</span>
            <button className='btn btn-danger btn-sm'
                onClick={() => actions.removeTask(pos)}
            >
                <i className="bi bi-trash"></i>
            </button>
        </li>
    )
}

export default TaskListItem