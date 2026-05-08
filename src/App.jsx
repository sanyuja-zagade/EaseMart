import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import SingleProduct from './pages/SingleProduct.jsx'
import CategoryProducts from './pages/CategoryProducts.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Cart from './pages/Cart.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { useCart } from './context/CartContext.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

const App = () => {
  const [location, setLocation] = useState()
  const [openDropdown, setOpenDropdown] = useState(false);
  
  const {cartItem, setCartItem} = useCart();

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const {latitude, longitude} = pos.coords;

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`

      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        setOpenDropdown(false);
      } catch (e) {
        console.log(e);
      }
    })
  }

  useEffect(()=>{
    getLocation();
  }, [])

  // load cart from local storage on initial render
  useEffect(()=>{
    const storedCart = localStorage.getItem('cartItem');
    if(storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, [])

  // save cart to loacl storage whenever changes occurs in it
  useEffect(()=>{
    localStorage.setItem('cartItem', JSON.stringify(cartItem));
  }, [cartItem])

  return (
    <>
      <Navbar location={location} getLocation={getLocation} openDropdown={openDropdown} setOpenDropdown={setOpenDropdown} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<SingleProduct />}></Route>
        <Route path='/category/:category' element={<CategoryProducts />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/cart' element={<ProtectedRoute><Cart location={location} getLocation={getLocation} /></ProtectedRoute>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
