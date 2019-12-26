import React, { Component } from "react";

export default class ClassMultiState extends Component {
  state = {
    userName: " ",
    firstName: " ",
    lastName: "  "
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        userName: "srijan25",
        firstName: "srijan",
        lastName: "aryal"
      });
    }, 3000);
  }

  logName = () => {
    console.log(this.state.userName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
  };

  handleUserNameInput = user => {
    this.setState({ userName: user.target.value });
  };

  handleFirstNameInput = firstName => {
    this.setState({ firstName: firstName.target.value });
  };

  handleLastNameInput = lastName => {
    this.setState({ lastName: lastName.target.value });
  };

  render() {
    return (
      <div>
        <h4>This is class with multiple state demo</h4>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={this.state.userName}
          placeholder="User name"
        ></input>
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          placeholder="First  name"
        ></input>
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          placeholder="Last  name"
        ></input>
        <button onClick={this.logName}>
          {"  "}
          log Names{"  "}
        </button>
      </div>
    );
  }
}
