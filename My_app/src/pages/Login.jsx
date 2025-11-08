import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../redux/userSlice"; // make sure your slice has this action
import api from "../axios/axiosConfig";

const Login = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userData || {}); // Fix for undefined
  const { user } = userState;

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!userData.email) newErrors.email = "Email is required";
    if (!userData.password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      const res = await api.post("/auth/login", userData);

      if (res.data.success) {
        dispatch(loginSuccess(res.data.user));
        alert(res.data.message);
        setUserData({ email: "", password: "" });
        setError({});
        setShowPassword(false);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Login User: {user?.name || ""}
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Email:</label>
          <input
            name="email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            style={{
              width: "95%",
              padding: "8px",
              marginTop: "4px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          {error.email && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.email}</p>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Password:</label>
          <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={userData.password}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                borderRadius: "5px",
                border: "1px solid #ccc",
                // backgroundColor: "#f0f0f0",
              }}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {error.password && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Login"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#4caf50",
            color: "#fff",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default Login;
