// import { useEffect, useState } from "react";

// const Mycart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const carts = JSON.parse(localStorage.getItem("carts")) || [];
//     setData(carts);
//   }, []);

//   return (
//     <>
//       <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Cart</h1>

//       {data.length === 0 ? (
//         <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
//           Empty Cart
//         </div>
//       ) : (
//         <div style={{ maxWidth: "800px", margin: "0 auto" }}>
//           {data.map((cart) => (
//             <div
//               key={cart.id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "10px",
//                 border: "1px solid #ddd",
//                 marginBottom: "10px",
//               }}
//             >
//               {/* Small Image */}
//               {cart.image && (
//                 <img
//                   src={cart.image}
//                   alt={cart.title}
//                   style={{
//                     width: "80px",
//                     height: "80px",
//                     objectFit: "contain",
//                     borderRadius: "4px",
//                     marginRight: "15px",
//                   }}
//                 />
//               )}
//               {/* Details */}
//               <div style={{ flex: 1, textAlign: "left" }}>
//                 <h3
//                   style={{
//                     margin: "0 0 5px 0",
//                     fontSize: "1rem",
//                   }}
//                 >
//                   {cart.title}
//                 </h3>

//                 {cart.description && (
//                   <p
//                     style={{
//                       fontSize: "0.85rem",
//                       margin: 0,
//                       maxWidth: "500px",
//                     }}
//                   >
//                     {cart.description}
//                   </p>
//                 )}
//                 {cart.price && (
//                   <div
//                     style={{
//                       fontWeight: "bold",
//                       fontSize: "1rem",
//                       marginTop: "5px",
//                     }}
//                   >
//                     ${cart.price}
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </>
//   );
// };

// export default Mycart;


import { useEffect, useState } from "react";

const MyCart = () => {
  const [data, setData] = useState([]);

  // ✅ Load cart items from localStorage on mount
  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    setData(carts);
  }, []);

  // 🗑️ Remove item from cart
  const handleRemove = (id) => {
    const updatedCart = data.filter((item) => item.id !== id);
    setData(updatedCart);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    alert("Item removed from cart!");
  };

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Cart</h1>

      {data.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Empty Cart
        </div>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {data.map((cart, index) => (
            <div
              key={cart.id || index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                marginBottom: "10px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                // backgroundColor: "#fff",
              }}
            >
              {/* 🖼️ Product Image */}
              {cart.image && (
                <img
                  src={cart.image}
                  alt={cart.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    borderRadius: "4px",
                    marginRight: "15px",
                  }}
                />
              )}

              {/* 📄 Product Details */}
              <div style={{ flex: 1, textAlign: "left" }}>
                <h3 style={{ margin: "0 0 5px 0", fontSize: "1rem" }}>
                  {cart.title}
                </h3>

                {cart.description && (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      margin: 0,
                      maxWidth: "500px",
                      color: "wheat",
                    }}
                  >
                    {cart.description}
                  </p>
                )}

                {cart.price && (
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginTop: "5px",
                    }}
                  >
                    ${cart.price}
                  </div>
                )}
              </div>

              {/* ❌ Remove Button */}
              <button
                onClick={() => handleRemove(cart.id)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 12px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MyCart;
