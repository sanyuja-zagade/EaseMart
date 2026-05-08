import React from 'react'
import banner from '../assets/banner.jpeg'
import { useNavigate } from 'react-router-dom'

const MidBanner = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-linear-to-b from-[#3e1631] to-[#011631]  md:py-25'>
      <div className='relative max-w-7xl mx-auto md:rounded-2xl bg-cover bg-center h-[550px] md:h-[600px]' style={{backgroundImage: `url(${banner})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
        <div className='absolute inset-0 bg-black/50 md:rounded-2xl flex justify-center items-center'>
          <div className='text-center text-white px-4'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>A Perfect & Incredible Products!</h1>
            <p className='text-lg md:text-xl mb-6'>Discover thousands of products with amazing deals and fast delivery on every order.</p>
            <button onClick={()=>navigate('/products')} className='bg-gradient-to-r from-[#be8457] to-[#f24f66] text-[#011631] font-semibold border-3 border-[#be8457] cursor-pointer hover:from-[#f24f66] hover:to-[#f24f66] py-2 px-4 md:py-3 md:px-6 rounded-md transition duration-300'>Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
