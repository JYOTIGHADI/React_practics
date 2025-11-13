import { useEffect, useState } from "react";
import api from "../axios/axiosConfig";

const MyCart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await api.get("/cart/getcart", { withCredentials: true });
      if (res.data.success) setCart(res.data.cart.items);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const res = await api.post("/cart/remove", { productId }, { withCredentials: true });
      if (res.data.success) {
        setCart(res.data.cart.items);
        setMessage(res.data.message);

        // ✅ Show alert when product is removed
        alert(res.data.message || "Product removed from cart!");

        // Clear inline message after 2 seconds
        setTimeout(() => setMessage(""), 2000);
      }
    } catch (err) {
      console.error(err);
      alert("Error removing product from cart."); // Optional: alert on error
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.productId?.price || 0) * (item.quantity || 1),
    0
  );

  if (loading)
    return (
      <p style={{ textAlign: "center", marginTop: "40px", fontSize: "18px" }}>
        Loading cart...
      </p>
    );

  return (
    <div style={{ minHeight: "100vh", padding: "40px 15px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, #f0f4f8, #d9e2ec)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>
          My Cart
        </h2>

        {message && (
          <p
            style={{
              textAlign: "center",
              color: "green",
              fontWeight: "500",
              marginBottom: "15px",
            }}
          >
            {message}
          </p>
        )}

        {cart.length === 0 ? (
          <p style={{ textAlign: "center", color: "#555", fontSize: "16px" }}>
            Your cart is empty.
          </p>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "flex-start",
              }}
            >
              {cart.map((item) => {
                const product = item.productId;
                return (
                  <div
                    key={product._id}
                    style={{
                      flex: "1 1 250px",
                      maxWidth: "300px",
                      borderRadius: "12px",
                      padding: "15px",
                      background: "#fff",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 20px rgba(0,0,0,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 8px rgba(0,0,0,0.08)";
                    }}
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginBottom: "12px",
                        backgroundColor: "#f3f3f3",
                      }}
                    />
                    <h4
                      style={{
                        fontSize: "16px",
                        color: "#111",
                        marginBottom: "6px",
                      }}
                    >
                      {product.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "#555",
                        marginBottom: "6px",
                      }}
                    >
                      Price: ₹{product.price} x {item.quantity}
                    </p>
                    <button
                      onClick={() => handleRemove(product._id)}
                      style={{
                        width: "100%",
                        padding: "8px 0",
                        background: "#dc3545",
                        color: "#fff",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "#b02a37")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "#dc3545")
                      }
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>

            <h3
              style={{
                textAlign: "right",
                marginTop: "25px",
                fontSize: "18px",
                color: "#333",
              }}
            >
              Total: ₹{totalPrice.toFixed(2)}
            </h3>

            <div style={{ textAlign: "right", marginTop: "15px" }}>
              <button
                style={{
                  background: "#32C0B7",
                  color: "#fff",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#28a197")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#32C0B7")}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MyCart;
