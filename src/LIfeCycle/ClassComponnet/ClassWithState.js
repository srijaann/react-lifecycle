import React, { Component } from 'react'

export default class ClassWithState extends Component {
    state = {
        name:''
    }
    alretName = () => {
        alert(this.state.name);
    }
    handeleNameInput = (setName) => {
        this.setState({ name:setName.target.value});
        
    }
  render() {
    return (
      <div>
            <h5>This is class with state without bind function</h5>
            <input type='text' onChange={this.handeleNameInput} value={this.state.name} placeholder='Your Name'></input>
            <button onClick={this.alretName}>Print Name</button>
      </div>
    )
  }
}
