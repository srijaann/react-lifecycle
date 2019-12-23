import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class DomNode extends Component {
  constructor(props) {
    super(props);
    this.findDomNodeOne = this.findDomNodeOne.bind(this);
    this.findDomNodeTwo = this.findDomNodeTwo.bind(this);
  }
  findDomNodeOne() {
    let myDiv = document.getElementById("myDivOne");
    ReactDOM.findDOMNode(myDiv).style.color = "Red";
  }

  findDomNodeTwo() {
    let myDiv = document.getElementById("myDivTwo");
    ReactDOM.findDOMNode(myDiv).style.color = "Green";
  }
  render() {
    return (
      <div>
        <h4>About find DomNode() function </h4>
        <p>
          To use this function we must import React.Dom object,This function
          will find an HTML tag in side DOM and update it
        </p>
        <h4>Example of REact Dome with thr follwing tags</h4>
        <button onClick={this.findDomNodeOne}>Find Node one</button>
        <button onClick={this.findDomNodeTwo}>Find Node two</button>
        <h4 id="myDivOne">Node One</h4>
        <h4 id="myDivTwo">Node Two</h4>
      </div>
    );
  }
}
