import { useNavigate } from "react-router-dom";


function UseParams() {
  const router = useNavigate();

  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: "₹499",
      image: "https://m.media-amazon.com/images/I/51R-cGYnKwL._AC_UL320_.jpg"
    },
    {
      id: 2,
      name: "Jeans",
      price: "₹999",
      image: "https://m.media-amazon.com/images/I/71L7gAlmAlL._SX569_.jpg"
    },
    {
      id: 3,
      name: "Sneakers",
      price: "₹1499",
      image: "https://m.media-amazon.com/images/I/71JRRh-Bx7L._AC_SR146,118_CB1169409_QL70_.jpg"
    },
    {
      id: 4,
      name: "Jacket",
      price: "₹1999",
      image: "https://m.media-amazon.com/images/I/61Q0xlCF8zL._AC_UL640_QL65_.jpg"
    },
    {
      id: 5,
      name: "Cap",
      price: "₹299",
      image: "https://m.media-amazon.com/images/I/31Itgu9XHpL._SS100_.jpg"
    }
  ];

  return (
    <div>
      <h1>useParams</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
              width: "200px",
              textAlign: "center",
              cursor: "pointer"
            }}
            onClick={() => router(`/paramsproduct/${product.id}`)}
          >
            <img src={product.image} alt={product.name} width="150" height="200" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UseParams;

