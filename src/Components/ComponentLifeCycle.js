import React, { Component } from "react";

export default class ComponentLifeCycle extends Component {
  render() {
    return (
      <div>
        <h1>This is Componnet Life Cycle with each phase.</h1>
        <ol>
          <li>Intial Phase(Birth of Component)</li>
          <ol type="a">
            <li>
              <strong>getDefaultProps()</strong>
              <p>
                It will used default value of this.props and create componnet in
                react JS
              </p>
            </li>
            <li>
              <strong>getInitialState()</strong>
              <p>
                This will used the default value of this.state and create and
                pass into ckass component
              </p>
            </li>
          </ol>
          <li>Mounting Phase
            <ol type="a">
              <li>constructor()</li>
              <li>static getDerivedStateFromProps()</li>
              <li>render()</li>
              <li>componentDidMount()<br></br>
                <strong>Note:Please do not use componentWillMount() function</strong>
              </li>
            </ol>
          </li>
          <li>Updating Phase</li>
          <li>Unmounting Phase</li>
        </ol>
      </div>
    );
  }
}
