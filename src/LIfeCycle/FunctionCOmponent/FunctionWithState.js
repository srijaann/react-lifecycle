import React, { useState } from 'react'



//Function with state(use State)
export default function FunctionWithState() {

    const [name, setName] = useState("");
    const alertName = () => {
        alert(name);
    }

    const handleNameInput = printName => {
        setName(printName.target.value);
    };
  return (
    <div>
          <h4>This is a function with State(useState) hooks        
      </h4>
          <input type='text'
              onChange={handleNameInput}
         value={name}
              placeholder="Your Name"
          ></input>
          <button onClick={alertName}>Alert Your Name</button>
          
    </div>
  )
}
