import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UseEffect from './pages/30-07/useffect'
import UseState from './pages/30-07/usestate'
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


      </Routes>
    </>
  )
}

export default App

