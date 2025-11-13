// import './App.css'
// // import axios from 'axios'
// import { Route, Routes } from 'react-router-dom'
// import Navbar from './component/navbar'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import Register from './pages/Register'
// import UseEffect from './pages/30-07/useffect'
// import UseState from './pages/30-07/usestate'
// import UseParams from './pages/01-08/useparams'
// import ParamsProduct from './pages/01-08/product'
// import Todo from './pages/02-08/Todo'
// import NotFound from './pages/06-08/Notfount'
// import Fakestoreapi from './pages/06-08/Fakestoreapi'
// import Products from './pages/08-08/Products'
// import ProductsInfo from './pages/08-08/ProductsInfo'
// import Mycart from './pages/08-08/Mycart'
// import UseMemoExample from './pages/10-08/UseMemo';
// import UseCallbackExample from './pages/10-08/UseCallback';
// import UseRefExample from './pages/13-08/UseRef';
// import UseReducerExample from './pages/13-08/UseReduce';
// import ProductList from './pages/23-08/assignment/redux/ProductList'
// import CounterRedux from "./redux/CounterRedux";
// import Calculator from './pages/30-08/assignment/Calculator';
// import api from "./axios/axiosConfig.js";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginSuccess  } from "./redux/userSlice";
// import AddProduct from './component/seller/AddProduct.jsx'
// import ViewProducts from './component/seller/ViewProducts.jsx'




// function App() {
//    const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.user);
//   console.log(user);
//   const getUser = async () => {
//     const res = await api.get("/auth/getcurrentuser");
//     if (res.data.success) {
//       dispatch(setUser(res.data.user));
//     }
//   };

//   useEffect(() => {
//     if (!user) {
//       getUser();
//     }
//   }, [dispatch]);
//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <Navbar />
//       <h1>
//         {user?.role === "user"
//           ? "User Page"
//           : user?.role === "seller"
//           ? "Seller Page"
//           : ""}
//       </h1>
//       <h1>Hello, {user?.name}</h1>

//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/useffect' element={<UseEffect />} />
//         <Route path='/usestate' element={<UseState />} />
//         <Route path='/useparams' element={<UseParams />} />
//         <Route path='/product' element={<ParamsProduct />} />
//         <Route path="/paramsproduct/:productID" element={<ParamsProduct />} />
//         <Route path='/todo' element={<Todo />} />
//         <Route path='/Notfound' element={<NotFound />} />
//         <Route path='/fakestore' element={<Fakestoreapi />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/productsInfo/:productId" element={<ProductsInfo />} />
//         <Route path="/mycart" element={<Mycart />} />
//         <Route path="/usememo" element={<UseMemoExample />} />
//         <Route path="/usecallback" element={<UseCallbackExample />} />
//         <Route path="/useref" element={<UseRefExample />} />
//         <Route path="/usereducer" element={<UseReducerExample />} />
//         <Route path="/redux-counter" element={<CounterRedux />} />   
//         <Route path="/redux-addtocart" element={<ProductList />} />
//          <Route path="/calculator" element={<Calculator />} />
      
    

//   {/* sellers routes  */}
//         <Route path="/add-product" element={<AddProduct />} />

//         <Route path="/view-products" element={<ViewProducts />} />

//       </Routes>
//     </>
//   )


// export default App




import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UseEffect from "./pages/30-07/useffect";
import UseState from "./pages/30-07/usestate";
import UseParams from "./pages/01-08/useparams";
import ParamsProduct from "./pages/01-08/product";
import Todo from "./pages/02-08/Todo";
import NotFound from "./pages/06-08/Notfount";
import Fakestoreapi from "./pages/06-08/Fakestoreapi";
import Products from "./pages/08-08/Products";
import ProductsInfo from "./pages/08-08/ProductsInfo";
// import Mycart from "./pages/08-08/Mycart";
import UseMemoExample from "./pages/10-08/UseMemo";
import UseCallbackExample from "./pages/10-08/UseCallback";
import UseRefExample from "./pages/13-08/UseRef";
import UseReducerExample from "./pages/13-08/UseReduce";
import ProductList from "./pages/23-08/assignment/redux/ProductList";
import CounterRedux from "./redux/CounterRedux";
import Calculator from "./pages/30-08/assignment/Calculator";
import AddProduct from "./pages/AddProduct.jsx";
import ViewProducts from "./pages/ViewProducts.jsx";
import api from "./axios/axiosConfig.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "./redux/userSlice.js"; // ✅ correct import
import MyCart from "./pages/cartpage.jsx";
import UserProducts from "./pages/UserProducts";
import ViewAllProducts from "./pages/ViewAllproducts.jsx";  


function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  // ✅ Fetch current user if token exists
  const getUser = async () => {
    try {
      const res = await api.get("/auth/get-current-user");

      if (res.data.success) {
        dispatch(loginSuccess(res.data.user));
      }
    } catch (error) {
      console.log("Error fetching user:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [dispatch, user]);



  return (

    
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <Navbar />
      <h1>
        {/* {user?.role === "user"
          ? "User Page"
          : user?.role === "seller"
          ? "Seller Page"
          : ""} */}
      </h1>
      <h1>Hello {user?.name}</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/useffect" element={<UseEffect />} /> 
        <Route path="/usestate" element={<UseState />} />
        <Route path="/useparams" element={<UseParams />} />
        <Route path="/product" element={<ParamsProduct />} />
        <Route path="/paramsproduct/:productID" element={<ParamsProduct />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/notfound" element={<NotFound />} />
         <Route path="/fakestore" element={<Fakestoreapi />} /> 
        <Route path="/products" element={<Products />} />
         <Route path="/productsInfo/:productId" element={<ProductsInfo />} />
         <Route path="/mycart" element={<MyCart />} />
         <Route path="/usememo" element={<UseMemoExample />} />
         <Route path="/usecallback" element={<UseCallbackExample />} />
         <Route path="/useref" element={<UseRefExample />} />
         <Route path="/usereducer" element={<UseReducerExample />} />
         <Route path="/redux-counter" element={<CounterRedux />} />
         <Route path="/redux-addtocart" element={<ProductList />} />
         <Route path="/calculator" element={<Calculator />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ViewProducts />} />
        <Route path="/viewallproducts" element={<ViewAllProducts />} />



        <Route path="/cartpage" element={<MyCart />} />
        <Route path="/user-products" element={<UserProducts />} />


        

    
      
    


       
      </Routes>
    </div>
  );
}

export default App;

