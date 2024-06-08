import React, { Component } from 'react'

export default class Stateclass extends Component {
  
    state = { 
        count : 0

  }

handleAdd = () => {
    this.setState({
          
        count : this.state.count + 1


    })
}
render() {
    return (
     <>

     <h1> count: {this.state.count}</h1>
     <button onClick={this.handleAdd}>Add</button>
     
     </>
    )
    }
}