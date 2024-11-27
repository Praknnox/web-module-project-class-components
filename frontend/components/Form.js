import React from 'react'

export default class Form extends React.Component {
  state={
    name:''
  }
  subHandlr=evt=>{
    evt.preventDefault()
    const {addTodo}=this.props
    addTodo(this.state.name)
    this.setState({...this.state,name:''})
  }
  handChange=evt=>{
    this.setState({
      ...this.state,
      name:evt.target.value
    })
  }
  render() {
    return (
      <form onSubmit={this.subHandlr}>
        <input type='text' value={this.state.name} onChange={this.handChange}/>
        <input type='submit'/>
      </form>
      /*<div>
        Form
      </div>*/
    )
  }
}
