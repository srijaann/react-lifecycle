import React from 'react'

// This is example of function without props/args
export default function IntroToFunction() {
  return <Demo></Demo>
}


function Demo(params) {
    const printName = "Test User one";
    return <h5>{printName}</h5>
    
}
