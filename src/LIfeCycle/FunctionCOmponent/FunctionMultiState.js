import React, { useState, useEffect } from "react";
const FunctionMultiState = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const header = document.querySelectorAll("#header1")[0];

    setInterval(() => {
      header.innerHTML = "Updated Header";
      setUserName("Mike Miller");
      setFirstName("Mike");
      setLastName("Miller");
    }, 5000);
  });
  const alertUserInfo = () => {
    alert(
      "User Name: " +
        userName +
        "\n" +
        "First Name: " +
        firstName +
        "\n" +
        "Last Name: " +
        lastName
    );
  };
  const handleUserNameInput = result => {
    setUserName(result.target.value);
  };
  const handleFirstNameInput = result => {
    setFirstName(result.target.value);
  };
  const handleLastNameInput = result => {
    setLastName(result.target.value);
  };
  return (
    <div>
      <h4 id="header1">This is a function with multiple states</h4>
      <input
        type="text"
        onChange={handleUserNameInput}
        placeholder="UserName"
        value={userName}
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        placeholder="First Name"
        value={firstName}
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        placeholder="Last Name"
        value={lastName}
      />
      <button onClick={alertUserInfo}>Alert User Info</button>
    </div>
  );
};
export default FunctionMultiState;
