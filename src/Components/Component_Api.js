import React, { Component } from "react";
import IntroSetState from './Api_Functions/IntroSetState';
import ForceState from './Api_Functions/ForceState';
import DomNode from './Api_Functions/DomNode';

export default class Component_Api extends Component {
  render() {
    return (
      <div>
        <h1>This is Class Component API functions types</h1>
        <p>
          React Component API it top Level api in React JS.
        </p>
          It helps us to 
          <ol>
            <li>Create HTML element</li>
            <li>Transform/Update Element</li>
            <li>Reuse tge Element</li>
          </ol>
        
        <h3>Following are the threee function in Componet API</h3>
        <ol>
          <li>setState()
          <IntroSetState></IntroSetState></li><br></br>
          <li>forceUpdate()
          <ForceState></ForceState></li><br></br>
          <li>findDomNode()
            <DomNode></DomNode>
          </li>
        </ol>
      </div>
    );
  }
}
