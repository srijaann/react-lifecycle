import React from "react";
import IntroToFunction from "./FunctionComponent/introToFunction";
import Functionwithpar from "./FunctionComponent/Functionwithpar";
import ClassWithOutSt from "./ClassComponnet/ClassWithoutState";
import ClassWithState from "./ClassComponnet/ClassWithState";
import FunctionwithState from "./FunctionComponent/FunctionWithState";
import ClassMultiState from "./ClassComponnet/ClassMultiState";
import FunctionMultiState from "./FunctionComponent/FunctionMultiState";

export default function Lifecycle() {
  return (
    <div>
      <section>
        <h1>About Class Compontent</h1>
        <ClassWithOutSt></ClassWithOutSt>
        <ClassWithState></ClassWithState>
        <ClassMultiState></ClassMultiState>
      </section>
      <section>
        <h1>About functional Component</h1>
        <IntroToFunction></IntroToFunction>
        <Functionwithpar></Functionwithpar>
        <FunctionwithState></FunctionwithState>
        <FunctionMultiState></FunctionMultiState>
      </section>
    </div>
  );
}
