import React from 'react'

export default function Functionwithpar() {
    const args = "Demo Vaule";
  return <Demo value={args}></Demo>
}

function Demo(props) {
    return <h4>{props.value}</h4>
    
}