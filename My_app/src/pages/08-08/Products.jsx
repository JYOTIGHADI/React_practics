// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./product.css"; // if file name is product.css


// const Products = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get("https://fakestoreapi.com/products");
//         setData(res.data || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) {
//     return <div className="spinner"></div>;
//   }

//   return (
//     <div className="products-container">
//       <h1 className="page-title"> Products</h1>
//       <div className="products-grid">
//         {data.map((product) => (
//           <div
//             onClick={() => navigate(`/productsInfo/${product.id}`)}
//             key={product.id}
//             className="product-card"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="product-image"
//             />
//             <p className="product-title">{product.title}</p>
//             <p className="product-price">${product.price}/-</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        <style>{styles}</style>
        <div className="spinner"></div>
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="products-container">
        <h1 className="page-title">Products</h1>
        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => navigate(`/productsInfo/${product.id}`)}
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
    </>
  );
};

// CSS as a string
const styles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.spinner {
  border: 4px solid #ccc;
  border-top: 4px solid #333;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 1s linear infinite;
  margin: 60px auto;
}
.products-container {
  padding: 20px;
  text-align: center;
  font-family: 'Segoe UI', sans-serif;
}
.page-title {
  font-size: 2rem;
  margin-bottom: 30px;
  color: wheat;
}
.products-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
}
.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 220px;
  padding: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
.product-image {
  height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 10px;
}
.product-title {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 5px;
  color: #333;
  height: 45px;
  overflow: hidden;
}
.product-price {
  color: #28a745;
  font-weight: bold;
  font-size: 1.1rem;
}
`;

export default Products;

