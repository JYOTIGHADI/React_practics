// import React, { useState } from "react";
// import axios from "axios";

// const Register = () => {
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });

//   const [error, setError] = useState({});
//   const [showPassword, setShowPassword] = useState({
//     password: false,
//     cpassword: false,
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//     setError({ ...error, [e.target.name]: "" });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let newErrors = {};

//     if (!userData.name) newErrors.name = "Name is required";
//     if (!userData.email) newErrors.email = "Email is required";
//     if (!userData.password) newErrors.password = "Password is required";
//     if (!userData.cpassword) newErrors.cpassword = "Confirm password is required";

//     if (userData.password && userData.cpassword && userData.password !== userData.cpassword) {
//       newErrors.cpassword = "Passwords do not match";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setError(newErrors);
//       return;
//     }

//     try {
//       const res = await axios.post("http://localhost:8000/api/v1/auth/register", userData);

//       if (res.data.success) {
//         alert(res.data.message);
//         setUserData({ name: "", email: "", password: "", cpassword: "" });
//         setError({});
//         setShowPassword({ password: false, cpassword: false });
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "400px",
//         margin: "40px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//         fontFamily: "Arial, sans-serif",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>

//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Name:</label>
//           <input
//             name="name"
//             type="text"
//             value={userData.name}
//             onChange={handleChange}
//             style={{ width: "95%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "4px" }}
//           />
//           {error.name && <p style={{ color: "red", fontSize: "0.9em" }}>{error.name}</p>}
//         </div>

//         {/* Email */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Email:</label>
//           <input
//             name="email"
//             type="email"
//             value={userData.email}
//             onChange={handleChange}
//             style={{ width: "95%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc", marginTop: "4px" }}
//           />
//           {error.email && <p style={{ color: "red", fontSize: "0.9em" }}>{error.email}</p>}
//         </div>

//         {/* Password */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Password:</label>
//           <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
//             <input
//               name="password"
//               type={showPassword.password ? "text" : "password"}
//               value={userData.password}
//               onChange={handleChange}
//               style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(prev => ({ ...prev, password: !prev.password }))}
//               style={{ padding: "8px 12px", borderRadius: "5px", border: "1px solid #ccc", cursor: "pointer" }}
//             >
//               {showPassword.password ? "Hide" : "Show"}
//             </button>
//           </div>
//           {error.password && <p style={{ color: "red", fontSize: "0.9em" }}>{error.password}</p>}
//         </div>

//         {/* Confirm Password */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Confirm Password:</label>
//           <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
//             <input
//               name="cpassword"
//               type={showPassword.cpassword ? "text" : "password"}
//               value={userData.cpassword}
//               onChange={handleChange}
//               style={{ flex: 1, padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(prev => ({ ...prev, cpassword: !prev.cpassword }))}
//               style={{ padding: "8px 12px", borderRadius: "5px", border: "1px solid #ccc", cursor: "pointer" }}
//             >
//               {showPassword.cpassword ? "Hide" : "Show"}
//             </button>
//           </div>
//           {error.cpassword && <p style={{ color: "red", fontSize: "0.9em" }}>{error.cpassword}</p>}
//         </div>

//         {/* Submit */}
//         <input
//           type="submit"
//           value="Register"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#4caf50",
//             color: "#fff",
//             fontSize: "16px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         />
//       </form>
//     </div>
//   );
// };

// export default Register;


// import axios from "axios";
// import  { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import api from "../axios/axiosConfig";

// const Register = () => {
// const user = useSelector((state) => state.user?.user);


//   const router = useNavigate();
//   const [userData, setUserData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     role: "",
//   });

//   const handleChange = (event) => {
//     console.log(event.target.value, event.target.name);
//     setUserData({ ...userData, [event.target.name]: event.target.value });
//   };
//   const handleChangeRole = (event) => {
//     setUserData({ ...userData, role: event.target.value });
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       if (
//         userData.name &&
//         userData.email &&
//         userData.password &&
//         userData.confirmPassword
//       ) {
//         // api call
//         const response = await api.post(
//           "http://localhost:8000/api/v1/auth/register",
//           userData
//         );

//         if (response.data.success) {
//           alert(response.data.message);
//           setUserData({
//             name: "",
//             email: "",
//             password: "",
//             confirmPassword: "",
//           });
//         } else {
//           alert(response.data.message);
//         }
//       } else {
//         alert("Please fill all fields");
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
//   useEffect(() => {
//     if (user?.userId) {
//       router("/");
//     }
//   }, [user]);
//   return (
//     <div>
//       <h1>Sign Up</h1>
//       <h2>
//         Name : {userData.name} Email : {userData.email} Password :{" "}
//         {userData.password} Confirm Password : {userData.confirmPassword}
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <label>Role</label>
//         <select onChange={handleChangeRole}>
//           <option value="user">User</option>
//           <option value="seller">Seller</option>
//           <option value="admin">Admin</option>
//         </select>
//         <br />
//         <label>Name</label>
//         <br />
//         <input
//           name="name"
//           type="text"
//           value={userData.name}
//           onChange={handleChange}
//         />
//         <br />
//         <label>Email</label>
//         <br />
//         <input
//           name="email"
//           type="email"
//           value={userData.email}
//           onChange={handleChange}
//         />
//         <br />
//         <label>Password</label>
//         <br />
//         <input
//           name="password"
//           type="password"
//           value={userData.password}
//           onChange={handleChange}
//         />
//         <button>Show</button>
//         <br />
//         <label>Confirm Password</label>
//         <br />
//         <input
//           name="confirmPassword"
//           type="password"
//           value={userData.confirmPassword}
//           onChange={handleChange}
//         />
//         <button>Show</button>
//         <br />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };
// export default Register;



import axios from "axios";
import { useState } from "react";
import api from "../axios/axiosConfig";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState({});
  const [passhandle, setPasshandle] = useState({
    password: false,
    cpassword: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!userData.name) newErrors.name = "Name is required";
    if (!userData.email) newErrors.email = "Email is required";
    if (!userData.password) newErrors.password = "Password is required";
    if (!userData.role) newErrors.role = "Role is required";
    if (!userData.cpassword)
      newErrors.cpassword = "Confirm password is required";
    if (
      userData.password &&
      userData.cpassword &&
      userData.password !== userData.cpassword
    ) {
      newErrors.cpassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    try {
      const res = await api.post(
        
        "/auth/register",
        userData
      );
      if (res.data.success) {
        alert(res.data.message);
        setUserData({ name: "", email: "", password: "", cpassword: "" });
        setError({});
        setPasshandle({ password: false, cpassword: false });
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
    console.log(userData);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
      <form onSubmit={handleSubmit}>
        
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={userData.role}
            onChange={handleChange}
            style={{ marginLeft: "8px" }}
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>
          {error.role && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.role}</p>
          )}
        </div>
        {/* Name Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Name:</label>
          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            type="text"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.name && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Email:</label>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.email && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.email}</p>
          )}
        </div>

        

        {/* Password Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Password:</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              type={passhandle.password ? "text" : "password"}
              style={{ flex: 1, padding: "8px" }}
            />
            <button
              type="button"
              onClick={() =>
                setPasshandle((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            >
              {passhandle.password ? "Hide" : "Show"}
            </button>
          </div>
          {error.password && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Confirm Password:</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              name="cpassword"
              value={userData.cpassword}
              onChange={handleChange}
              type={passhandle.cpassword ? "text" : "password"}
              style={{ flex: 1, padding: "8px" }}
            />
            <button
              type="button"
              onClick={() =>
                setPasshandle((prev) => ({
                  ...prev,
                  cpassword: !prev.cpassword,
                }))
              }
            >
              {passhandle.cpassword ? "Hide" : "Show"}
            </button>
          </div>
          {error.cpassword && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.cpassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Register"
          style={{
            width: "100%",
            padding: "10px",

            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default Register;