import React, { useMemo, useState } from "react";


const UseMemo = () => {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(prev => prev + 1);
  };

  const heavyResult = useMemo(() => {
    console.log("Running heavy calculation...");
    let result = counter;
    for (let i = 0; i < 1000000000; i++) {
      result += 1;
    }
    return result;
  }, [counter]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <h2>Heavy Calculation Result: {heavyResult}</h2>
    </div>
  );
};

export default UseMemo;




