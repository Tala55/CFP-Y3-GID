import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange, handleSubmit, editItem} = this.props  
        
        return (
            <div className="card card-body my-3">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div style={{marginTop:"10px"}}>🔍 
                         </div>
                            
                        </div>

                        <input
                            type="text"
                            className="form-control"
                            style={{borderRadius:"7px"}}
                            placeholder="What do you want to do..."
                            value={item}
                            onChange={handleChange}
                        />
                    </div>

                    <button 
                        type="submit"
                        className="btn btn-danger btn-block mt-1"

                    >
                        {editItem ? 'Edit task' : 'Add new task'}
                    </button>
                </form>
            </div>
        )
    }
}
