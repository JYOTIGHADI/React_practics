// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       <h1>Register</h1>
//       <button onClick={()=>navigate('/Login')}>Loginr</button>
//       <button onClick={()=>navigate("/Home")}>Home</button>
//     </div>
//   )
// }

// export default Register

import { useNavigate } from "react-router-dom";

function Register() {
  const router = useNavigate();
  return (
    <div>
      <h1>Register</h1>
      <button onClick={() => router("/login")}>Login</button>
      <button onClick={() => router("/")}>Home</button>
    </div>
  );
}

export default Register;