import React, { Component } from 'react'

export default class taskList extends Component {
 
    render() {
        return (
            <div className="task-list">
            <ul>
                {this.props.taskList.map((task) => {
                    return (
                        <li className="tasklist">
                            <p>{task}</p>
                            <button onClick={() => 
                                { this.props.deleteTask(task) }}>
                                Delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
        )
    }
}
