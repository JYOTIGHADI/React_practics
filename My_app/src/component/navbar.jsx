// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../redux/userSlice.js";
// import api from "../axios/axiosConfig.js";


// const Navbar = () => {
//   const router = useNavigate();
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user.user);

//   // Redirect to login
//   const redirectToLogin = () => {
//     router("/login");
//   };

//   // Logout handler
//   const handleLogout = async () => {
//     try {
//       const response = await api.get("/auth/logout");


//       if (response.data.success) {
//         dispatch(logout());

//         alert(response.data.message);
//         router("/");
//       }
//     } catch (error) {
//       console.log("Error during logout:", error);
//     }
//   };

//   return (
//     <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
//       {/* Common routes */}
//       {/* <button onClick={() => router("/")}>Home</button>
//       <button onClick={() => router("/useffect")}>UseEffect</button>
//       <button onClick={() => router("/usestate")}>UseState</button>
//       <button onClick={() => router("/useparams")}>UseParams</button>
//       <button onClick={() => router("/todo")}>Todo</button>
//       <button onClick={() => router("/Notfound")}>NotFound</button>
//       <button onClick={() => router("/fakestore")}>Fetch Products</button>
//       <button onClick={() => router("/delete")}>Delete</button>
//       <button onClick={() => router("/products")}>Products</button>
//       <button onClick={() => router("/productsInfo/1")}>Product Info</button>
//       <button onClick={() => router("/mycart")}>My Cart</button>
//       <button onClick={() => router("/UseMemo")}>UseMemo</button>
//       <button onClick={() => router("/UseCallback")}>UseCallback</button>
//       <button onClick={() => router("/UseRef")}>UseRef</button>
//       <button onClick={() => router("/UseReducer")}>UseReducer</button>
//       <button onClick={() => router("/redux-counter")}>Redux Counter</button>
//       <button onClick={() => router("/redux-addtocart")}>Redux Add to Cart</button>
//       <button onClick={() => router("/calculator")}>Calculator</button> */}

//       {/* Auth routes */}
//       {/* {!user && <button onClick={() => router("/register")}>Register</button>}
//       {!user && <button onClick={redirectToLogin}>Login</button>} */}

//       {/* Seller routes */}
//       {user?.role === "seller" && (
//         <>
//           <button onClick={() => router("/add-product")}>Add Product</button>
//           <button onClick={() => router("/view-products")}>View Products</button>
//           <button onClick={() => router("/view-orders")}>View Orders</button>
//         </>
//       )}

//       {/* User routes */}
//       {user?.role === "user" && (
//         <>
//           <button onClick={() => router("/products")}>Products</button>
//           <button onClick={() => router("/cart")}>Cart</button>
//           <button onClick={() => router("/orders")}>View Orders</button>
//         </>
//       )}

//       {/* Logout */}
//       {user && <button onClick={handleLogout}>Logout</button>}
//     </div>
//   );
// };

// export default Navbar;




import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../axios/axiosConfig";
import { logout } from "../redux/userSlice.js";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");

      if (res.data.success) {
        dispatch(logout());
        alert("Logout successful");
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Something went wrong during logout.");
    }
  };

  return (
    <>
      {/* <button onClick={() => navigate("/")}>Home</button> */}

      {!user ? (
        <>
          {/* <button onClick={() => navigate("/login")}>Login</button> */}
          {/* <button onClick={() => navigate("/register")}>Register</button> */}
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>

          {user?.role === "user" && (
            <button onClick={() => navigate("/view-products")}>
              View Products
            </button>
          )}
          {user?.role === "user" && (
            <button onClick={() => navigate("/mycart")}>My Cart</button>
          )}
          {user?.role === "admin" && (
            <button onClick={() => navigate("/admin")}>Admin Panel</button>
          )}
          {user?.role === "seller" && (
            <button onClick={() => navigate("/add-product")}>Add Product</button>
          )}
          {user?.role === "seller" && (
            <button onClick={() => navigate("/view-products")}>
              View Products
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;
