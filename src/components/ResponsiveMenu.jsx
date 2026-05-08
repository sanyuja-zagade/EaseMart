import { UserButton, useUser } from '@clerk/react'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResponsiveMenu = ({menuBar, setMenuBar}) => {
  const {user} = useUser();

  return (
    <div className={`${menuBar ? "left-0" : "-left-[100%]"} fixed bottom-0 top-0 z-20 h-screen w-[75%] flex flex-col justify-between bg-white px-8 pb-6 pt-16 text-black rounded-r-xl shadow-md transition-all md:hidden`}>
      <div>
        <div className='flex justify-start items-center gap-4'>
          {
            user ? <UserButton size={50} /> : <FaUserCircle size={50} />
          }
          <div>
            <h1>{user?.fullName}</h1>
          </div>
        </div>
        <nav className='mt-12'>
          <ul className='flex flex-col gap-8 font-semibold'>
            <Link to={'/'} onClick={()=>setMenuBar(false)} className="cursor-pointer"><li>Home</li></Link>
            <Link to={'/products'} onClick={()=>setMenuBar(false)} className="cursor-pointer"><li>Products</li></Link>
            <Link to={'/about'} onClick={()=>setMenuBar(false)} className="cursor-pointer"><li>About</li></Link>
            <Link to={'/contact'} onClick={()=>setMenuBar(false)} className="cursor-pointer"><li>Contact</li></Link>
            <Link to={'/cart'} onClick={()=>setMenuBar(false)} className="cursor-pointer"><li>My Cart</li></Link>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default ResponsiveMenu
