import React, { Component } from "react";

export default class IntroSetState extends Component {
  constructor() {
    super();
    this.state = {
      msg: "This is intro of setState functions"
    };
    this.updateSetState = this.updateSetState.bind(this);
  }

  updateSetState() {
    this.setState({
      msg: "This is updated setState Result"
    });
  }

  render() {
    return (
      <div>
        <h4>About setState() function</h4>
        <p>The function does not always replace or update the state.</p>
        <h4>{this.state.msg}</h4>
        <button onClick={this.updateSetState}>Set State</button>
        <br></br>
      </div>
    );
  }
}
