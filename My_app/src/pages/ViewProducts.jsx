//  import React, { useEffect, useState } from "react";
// import api from "../../axios/axiosConfig";
// import { useNavigate } from "react-router-dom";

// const ViewProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   async function getSellerProducts() {
//     try {
//       setLoading(true);
//       const response = await api.get("/seller/get-products");
//       if (response.data.success) {
//         setProducts(response.data.products);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }
//   useEffect(() => {
//     getSellerProducts();
//   }, []);
//   return (
//     <div>
//       {loading ? (
//         <h1>Loading...</h1>
//       ) : (
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-around",
//           }}
//         >
//           {products.map((product) => (
//             <div
//               onClick={() => router(`/single-product/${product._id}`)}
//               style={{
//                 cursor: "pointer",
//                 width: "18%",
//                 height: "400px",
//                 borderRadius: "10px",
//                 border: "1px solid black",
//               }}
//               key={product._id}
//             >
//               <img
//                 style={{ height: "80%", width: "100%" }}
//                 src={product.imgUrl}
//               />
//               <h2>Name: {product.name}</h2>
//               <h3>Price: {product.price}</h3>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ViewProducts;

// import React, { useEffect, useState } from "react";
// import api from "../../axios/axiosConfig";
// import { useNavigate } from "react-router-dom";

// const ViewProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const router = useNavigate();

//   async function getSellerProducts() {
//     try {
//       setLoading(true);
//       const response = await api.get("/seller/get-products");
//       if (response.data.success) {
//         setProducts(response.data.products);
//       }
//     } catch (error) {
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {
//     getSellerProducts();
//   }, []);

//   return (
//     <>
//       <style>{`
//         .container {
//           padding: 30px;
//           // background: #fafafa;
//           text-align: center;
//         }
//         .grid {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 20px;
//           margin-top: 20px;
//         }
//         .card {
//           width: 220px;
//           border-radius: 10px;
//           background: white;
//           box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//           cursor: pointer;
//           transition: 0.3s;
//         }
//         // .card:hover {
//         //   transform: scale(1.05);
//         }
//         .card img {
//           width: 100%;
//           height: 180px;
//           border-top-left-radius: 10px;
//           border-top-right-radius: 10px;
//           object-fit: cover;
//         }
//         .info {
//           padding: 10px;
//         }
//         .info h3 {
//           font-size: 18px;
//           color: #333;
//           margin: 5px 0;
//         }
//         .info p {
//           color:black;
//           font-weight: 500;
//         }
//       `}</style>

//       <div className="container">
//         <h2> Your Products</h2>
//         {loading ? (
//           <h3>Loading...</h3>
//         ) : (
//           <div className="grid">
//             {products.map((product) => (
//               <div
//                 className="card"
//                 key={product._id}
//                 onClick={() => router(`/single-product/${product._id}`)}
//               >
//                 <img src={product.imgUrl} alt={product.name} />
//                 <div className="info">
//                   <h3>{product.name}</h3>
//                   <p>₹{product.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default ViewProducts;


import { useEffect, useState } from "react";
import api from "../axios/axiosConfig";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    title: "",
    category: "",
    brand: "",
    price: "",
    description: "",
  });

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await api.get("/products/getproducts");
      if (res.data.success) {
        setProducts(res.data.products);
        setSeller(res.data.seller);
      } else {
        setError(res.data.message || "Failed to fetch products");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Server error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await api.delete(`/products/deleteproducts/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Error deleting product");
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setForm({
      title: product.title,
      category: product.category,
      brand: product.brand,
      price: product.price,
      description: product.description,
    });
  };

  const handleSaveEdit = async () => {
  if (!form.title.trim() || !form.price) {
    alert("Title and price are required");
    return;
  }

  try {
    const res = await api.put(`/products/editproducts/${editingProduct._id}`, form);


    if (res.data.success) {
      setProducts((prev) =>
        prev.map((p) =>
          p._id === editingProduct._id ? { ...p, ...form } : p
        )
      );
      setEditingProduct(null);
      alert(" Product updated successfully!");
    } else {
      alert(res.data.message || "Failed to update product");
    }
  } catch (err) {
    console.error("Error updating product:", err);
    alert(err.response?.data?.message || "Error updating product");
  }
};


  if (loading)
    return <p style={{ textAlign: "center", marginTop: "40px", color: "#fff" }}>Loading...</p>;

  if (error)
    return (
      <p style={{ textAlign: "center", color: "red", marginTop: "40px" }}>
        {error}
      </p>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f0f0f",
        padding: "40px 20px",
        color: "#e0e0e0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "25px",
          background: "#1c1c1c",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.7)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "26px",
            color: "#00bcd4",
            fontWeight: "bold",
          }}
        >
           My Products
        </h2>

        {seller && (
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#2a2a2a",
              borderRadius: "8px",
              border: "1px solid #333",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#00bcd4" }}>
              Seller Information
            </h3>
            <p style={{ margin: "5px 0" }}>
              <b>Name:</b> {seller.name}
            </p>
            <p style={{ margin: "5px 0" }}>
              <b>Email:</b> {seller.email}
            </p>
          </div>
        )}

        {products.length === 0 ? (
          <p style={{ textAlign: "center", color: "#aaa" }}>No products found.</p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(clamp(220px, 30%, 300px), 1fr))",
              gap: "25px",
            }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                style={{
                  background: "#181818",
                  border: "1px solid #333",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.4)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 15px rgba(0,0,0,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 2px 10px rgba(0,0,0,0.4)";
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    objectFit: "cover",
                    backgroundColor: "#2a2a2a",
                  }}
                />
                <div style={{ padding: "15px" }}>
                  <h4
                    style={{
                      marginBottom: "8px",
                      fontSize: "18px",
                      color: "#fff",
                    }}
                  >
                    {product.title}
                  </h4>
                  <p style={{ margin: "5px 0", color: "#bbb" }}>
                    <b>Category:</b> {product.category}
                  </p>
                  <p style={{ margin: "5px 0", color: "#bbb" }}>
                    <b>Brand:</b> {product.brand}
                  </p>
                  <p style={{ margin: "5px 0", color: "#00e676" }}>
                    <b>Price:</b> ₹{product.price}
                  </p>
                  <p style={{ color: "#888", fontSize: "13px" }}>
                    Added on: {new Date(product.createdAt).toLocaleDateString()}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "12px",
                    }}
                  >
                    <button
                      onClick={() => handleEditClick(product)}
                      style={{
                        background: "#00bcd4",
                        color: "#fff",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      style={{
                        background: "#ff5252",
                        color: "#fff",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editingProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#1e1e1e",
              padding: "25px",
              borderRadius: "10px",
              width: "400px",
              color: "#fff",
            }}
          >
            <h3 style={{ marginBottom: "15px", textAlign: "center", color: "#00bcd4" }}>
              Edit Product
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  background: "#2b2b2b",
                  color: "#fff",
                }}
              />
              <input
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  background: "#2b2b2b",
                  color: "#fff",
                }}
              />
              <input
                placeholder="Brand"
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  background: "#2b2b2b",
                  color: "#fff",
                }}
              />
              <input
                placeholder="Price"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  background: "#2b2b2b",
                  color: "#fff",
                }}
              />
              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                style={{
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #444",
                  background: "#2b2b2b",
                  color: "#fff",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <button
                onClick={handleSaveEdit}
                style={{
                  background: "#00e676",
                  color: "#000",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                style={{
                  background: "#757575",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProducts;



