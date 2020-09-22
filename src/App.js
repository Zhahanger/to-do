import React, { Component } from 'react';
import './App.css';
import Header from './app-header/Header'
import AddItem from './add-item/AddItem'
import Tasks from './allTasks/Tasks'
class App extends Component {
  state = {
    tasksObject : ["Пригласить на собеседование"]
  }
  addTask(){
    if(document.getElementsByClassName('main-input')[0].value.trim() !== ""){
      let tasksObject = this.state.tasksObject;
    tasksObject.push(document.getElementsByClassName('main-input')[0].value);
    this.setState({
      tasksObject
    });
    document.getElementsByClassName('main-input')[0].value = "";

    }
    
  }
  success(a){
    if(document.getElementsByClassName("task")[a].classList.contains("overline")){
      document.getElementsByClassName("task")[a].classList.remove("overline")
    } else {
      document.getElementsByClassName("task")[a].classList.add("overline")
    }
  }
  delete(a){
    let tasks = this.state.tasksObject;
    tasks.splice(a,1);
    this.setState({
      tasksObject : tasks
    })
  }
  render(){
    return (
      <>
        <Header/>
        <AddItem addTask={()=>{this.addTask()}}/>
        {
          this.state.tasksObject.map((task,index)=>{
            return (
              <Tasks name={task} key={index} onDelete={()=>{this.delete(index)}} onSuccess={()=>{this.success(index)}}/>
            ) })
        }
      </>
    );
  }
  
}

export default App;
