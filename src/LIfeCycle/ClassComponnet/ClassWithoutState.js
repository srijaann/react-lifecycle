import React, { Component } from 'react'

export default class ClassWithoutState extends Component {

    alertName = () => {
        alert("This is Class With out State")
    }
  render() {
    return (
      <div>
            <h5>This is Class out State</h5>
            <button onClick={this.alertName}>Show class </button>
      </div>
    )
  }
}
