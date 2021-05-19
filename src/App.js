import './style.css';
import React, {Component} from 'react';
import { Button,TextField,Container } from '@material-ui/core';
import './style.css';
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state={
      todos: [{title: "example1" , edit: false }, {title: "example2", edit: false}],
      value: '',
      edit: ''
    }
  }

  
  add_todo = () => {
    if(this.state.value == ""){
      return alert("Enter any todo to add");
    }
    this.state.todos.push(this.state.value)
    let obj = {title: this.state.value}
    this.setState({
      todos: [...this.state.todos, obj],
      value: "",
      
    })
  }

  delete_todo = (index) => {
    this.state.todos.splice(index, 1)
    this.setState({
      todos: this.state.todos
    })
  }

  deleteall_todos = () => {
    this.state.todos.length = 0;
    this.setState({
      todos: this.state.todos
    })
  }

  edit_todo = (index, val) => {
    this.state.todos[index].edit = true;
    this.setState({
      todos: this.state.todos
    })
  }

  handleChange = (e,index) => {
        this.state.todos[index].title =  e.target.value;
        this.setState({
          todos: this.state.todos
        })
      }
    
      update = (index) => {
        this.state.todos[index].edit= false;
    
        this.setState({
          todos: this.state.todos,
        })
      }

  render(){
    let {todos,value} = this.state;


    return(
      <div className='body'>
      <div className='heading'>
        <h2>Todo App with ReactJs</h2>
      </div>
      <Container className='main' maxWidth="sm">
      
      <Container maxWidth="sm">
      <div className='todo-main'>
        <div className='todo-input'>  
          <TextField value={value} onChange={(e)=> this.setState({value: e.target.value}) }  id="standard-basic" label="Enter Todo" />
        </div>
        <div className='todo-buttons'>
          <Button onClick={this.add_todo} className='primary-button' variant="outlined" color="primary">Add Item</Button>
          <Button onClick={this.deleteall_todos} variant="contained" color="secondary">Delete All</Button>
        </div>
      </div>
      </Container>
      <Container className='list-container' maxWidth="sm">
          <div className='todo-items'>
            <ul>
            <h3> Todo Items</h3>
            {todos.map((v,i) =>{
              return <li className='list' key={i}>
              { v.edit? <TextField id="filled-basic" onChange={(e) => this.handleChange(e,i)} label="Edit" /> : v.title}
              <Button onClick={() => this.delete_todo(i)} className='DeleteButton' variant="contained" color="secondary">Delete</Button>
              {v.edit? <Button onClick={()=> this.update(i)} variant="contained" color="primary">Update</Button>:
              <Button onClick={() => this.edit_todo(i, v.title)} className='DeleteButton' variant="contained" color="primary">Edit</Button>
              }
              </li>
            })}
            </ul>
          </div>
        </Container>
        </Container>
      </div>
    )
  }
}

export default App;
