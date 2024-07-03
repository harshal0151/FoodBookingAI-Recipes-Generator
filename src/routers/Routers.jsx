

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "../pages/home/Home"
import Cart from "../pages/cart/Cart"
import Order from '../pages/placeOrder/Order'
import Menu from '../pages/menu/Menu'
import SinglePage from '../components/singlei_tem/SinglePage'
import OrderConfirmation from '../pages/placeOrder/OrderConfirmation'



function Routers() {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singleItem/:id" element={<SinglePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/placeOrder" element={<Order />} />
        <Route path="/orderConfirmation" element={<OrderConfirmation />} />
        
    </Routes>
    
    </>
  )
}

export default Routers