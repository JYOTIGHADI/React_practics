// import React from 'react'

// const Navbar = () => {
//   return (
//     <div>
//       <h1>Navbar</h1>
//     </div>
//   )
// }

// export default Navbar

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

    </>
  );
};

export default Navbar;