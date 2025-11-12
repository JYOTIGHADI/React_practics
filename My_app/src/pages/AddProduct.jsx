// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import api from "../axios/axiosConfig";

// const AddProduct = () => {
//   const user = useSelector((state) => state.user.user); // Optional: if you store user data in Redux
//   const [productData, setProductData] = useState({
//     title: "",
//     category: "",
//     imageUrl: "",
//     brand: "",
//     description: "",
//     price: "",
//     quantity: "",
//     inStock: true,
//     rating: "",
//   });

//   const [error, setError] = useState({});
//   const categories = ["shoes", "shirts", "t-shirts", "jeans"];

//   // ---------------- HANDLE CHANGE ----------------
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setProductData({
//       ...productData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//     setError({ ...error, [name]: "" });
//   };

//   // ---------------- HANDLE SUBMIT ----------------
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     let newErrors = {};

//     // basic validation
//     if (!productData.title) newErrors.title = "Title is required";
//     if (!productData.category) newErrors.category = "Category is required";
//     if (!productData.imageUrl) newErrors.imageUrl = "Image URL is required";
//     if (!productData.brand) newErrors.brand = "Brand is required";
//     if (!productData.price) newErrors.price = "Price is required";
//     if (!productData.description)
//       newErrors.description = "Description is required";
//     if (!productData.quantity) newErrors.quantity = "Quantity is required";

//     if (Object.keys(newErrors).length > 0) {
//       setError(newErrors);
//       return;
//     }

//     try {
//       const response = await api.post(
        
//         "http://localhost:8000/api/v1/add-product",
//         productData
//       );

//       if (response.data.success) {
//         alert(response.data.message || "Product added successfully!");
//         setProductData({
//           title: "",
//           category: "",
//           imageUrl: "",
//           brand: "",
//           description: "",
//           price: "",
//           quantity: "",
//           inStock: true,
//           rating: "",
//         });
//         setError({});
//       } else {
//         alert(response.data.message || "Something went wrong");
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Server error");
//     }
//   };

//   // ---------------- FORM UI ----------------
//   return (
//     <div
//       style={{
//         maxWidth: "450px",
//         margin: "40px auto",
//         padding: "25px",
//         border: "1px solid black",
//         borderRadius: "10px",
//         // backgroundColor: "lightgrey",
//       }}
//     >
//       <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Product Title */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Title:</label>
//           <input
//             name="title"
//             value={productData.title}
//             onChange={handleChange}
//             type="text"
//             style={{ width: "95%", padding: "8px" }}
//           />
//           {error.title && <p style={{ color: "red" }}>{error.title}</p>}
//         </div>

//         {/* Category */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Category:</label>
//           <select
//             name="category"
//             value={productData.category}
//             onChange={handleChange}
//             style={{ width: "95%", padding: "8px" }}
//           >
//             <option value="">Select Category</option>
//             {categories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//           {error.category && <p style={{ color: "red" }}>{error.category}</p>}
//         </div>

//         {/* Brand */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Brand:</label>
//           <input
//             name="brand"
//             value={productData.brand}
//             onChange={handleChange}
//             type="text"
//             style={{ width: "95%", padding: "8px" }}
//           />
//           {error.brand && <p style={{ color: "red" }}>{error.brand}</p>}
//         </div>

//         {/* Image URL */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Image URL:</label>
//           <input
//             name="imageUrl"
//             value={productData.imageUrl}
//             onChange={handleChange}
//             type="text"
//             style={{ width: "95%", padding: "8px" }}
//           />
//           {error.imageUrl && <p style={{ color: "red" }}>{error.imageUrl}</p>}
//         </div>

//         {/* Description */}
//         {/* <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={productData.description}
//             onChange={handleChange}
//             rows="3"
//             style={{ width: "95%", padding: "8px", resize: "none" }}
//           ></textarea>
//           {error.description && (
//             <p style={{ color: "red" }}>{error.description}</p>
//           )}
//         </div> */}

//         {/* Price */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Price:</label>
//           <input
//             name="price"
//             value={productData.price}
//             onChange={handleChange}
//             type="number"
//             step="0.01"
//             style={{ width: "95%", padding: "8px" }}
//           />
//           {error.price && <p style={{ color: "red" }}>{error.price}</p>}
//         </div>

//         {/* Quantity */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>Quantity:</label>
//           <input
//             name="quantity"
//             value={productData.quantity}
//             onChange={handleChange}
//             type="number"
//             style={{ width: "95%", padding: "8px" }}
//           />
//           {error.quantity && <p style={{ color: "red" }}>{error.quantity}</p>}
//         </div>

//         {/* In Stock */}
//         <div style={{ marginBottom: "12px", textAlign: "left" }}>
//           <label>
//             <input
//               name="inStock"
//               type="checkbox"
//               checked={productData.inStock}
//               onChange={handleChange}
//             />
//             &nbsp; In Stock
//           </label>
//         </div>

//         {/* Submit Button */}
//         <input
//           type="submit"
//           value="Submit Product"
//           style={{
//             width: "100%",
//             padding: "10px",
//             backgroundColor: "#222",
//             color: "white",
//             border: "none",
//             cursor: "pointer",
//             fontSize: "16px",
//           }}
//         />
//       </form>
//     </div>
//   );
// };

// export default AddProduct;


import { useState } from "react";
import api from "../axios/axiosConfig.js";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    imageUrl: "",
    brand: "",
    description: "",
    price: "",
    inStock: true,
    rating: "",
  });

  const [error, setError] = useState({});

  const categories = ["shoes", "shirts", "t-shirts", "jeans"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!productData.title) newErrors.title = "Title is required";
    if (!productData.category) newErrors.category = "Category is required";
    if (!productData.imageUrl) newErrors.imageUrl = "Image URL is required";
    if (!productData.brand) newErrors.brand = "Brand is required";
    if (!productData.price) newErrors.price = "Price is required";
    if (!productData.description)
      newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
    const res = await api.post(
  "http://localhost:8000/api/v1/products/addproducts",
  productData
);


      if (res.data.success) {
        alert(res.data.message || "Product added successfully");
        setProductData({
          title: "",
          category: "",
          imageUrl: "",
          brand: "",
          description: "",
          price: "",
          inStock: true,
          rating: "",
        });
        setError({});
      } else {
        alert(res.data.message || "Something went wrong");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server error");
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
    setError({ ...error, [name]: "" });
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Title:</label>
          <input
            name="title"
            value={productData.title}
            onChange={handleChange}
            type="text"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.title && <p style={{ color: "red" }}>{error.title}</p>}
        </div>

        {/* Category */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Category:</label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            style={{ width: "95%", padding: "8px" }}
          >
            <option value="">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {error.category && <p style={{ color: "red" }}>{error.category}</p>}
        </div>

        {/* Brand */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Brand:</label>
          <input
            name="brand"
            value={productData.brand}
            onChange={handleChange}
            type="text"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.brand && <p style={{ color: "red" }}>{error.brand}</p>}
        </div>

        {/* Image URL */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Image URL:</label>
          <input
            name="imageUrl"
            value={productData.imageUrl}
            onChange={handleChange}
            type="text"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.imageUrl && <p style={{ color: "red" }}>{error.imageUrl}</p>}
        </div>

        {/* Description */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Description:</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows="3"
            style={{ width: "95%", padding: "8px", resize: "none" }}
          ></textarea>
          {error.description && (
            <p style={{ color: "red" }}>{error.description}</p>
          )}
        </div>

        {/* Price */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Price:</label>
          <input
            name="price"
            value={productData.price}
            onChange={handleChange}
            type="number"
            step="0.01"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.price && <p style={{ color: "red" }}>{error.price}</p>}
        </div>

        <input
          type="submit"
          value="Submit"
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default AddProduct;
