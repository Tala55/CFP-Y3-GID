import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {id , title, handleDelete, handleEdit, handleDoneTask, completed} = this.props

        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className={` ${completed ? 'completed-task' : ''}`} style={{fontSize:"30px",fontFamily:"cursive"}}>{title}</h6>
                <div className="todo-icon">
                    <span 
                        className={`mx-2 ${completed ? 'text-success' : 'text-secondary'}`}
                        onClick={() => handleDoneTask(id)}
                    >
                        <h6 style={{cursor:"pointer",marginTop:"-25px",}}>✔️</h6>
                    </span>
                    <span 
                        className="mx-2 text-warning"
                        onClick={handleEdit}
                    >
                        <i className="fas fa-pen" />
                    </span>
                    <span 
                        className="mx-2 text-danger"
                        onClick={handleDelete}
                    >
                        <h6 style={{cursor:"pointer",marginTop:"-15p0x",}}>🗑️</h6>
                    </span>
                </div>
            </li>
        )
    }
}
