import React, { Component } from "react";

export default class ClassMultiState extends Component {
  state = {
    userName: " ",
    firstName: " ",
    lastName: "  "
  };

  componentDidMount() {
    const header = document.querySelectorAll("#header")[0];
    setInterval(() => {
      header.innerHTML = "An updated header for the class with multiple state";
      this.setState({
        //an updated state as lifecycle functions
        userName: "srijan25",
        firstName: "srijan",
        lastName: "aryal" 
      });
    }, 3000);
  }

  componentDidUpdate() {
    const node = document.querySelectorAll("#header")[0];
    setInterval(() => {
      node.innerHTML = "This is updated with the componnetDidUpdate";
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
        <h4 id="header">This is class with multiple state demo</h4>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          placeholder="UserName"
          value={this.state.userName}
        />
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
