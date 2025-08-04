import React from "react";
import { useState } from "react";
function useStateexample() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);
  const [counter, setCounter] = useState(1);
  console.log(counter, "counter");
  function Increment() {
    setCounter((prevState) => prevState + 1);
    // setCounter(counter + 1);
  }
  function Decrement() {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
    }
  }
  function Reset() {
    setCounter(1);
  }
  function toggleLogin() {
    setUserLoggedIn(!userLoggedIn);
  }
  return (
    
    <div>
        <h1>UseState</h1>
      {userLoggedIn ? (
        <div>
          <h1>Welcome.</h1>
          <button onClick={toggleLogin}> Click to Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please login In.</h1>
          <button onClick={toggleLogin}>Click to Login</button>
        </div>
      )}
      <h1>Coutner : {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default useStateexample;