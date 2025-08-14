
import React, { useReducer } from "react";
function reducer(state, action) {
  if (action.type === "INCREMENT_COUNTER") {
    return { ...state, counter: state.counter + 1 };
  } 
  else if (action.type === "DECREMENT_COUNTER") {
    return { ...state, counter: state.counter - 1 };
  } 
  else if (action.type === "RESET_COUNTER") {
    return { ...state, counter: 0 };
  } 
  else {
    return state; 
  }
}


const initialState = { counter: 0 };

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT_COUNTER" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT_COUNTER" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET_COUNTER" })}>Reset</button>
    </div>
  );
};

export default UseReducerExample;





