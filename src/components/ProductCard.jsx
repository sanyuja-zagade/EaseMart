import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';

const ProductCard = ({product}) => {
  const navigate = useNavigate();
  const {addToCart, cartItem} = useCart();
  console.log(cartItem);

  return (
    <div className='backdrop-blur-md bg-gradient-to-b from-[#1a0814]/40 to-[#521d3b]/40 text-white border-1 border-white/10 rounded cursor-pointer h-max p-2 relative shadow-black shadow-lg hover:scale-105 hover:shadow-xl transition-all'>
      <img src={product.images[0]} alt={product.title} 
      className='backdrop-blur-md bg-white/20 aspect-square rounded-sm border-b-1 border-[#683b54]' 
      onClick={()=>navigate(`${product.id}`)}
      />
      <h1 className='text-lg text-[#be8457] line-clamp-1 p-1'>{product.title}</h1>
      <p className=' text-[#ccc1c9] my-2'>Rs. {product.price}/-</p>
      <button className='bg-[#be8457] text-[#011631] font-semibold rounded w-full px-3 py-2 cursor-pointer flex justify-center items-center gap-2' onClick={()=>addToCart(product)}><IoCartOutline className='h-6 w-6' /> Add to Cart</button>
    </div>
  )
}

export default ProductCard
