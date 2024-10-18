import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Collection from './Pages/Collection';
import Contact from './Pages/Contact';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import PlaceOrder from './Pages/PlaceOrder';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/order' element={<Orders />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
      </Routes>     
      <Footer/>
    </div>
  )
}

export default App
