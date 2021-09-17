// react snippets
// rcc
// Todo --> 2 components
// Input container , TaskList
// parent se child ko data send krna ho toh --> props se send kr sko 
// jo state children m use aayegi use children m add kr do or jo dono m use aayegi use parent m rkho 
// redux--> state manageent se 



import React, { Component } from 'react';
import InputContainer from './InputContainer';
import TaskList from './TaskList';
//1.render -> static ui define
// /2. identify different variables that 
// can change throughout the life time -> state
// 3. rewrite render using those state variables
// 4. event listener to change the state
export default class Todo extends Component {
    state = {
        taskList: [],
       
    }
    deleteTask = (cTask) => {
        // current - rest of the task 
        let filteredtasks = this.state.taskList
            .filter(function (task) {
                return task !== cTask;
            })
        this.setState({
            taskList: filteredtasks
        });
    }
    
    addTask = (currTask) => {
        
        // let tempArr = this.state.taskList;
        // for (let i = 0; i < this.state.taskList.length; i++) {
        //     tempArr.push(this.state.taskList[i]);
        // }
        // tempArr.push(currTask);
        let tempArr = [...this.state.taskList, currTask]
        this.setState({
            taskList: tempArr,
           
        })
    }
    render() {
        return (
            <div>
                <InputContainer addTask ={this.addTask}/>
               <TaskList taskList ={this.state.taskList} deleteTask ={this.deleteTask}/>
            </div>
        )
    }
}


