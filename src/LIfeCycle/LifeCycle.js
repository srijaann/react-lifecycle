import React from "react";
import IntroToFunction from "./FunctionCOmponent/introToFunction";
import FunctionWithPar from "./FunctionCOmponent/Functionwithpar";
import ClassWithOutSt from "./ClassComponnet/ClassWithoutState";
import ClassWithState from "./ClassComponnet/ClassWithState";
import FunctionwithState from "./FunctionCOmponent/FunctionWithState";
import ClassMultiState from "./ClassComponnet/ClassMultiState";
import FunctionMultiState from "./FunctionCOmponent/FunctionMultiState";
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
        <FunctionWithPar></FunctionWithPar>
        <FunctionwithState></FunctionwithState>
        <FunctionMultiState></FunctionMultiState>
      </section>
    </div>
  );
}
