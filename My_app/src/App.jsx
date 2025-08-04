import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UseEffect from './pages/30-07/useffect'
import UseState from './pages/30-07/usestate'
import UseParams from './pages/01-08/useparams'
import ParamsProduct from './pages/01-08/product'
import Todo from './pages/02-08/Todo'
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
        {/* <Route path='/delete' element={<Delete />} /> */}









      </Routes>
    </>
  )
}

export default App

