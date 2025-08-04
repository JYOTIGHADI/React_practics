
import { useState } from "react";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [allUser, setAllUser] = useState([]);
  const [popup, setPopup] = useState({ show: false, text: "", type: "" });

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = userData;

    if (!name || !email || !password || !confirmPassword) {
      showPopup(" Please fill in all fields.", "error");
      return;
    }

    if (password !== confirmPassword) {
      showPopup(" Passwords do not match.", "error");
      return;
    }

    setAllUser([...allUser, userData]);
    setUserData({ name: "", email: "", password: "", confirmPassword: "" });
    showPopup(" Registration successful!", "success");
  };

  const showPopup = (text, type) => {
    setPopup({ show: true, text, type });
    setTimeout(() => {
      setPopup({ show: false, text: "", type: "" });
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: "center" }}>Register Page</h1>

      {popup.show && (
        <div
          style={{
            ...styles.popup,
            backgroundColor: popup.type === "error" ? "#ffcccc" : "#7ae77aff",
            color: popup.type === "error" ? "#cc0000" : "#006600",
          }}
        >
          {popup.text}
        </div>
      )}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={userData.name}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={userData.email}
          placeholder="Enter your email"
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={userData.password}
          placeholder="Enter password"
        />

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={userData.confirmPassword}
          placeholder="Confirm password"
        />

        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>

      <div>
        <h2 style={{ marginTop: "30px", textAlign: "center" }}>All Users</h2>
        {allUser.map((user, idx) => (
          <div key={idx} style={styles.userCard}>
            <h3>User {idx + 1}</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password:</strong> {user.password}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",

  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  userCard: {

    margin: "10px auto",
    padding: "15px",
    borderRadius: "8px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  popup: {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",

    padding: "100px 80px",
    borderRadius: "6px",
    fontWeight: "bold",
    textAlign: "center",

  },
};

export default Register;

