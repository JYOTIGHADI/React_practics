// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { logout } from "../redux/userSlice.js";
// // import api from "../axios/axiosConfig.js";


// // const Navbar = () => {
// //   const router = useNavigate();
// //   const dispatch = useDispatch();
// //   const user = useSelector((state) => state.user.user);

// //   // Redirect to login
// //   const redirectToLogin = () => {
// //     router("/login");
// //   };

// //   // Logout handler
// //   const handleLogout = async () => {
// //     try {
// //       const response = await api.get("/auth/logout");


// //       if (response.data.success) {
// //         dispatch(logout());

// //         alert(response.data.message);
// //         router("/");
// //       }
// //     } catch (error) {
// //       console.log("Error during logout:", error);
// //     }
// //   };

// //   return (
// //     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
// //       {/* Common routes */}
// //       {/* <button onClick={() => router("/")}>Home</button>
// //       <button onClick={() => router("/useffect")}>UseEffect</button>
// //       <button onClick={() => router("/usestate")}>UseState</button>
// //       <button onClick={() => router("/useparams")}>UseParams</button>
// //       <button onClick={() => router("/todo")}>Todo</button>
// //       <button onClick={() => router("/Notfound")}>NotFound</button>
// //       <button onClick={() => router("/fakestore")}>Fetch Products</button>
// //       <button onClick={() => router("/delete")}>Delete</button>
// //       <button onClick={() => router("/products")}>Products</button>
// //       <button onClick={() => router("/productsInfo/1")}>Product Info</button>
// //       <button onClick={() => router("/mycart")}>My Cart</button>
// //       <button onClick={() => router("/UseMemo")}>UseMemo</button>
// //       <button onClick={() => router("/UseCallback")}>UseCallback</button>
// //       <button onClick={() => router("/UseRef")}>UseRef</button>
// //       <button onClick={() => router("/UseReducer")}>UseReducer</button>
// //       <button onClick={() => router("/redux-counter")}>Redux Counter</button>
// //       <button onClick={() => router("/redux-addtocart")}>Redux Add to Cart</button>
// //       <button onClick={() => router("/calculator")}>Calculator</button> */}

// //       {/* Auth routes */}
// //       {/* {!user && <button onClick={() => router("/register")}>Register</button>}
// //       {!user && <button onClick={redirectToLogin}>Login</button>} */}

// //       {/* Seller routes */}
// //       {user?.role === "seller" && (
// //         <>
// //           <button onClick={() => router("/add-product")}>Add Product</button>
// //           <button onClick={() => router("/view-products")}>View Products</button>
// //           <button onClick={() => router("/view-orders")}>View Orders</button>
// //         </>
// //       )}

// //       {/* User routes */}
// //       {user?.role === "user" && (
// //         <>
// //           <button onClick={() => router("/products")}>Products</button>
// //           <button onClick={() => router("/cart")}>Cart</button>
// //           <button onClick={() => router("/orders")}>View Orders</button>
// //         </>
// //       )}

// //       {/* Logout */}
// //       {user && <button onClick={handleLogout}>Logout</button>}
// //     </div>
// //   );
// // };

// // export default Navbar;



import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../axios/axiosConfig";
import { logout } from "../redux/userSlice.js";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");
      if (res.data.success) {
        dispatch(logout());
        alert(res.data.message || "Logout successful");
        navigate("/");
      } else {
        alert(res.data.message || "Failed to logout");
      }
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Something went wrong during logout.");
    }
  };

  const handleSearch = () => {
    if (search.trim()) navigate(`/search?query=${search}`);
  };

  const buttonStyle = {
    padding: "6px 14px",
    marginLeft: "10px",
    borderRadius: "2px",
    border: "none",
    background: "#fff",
    color: "#2874f0",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  };

  const logoutStyle = { ...buttonStyle, background: "#ff6161", color: "#fff" };

  return (
    
    <header
      style={{
        width: "100%",
        background: "#2874f0",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 50px",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        flexWrap: "wrap",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
     EliteCart
      </div>

      {/* Search Bar */}
      <div style={{ flex: 1, margin: "0 30px" }}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for products, brands and more"
          style={{
            width: "50%",
            padding: "8px 12px",
            borderRadius: "2px",
            border: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Right Buttons */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        {!user && (
          <>
            <button style={buttonStyle} onClick={() => navigate("/login")}>
              Login
            </button>
            <button style={buttonStyle} onClick={() => navigate("/register")}>
              Register
            </button>
          </>
        )}

        {user && (
          <>
            {/* User Buttons */}
            {user.role === "user" && (
              <>
                <button style={buttonStyle} onClick={() => navigate("/viewallproducts")}>
                  View All Products
                </button>
                <button style={buttonStyle} onClick={() => navigate("/cartpage")}>
                  My Cart
                </button>
              </>
            )}

            {/* Seller Buttons */}
            {user.role === "seller" && (
              <>
                <button style={buttonStyle} onClick={() => navigate("/add-product")}>
                  Add Product
                </button>
                <button style={buttonStyle} onClick={() => navigate("/view-products")}>
                  View Products
                </button>
              </>
            )}

            {/* Admin Buttons */}
            {user.role === "admin" && (
              <button style={buttonStyle} onClick={() => navigate("/admin")}>
                Admin Panel
              </button>
            )}

            {/* Logout */}
            <button style={logoutStyle} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
