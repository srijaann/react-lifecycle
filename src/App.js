/* eslint-disable react/jsx-pascal-case */
import React from "react";
import "./App.css";
import Component_Api from "./Components/Component_Api";
import ComponentLifeCycle from "./Components/ComponentLifeCycle";

import Lifecycle from "./LIfeCycle/LifeCycle";

function App() {
  return (
    <div className="App">
      <Component_Api></Component_Api>
      <ComponentLifeCycle></ComponentLifeCycle>
      <Lifecycle></Lifecycle>
    </div>
  );
}

export default App;
