

import { useParams } from "react-router-dom";

const ParamsProduct = () => {
  const { productID } = useParams();
  const id = parseInt(productID); 

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/51R-cGYnKwL._AC_UL320_.jpg",
      description: "A cool and comfortable cotton t-shirt."
    },
    {
      id: 2,
      name: "Jeans",
      price: "₹999",
      image: "https://m.media-amazon.com/images/I/71L7gAlmAlL._SX569_.jpg",
      description: "Stylish denim jeans for casual wear."
    },
    {
      id: 3,
      name: "Sneakers",
      price: "₹1499",
      image: "https://m.media-amazon.com/images/I/71JRRh-Bx7L._AC_SR146,118_CB1169409_QL70_.jpg",
      description: "Trendy sneakers with excellent comfort."
    },
    {
      id: 4,
      name: "Jacket",
      price: "₹1999",
      image: "https://m.media-amazon.com/images/I/61Q0xlCF8zL._AC_UL640_QL65_.jpg",
      description: "Warm and fashionable winter jacket."
    },
    {
      id: 5,
      name: "Cap",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/31Itgu9XHpL._SS100_.jpg",
      description: "Cool cap to match your outfit."
    }
  ];


  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div> Product not found.</div>;
  }


  return (
    <div style={{ textAlign: "center", marginTop: "2rem",  }}>
      <h1> Product Details</h1>
      <img src={product.image} alt={product.name} height="150px" width="200x" />
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> {product.price}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Product ID:</strong> {product.id}</p>
    </div>
  );
};

export default ParamsProduct;








