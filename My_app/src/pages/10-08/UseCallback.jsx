import React, { useState, useCallback } from "react";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button><br /><br />
      <br />
      <input
        type="text"
        value={text}
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      /><br/> <br/>
      <ChildComponent onButtonClick={increment} />
    </div>
  );
};

const ChildComponent = React.memo(({ onButtonClick }) => {
  console.log("Child rendered");
  return  <button onClick={onButtonClick}>Increment from Child</button>;
});

export default UseCallbackExample;





