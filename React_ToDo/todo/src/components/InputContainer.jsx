import React, { Component } from 'react'

export default class InputContainer extends Component {
   
    state ={
        currTask : ""
    }

    handleCurrTask = (e) => {
        let currValue = e.target.value;
        this.setState({
            currTask: currValue
        })

    }

    sendCurrTaskToParent =()=>{
     this.props.addTask(this.state.currTask);
        this.setState(
           { currTask : ""}
        )
    }
    
  
    render() {
        return (
            <div>
                <div className="input-container">
                    <input type="text" value={this.state.currTask}
                    onChange={this.handleCurrTask} />
                    <button onClick={this.sendCurrTaskToParent }>submit</button>
                </div>
                
            </div>
        )
    }
}
