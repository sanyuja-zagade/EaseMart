import React from 'react'
import { useNavigate } from 'react-router-dom'

const Breadcrums = ({title}) => {
  const navigate = useNavigate();

  return (
    <div className='max-w-7xl mx-auto pt-10 md:pb-0 pb-10'>
      <h1 className='text-xl text-[#ccc1c9] font-semibold'>
        <span className='cursor-pointer' onClick={()=>navigate('/')}>Home</span> /  
        <span className='cursor-pointer' onClick={()=>navigate('/products')}>Products</span> /  
        <span>{title}</span></h1>
    </div>
  )
}

export default Breadcrums
