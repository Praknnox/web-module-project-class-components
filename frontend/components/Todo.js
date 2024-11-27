import React from 'react'

export default class Todo extends React.Component {
  render() {
    const {id,name,completed}=this.props.todo
    const {toggelCheck}=this.props
    return (
      <div onClick={()=>toggelCheck(id)}>
        {/*Todo*/}
        {name} {completed&&'   :D'}
      </div>
    )
  }
}
