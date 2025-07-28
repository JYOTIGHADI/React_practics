import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

     </Routes>
    </>
  )
}

export default App

