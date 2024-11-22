import React from 'react'
import TaskListItem from './TaskListItem'

const TaskList = ({ todos }) => {

    if (todos.length === 0) return (
        <div className="alert alert-warning my-2" role='alert'>
            Task List Empty
        </div>
    )

    return (
        <ul className="list-group">
            {
                todos.map((task, index) => {
                    return (
                        <TaskListItem
                            key={index}
                            pos={index}
                            task={task}
                        />
                    )
                })
            }
        </ul>
    )
}

export default TaskList