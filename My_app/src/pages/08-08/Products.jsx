import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css"; 

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  return (
    <div className="products-container">
      <h1 className="page-title"> Products</h1>
      <div className="products-grid">
        {data.map((product) => (
          <div
            onClick={() => navigate(`/productsInfo/${product.id}`)}
            key={product.id}
            className="product-card"
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">${product.price}/-</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
