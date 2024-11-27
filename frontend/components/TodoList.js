import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  state={
    display:true
  }
  togDisp=evt=>{
    this.setState({
      ...this.state,
      display:!this.state.display
    })
  }
  render() {
    const {todos,toggelCheck}=this.props
    const filtered=todos.filter(td=>!td.completed||this.state.display)
    return (
      <div>
        {/*TodoList*/
        filtered.map((toto)=>(<Todo key={toto.id} todo={toto} toggelCheck={toggelCheck}/>))
        }
        <button onClick={this.togDisp}>{this.state.display?'Hide Checked':'All todo'}</button>
      </div>
    )
  }
}
