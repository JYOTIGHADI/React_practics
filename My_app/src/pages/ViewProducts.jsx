  import { useEffect, useState } from "react";
import api from "../axios/axiosConfig.js";

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

  // Handle Delete
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

  // Handle Edit Click
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

  // Handle Save Edit
  const handleSaveEdit = async () => {
    if (!form.title.trim() || !form.price) {
      alert("Title and price are required");
      return;
    }

    try {
      const res = await api.put(`/products/editproducts/${editingProduct._id}`, form);

      if (res.data.success) {
        setProducts((prev) =>
          prev.map((p) => (p._id === editingProduct._id ? { ...p, ...form } : p))
        );
        alert(res.data.message || "Product updated successfully!");
        setEditingProduct(null);
      } else {
        alert(res.data.message || "Failed to update product");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || " Error updating product");
    }
  };

  if (loading)
    return <p style={{ textAlign: "center", marginTop: "40px" }}>Loading...</p>;

  if (error)
    return (
      <p style={{ textAlign: "center", color: "red", marginTop: "40px" }}>{error}</p>
    );

  return (
    <div style={{ minHeight: "100vh", padding: "40px 15px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px", fontSize: "24px", color: "wheat" }}>
          My Products
        </h2>

        {seller && (
          <div
            style={{
              marginBottom: "30px",
              padding: "15px",
              background: "#f0f7ff",
              borderRadius: "8px",
              border: "1px solid #d0e3ff",
            }}
          >
            <h3 style={{ marginBottom: "10px", color: "#333" }}>Seller Information</h3>
            <p style={{ margin: "5px 0" }}><b>Name:</b> {seller.name}</p>
            <p style={{ margin: "5px 0" }}><b>Email:</b> {seller.email}</p>
          </div>
        )}

        {products.length === 0 ? (
          <p style={{ textAlign: "center" }}>No products found.</p>
        ) : (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "flex-start",
            }}
          >
            {products.map((product) => (
              <div
                key={product._id}
                style={{
                  flex: "1 1 250px",
                  maxWidth: "300px",
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.08)";
                }}
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "12px" }}>
                  <h4 style={{ fontSize: "18px", color: "#111", marginBottom: "6px" }}>
                    {product.title}
                  </h4>
                  <p style={{ margin: "3px 0", color: "#555", fontSize: "14px" }}>
                    <b>Category:</b> {product.category}
                  </p>
                  <p style={{ margin: "3px 0", color: "#555", fontSize: "14px" }}>
                    <b>Brand:</b> {product.brand}
                  </p>
                  <p style={{ margin: "3px 0", color: "#111", fontWeight: "500" }}>
                    ₹{product.price}
                  </p>

                  <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
                    <button
                      onClick={() => handleEditClick(product)}
                      style={{
                        flex: 1,
                        background: "#007bff",
                        color: "#fff",
                        border: "none",
                        padding: "6px 0",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "14px",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
                      style={{
                        flex: 1,
                        background: "#dc3545",
                        color: "#fff",
                        border: "none",
                        padding: "6px 0",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontSize: "14px",
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
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "black",
              padding: "20px",
              borderRadius: "10px",
              width: "350px",
              maxWidth: "90%",
            }}
          >
            <h3 style={{ marginBottom: "15px", textAlign: "center" }}>Edit Product</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <input
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />
              <input
                placeholder="Category"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
              />
              <input
                placeholder="Brand"
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
              />
              <input
                placeholder="Price"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div style={{ marginTop: "15px", display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={handleSaveEdit}
                style={{
                  flex: 1,
                  background: "#28a745",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
              >
                Save
              </button>
              <button
                onClick={() => setEditingProduct(null)}
                style={{
                  flex: 1,
                  background: "#6c757d",
                  color: "#fff",
                  border: "none",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginLeft: "5px",
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
