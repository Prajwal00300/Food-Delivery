import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}></LoginPopUp>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/order' element={<PlaceOrder></PlaceOrder>}></Route>
        <Route path='/verify' element={<Verify></Verify>}></Route>
        <Route path='/myorders' element={<MyOrders></MyOrders>}></Route>
       
        
        
      </Routes>


    </div>
    <Footer></Footer>
    </>
    
    
  )
}

export default App