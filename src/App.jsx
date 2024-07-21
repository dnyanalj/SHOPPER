import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Pages/shop.jsx'
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'

function App() {
  return (
   <div>
      <BrowserRouter>
      <Navbar></Navbar> 
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"></ShopCategory>}></Route>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"></ShopCategory>}></Route>
        <Route path='/kids' element={<ShopCategory banner ={kid_banner} category="kid"></ShopCategory>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:productId' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<LoginSignup></LoginSignup>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
   </div>
   
  )
}

export default App
