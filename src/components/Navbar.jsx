import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import { FaCaretDown } from 'react-icons/fa'
import { IoCartOutline } from 'react-icons/io5'
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'
import { CgClose } from 'react-icons/cg'
import logo from '../assets/EaseMart_Logo.png'
import { useCart } from '../context/CartContext'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = ({location, getLocation, openDropdown, setOpenDropdown}) => {
  const {cartItem} = useCart();
  const [menuBar, setMenuBar] = useState(false);

  const toggleDropdown = ()=>{
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className='bg-gradient-to-b from-[#1a0814] to-[#521d3b] text-white border-b-1 border-[#ccc1c9] shadow-2xl py-4'>
      <div className='flex justify-between items-center px-8'>
        <div className='flex gap-9 items-center'>
          <Link to={'/'}><img src={logo} alt="Logo" className='h-15' /></Link>

          {/* location */}
          <div className='md:flex items-center cursor-pointer gap-2 hidden'>
            <MapPin className='text-gray-200' />
            <span className='font-semibold text-gray-100'>{location ? <div className='-space-y-2'>
              <p>{location.city}</p>
              <p>{location.state}</p>
            </div> : "Add Address"}</span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>
          {
            openDropdown ? <div className='bg-white border-2 border-gray-100 rounded-md shadow-2xl p-5 fixed top-20 left-70 z-50'>
              <h1 className='font-semibold text-xl text-black flex justify-between mb-7 gap-5'>Change Location 
                <span onClick={toggleDropdown} className='cursor-pointer'><CgClose /></span></h1>
              <button onClick={getLocation} className='bg-[#2c0d22] text-white border-3 font-semibold px-3 py-2 rounded-md cursor-pointer hover:border-[#b07a4c]'>Detect Location</button>
            </div> : null
          }
        </div>

        {/* menu section */}
        <nav className='flex items-center gap-7'>
          <ul className='md:flex gap-7 items-center text-xl hidden'>
            <NavLink to={'/'}
              className={({ isActive }) => `${isActive ? "border-b-3 border-[#be8457] font-semibold transition all" : "text-[#ccc1c9] text-lg"} `}>
              <li>Home</li>
            </NavLink>
            <NavLink to={'/products'}
              className={({ isActive }) => `${isActive ? "border-b-3 border-[#be8457] font-semibold transition all" : "text-[#ccc1c9] text-lg"}`}>
              <li>Products</li>
            </NavLink>
            <NavLink to={'/about'}
              className={({ isActive }) => `${isActive ? "border-b-3 border-[#be8457] font-semibold transition all" : "text-[#ccc1c9] text-lg"}`}>
              <li>About</li>
            </NavLink>
            <NavLink to={'/contact'}
              className={({ isActive }) => `${isActive ? "border-b-3 border-[#be8457] font-semibold transition all" : "text-[#ccc1c9] text-lg"}`}>
              <li>Contact</li>
            </NavLink>
          </ul>

          {/* cart */}
          <Link to={'/cart'} className='relative md:block hidden'>
            <IoCartOutline className='h-7 w-7' />
            <span className='bg-[#ef5066] text-white rounded-full px-2 absolute -top-3 -right-3'>{cartItem.length}</span>
          </Link>

          {/* sign in  */}
          <div className='ml-3 md:block hidden'>
            <Show when="signed-out">
              <SignInButton className='bg-[#2c0d22] text-white border-3 border-[#be8457] font-semibold px-3 py-2 rounded cursor-pointer z-1' />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

          {/* menu bar */}
          {
            menuBar ? <HiMenuAlt3 onClick={()=>setMenuBar(false)} className='h-8 w-8 md:hidden' /> : 
            <HiMenuAlt1 onClick={()=>setMenuBar(true)} className='h-7 w-7 md:hidden' />
          }
        </nav>
      </div>
      <ResponsiveMenu menuBar={menuBar} setMenuBar={setMenuBar} />
    </div>
  )
}

export default Navbar
