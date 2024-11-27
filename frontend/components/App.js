import React from 'react'
import Form from './Form'
import ToDoList from './TodoList'

let id=0
let getId=()=>++id
const initToDo=[
  {id:getId(),name:'Walk the dog',completed:false},
  {id:getId(),name:'Learn React',completed:true},
  {id:getId(),name:'Have fun',completed:false}
]

export default class App extends React.Component {
  state={
    todos:initToDo
  }
  toggelCheck=id=>{
    this.setState({
      ...this.state,
      todos:this.state.todos.map(td=>{
        if(id==td.id) return {...td,completed:!td.completed}
        return td
      })
    })
  }
  addTodo=(name)=>{
    this.setState({
      ...this.state,
      todos:this.state.todos.concat({id:getId(),completed:false,name})
    })
  }
  render() {
    return (
      <div>
        {/*Todo App*/}
        <ToDoList todos={this.state.todos} toggelCheck={this.toggelCheck}/>
        <Form addTodo={this.addTodo}/>
      </div>
    )
  }
}
