// import React from "react "; 
// import './navbar.css';  
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();
  return (
    <>
      <button onClick={() => router("/")}>Home</button>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/register")}>Register</button>
      <button onClick={() => router("/useffect")}>UseEffect</button>
      <button onClick={() => router("/usestate")}>UseState</button>
      <button onClick={() => router("/useparams")}>UseParams</button>
      <button onClick={() => router("/todo")}>Todo</button>
      <button onClick={() => router("/Notfound")}>NotFound</button>

    </>
  );
};

export default Navbar;