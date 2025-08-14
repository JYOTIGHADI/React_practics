
import React, { useRef } from "react";

export default function UseRefExample() {
  const countRef = useRef(1);

  const increase = () => {
    countRef.current++;
    console.log("Count is now:", countRef.current);
  };

  return (
    <div>
      <h1>UseRef Example</h1>
      <p>Count: {countRef.current}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
}




