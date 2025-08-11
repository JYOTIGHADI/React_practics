import './App.css'
// import axios from 'axios'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UseEffect from './pages/30-07/useffect'
import UseState from './pages/30-07/usestate'
import UseParams from './pages/01-08/useparams'
import ParamsProduct from './pages/01-08/product'
import Todo from './pages/02-08/Todo'
import NotFound from './pages/06-08/Notfount'
import Fakestoreapi from './pages/06-08/Fakestoreapi'
import Products from './pages/08-08/Products'
// import ProductsInfo from './pages/08-08/ProductsInfo'
import Mycart from './pages/08-08/Mycart'
import ProductsInfo from './pages/08-08/ProductsInfo'
import UseMemoExample from './pages/10-08/UseMemo';
import UseCallbackExample from './pages/10-08/UseCallback';








// import Delete from './pages/02-08/Delete'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/useffect' element={<UseEffect />} />
        <Route path='/usestate' element={<UseState />} />
        <Route path='/useparams' element={<UseParams />} />
        <Route path='/product' element={<ParamsProduct />} />
        <Route path="/paramsproduct/:productID" element={<ParamsProduct />} />
        <Route path='/todo' element={<Todo />} />
        <Route path='/Notfound' element={<NotFound />} />
        <Route path='/fakestore' element={<Fakestoreapi/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/productsInfo/:productId" element={<ProductsInfo />} />
        <Route path="/mycart" element={<Mycart />} />
        <Route path="/usememo" element={<UseMemoExample />} />
       <Route path="/usecallback" element={<UseCallbackExample />} />

       



        {/* <Route path='/delete' element={<Delete />} /> */}









      </Routes>
    </>
  )
}

export default App

