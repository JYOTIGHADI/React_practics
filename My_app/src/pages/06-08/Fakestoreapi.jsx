import axios from "axios";
import { useEffect, useState } from "react";
import "./fetch.css";

const Fetchproducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res) {
          setData(res.data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <h1 className="products-title">Fetch Products</h1>
      <div className="products-container">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <p className="title">{product.title}</p>
            <p className="price">Price: ${product.price}/-</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Fetchproducts;
