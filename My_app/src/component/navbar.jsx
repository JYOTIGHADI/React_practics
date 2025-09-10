// import React from "react "; 
// import './navbar.css';  
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();
  return (
    <>
      {/* <button onClick={() => router("/")}>Home</button> */}
      {/* <button onClick={() => router("/login")}>Login</button> */}
      {/* <button onClick={() => router("/register")}>Register</button> */}
      {/* <button onClick={() => router("/useffect")}>UseEffect</button> */}
      {/* <button onClick={() => router("/usestate")}>UseState</button> */}
      {/* <button onClick={() => router("/useparams")}>UseParams</button> */}
      {/* <button onClick={() => router("/todo")}>Todo</button> */}
      {/* <button onClick={() => router("/Notfound")}>NotFound</button> */}
      {/* <button onClick={() => router("/fakestore")}>Fetch Products</button> */}
      {/* <button onClick={() => router("/delete")}>Delete</button> */}
      {/* <button onClick={() => router("/products")}>Products</button> */}
      {/* <button onClick={() => router("/productsInfo/1")}>Product Info</button> */}
      {/* <button onClick={() => router("/mycart")}>My Cart</button> */}
      {/* <button onClick={() => router("/UseMemo")}>UseMemo</button> */}
      {/* <button onClick={() => router("/UseCallback")}>UseCallback</button> */}
      {/* <button onClick={() => router("/UseRef")}>UseRef</button>
      <button onClick={() => router("/UseReducer")}>UseReducer</button> */}
      {/* <button onClick={() => router("/redux-counter")}>Redux Counter</button> */}
      <button onClick={() => router("/redux-addtocart")}>Redux Add to Cart</button>
      <button onClick={() => router("/calculator")}>Calculator</button>
      
    </>
  );
};

export default Navbar;