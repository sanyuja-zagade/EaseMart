import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const CategoryProductList = ({ product }) => {
  const navigate = useNavigate();
  const {addToCart} = useCart();

  return (
    <div className='mt-6 space-y-4 rounded-md'>
      <div className='backdrop-blur-md bg-white/10 border-1 border-white/10 flex justify-between items-center p-4 rounded-md'>
      <div className='flex gap-8 items-center'>
        <img src={product.images[0]} alt={product.title} onClick={() => navigate(`/products/${product.id}`)} className='md:h-60 md:w-25 h-25 w-25 bg-[#e0d8de] rounded-md cursor-pointer' />
        <div className='space-y-6'>
          <h1 className='font-bold md:text-xl text-lg line-clamp-2 text-[#e0d8de] w-full'>{product.title}</h1>
          <p className='font-semibold text-green-500 flex items-center md:text-lg text-sm'><span className='md:text-4xl text-xl text-[#be8457] mr-2'>Rs. {product.price}</span>({product.discountPercentage}% off)</p>
          <p className='text-[#ccc1c9] md:text-md text-sm'>FREE delivery <span className='font-semibold text-[#e0d8de]'>Mon, 18 May</span> <br />
          Or Fastest delivery <span className='font-semibold text-[#e0d8de]'>Tomorrow, 9 May</span></p>
        
          <button onClick={()=>addToCart(product)} className='bg-[#ef5066] text-[#011631] md:text-xl text-md font-semibold border border-[#be8457] px-4 py-2 rounded-md cursor-pointer hover:border-3 transition-all md:hidden'>Add to Cart</button>
        </div></div>
        <button onClick={()=>addToCart(product)} className='bg-[#ef5066] text-[#011631] text-xl font-semibold border border-[#be8457] px-4 py-2 rounded-md cursor-pointer hover:border-3 transition-all hidden md:block'>Add to Cart</button>
      </div>
    </div>
  )
}

export default CategoryProductList
