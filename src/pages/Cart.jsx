import React from 'react'
import { useCart } from '../context/CartContext'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { GiShoppingBag } from 'react-icons/gi';
import { useUser } from '@clerk/react';
import { useNavigate } from 'react-router-dom';
import emptyCart from '../assets/empty-cart.webp';

const Cart = ({ location, getLocation }) => {
  const { cartItem, updateQuantity, deleteItem } = useCart();
  const { user } = useUser();

  const totalPrice = cartItem.reduce((total, product) => total + product.price, 0);

  const navigate = useNavigate();

  return (
    <div className='bg-gradient-to-b from-[#3e1631] to-[#011631]'>
      <div className='max-w-5xl mx-auto pt-10 pb-16 px-4 md:px-0'>
        {
          cartItem.length > 0 ? <div>
            <h1 className='text-2xl text-white font-bold'>My Cart ({cartItem.length})</h1>
            <div>
              <div className='mt-10'>
                {
                  cartItem.map((product, index) => {
                    return <div key={index} className='backdrop-blur-md bg-white/10 border-1 border-white/10 mt-4 p-5 w-full rounded-md flex justify-between items-center'>
                      <div className='flex items-center md:gap-8 gap-4'>
                        <img src={product.images[0]} alt={product.title} className='md:w-30 md:h-30 w-20 h-20 rounded-md bg-[#e0d8de]' />
                        <div>
                          <h1 className='md:w-[300px] md:line-clamp-1 line-clamp-2 text-white md:text-xl text-lg'>{product.title}</h1>
                          <p className='md:text-lg text-md text-[#ef5066] font-bold'>Rs. {product.price}</p>
                        </div>
                      </div>
                      <div className='bg-[#ef5066] text-white flex gap-4 md:p-2 p-1 rounded-md font-bold text-xl'>
                        <button onClick={() => updateQuantity(cartItem, product.id, "decrease")} className='cursor-pointer'>-</button>
                        <span>{product.quantity}</span>
                        <button onClick={() => updateQuantity(cartItem, product.id, "increase")} className='cursor-pointer'>+</button>
                      </div>
                      <span onClick={() => deleteItem(product.id)} className='p-3 rounded-full hover:bg-white/60 hover:shadow-2xl transition-all'>
                        <FaRegTrashAlt className='text-[#ef5066] text-2xl cursor-pointer' />
                      </span>
                    </div>
                  })
                }
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-20'>
                <div className='bg-gradient-to-b from-[#3e1631] to-[#011631] border-1 border-white/20 shadow-lg shadow-black rounded-md p-8 mt-8 space-y-4'>
                  <h1 className='text-gray-200 font-bold text-xl'>Delivery Info</h1>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-gray-200'>Full Name</label>
                    <input type="text" placeholder='Enter your name' className='p-2 bg-[#e0d8de] rounded-md' value={user?.fullName} />
                  </div>
                  <div className='flex flex-col space-y-1'>
                    <label className='text-gray-200'>Address</label>
                    <input type="text" placeholder='Enter your address' className='p-2 bg-[#e0d8de] rounded-md' value={location?.city} />
                  </div>
                  <div className='flex w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label className='text-gray-200'>State</label>
                      <input type="text" placeholder='Enter your state' className='p-2 bg-[#e0d8de] rounded-md w-full' value={location?.state} />
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label className='text-gray-200'>PostCode</label>
                      <input type="text" placeholder='Enter your postcode' className='p-2 bg-[#e0d8de] rounded-md w-full' value={location?.postcode} />
                    </div>
                  </div>
                  <div className='flex w-full gap-5'>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label className='text-gray-200'>Country</label>
                      <input type="text" placeholder='Enter your country' className='p-2 bg-[#e0d8de] rounded-md w-full' value={location?.country} />
                    </div>
                    <div className='flex flex-col space-y-1 w-full'>
                      <label className='text-gray-200'>Phone No</label>
                      <input type="number" placeholder='Enter your Number' className='p-2 bg-[#e0d8de] rounded-md w-full' />
                    </div>
                  </div>
                  <button className='bg-[#ef5066] text-[#011631] font-semibold px-3 py-1 rounded-md mt-4 cursor-pointer'>Submit</button>
                  <hr className='text-[#8d838a] mt-4' />
                  <div className='flex items-center justify-center w-full text-lg text-gray-300 cursor-pointer'>
                    OR
                  </div>
                  <div className='flex justify-center'>
                    <button className='bg-[#ef5066] text-[#011631] font-semibold px-3 py-2 rounded-md cursor-pointer' onClick={getLocation}>Detect Location</button>
                  </div>
                </div>
                <div className='bg-[#e0d8de] shadow-lg shadow-black rounded-md p-8 mt-8 space-y-4 h-max'>
                  <h1 className='text-gray-800 font-bold text-xl'>Bill details</h1>
                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-800'><span><LuNotebookText /></span>Items total</h1>
                    <p className='text-gray-800'>Rs. {totalPrice}</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-800'><span><MdDeliveryDining /></span>Delivery Charge</h1>
                    <p className='text-[#d61730] font-semibold'><span className='text-gray-600 line-through mr-2'>Rs. 25</span>FREE</p>
                  </div>
                  <div className='flex justify-between items-center'>
                    <h1 className='flex gap-1 items-center text-gray-800'><span><GiShoppingBag /></span>Handling Charge</h1>
                    <p className='text-[#d61730] font-semibold'>Rs. 5</p>
                  </div>
                  <hr className='text-gray-600 my-8' />
                  <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-lg'>Grand Total</h1>
                    <p className='font-semibold text-lg'>Rs. {totalPrice + 5}</p>
                  </div>
                  <div>
                    <h1 className='font-semibold text-gray-800 mb-3 mt-7'>Apply Promo Code</h1>
                    <div className='flex gap-3'>
                      <input type="text" placeholder='Enter code' className='p-2 w-full bg-[#f3eef2] border border-gray-300 rounded-md' />
                      <button className='bg-[#f3eef2] text-black border border-gray-300 px-4 py-1 cursor-pointer rounded-md'>Apply</button>
                    </div>
                  </div>
                  <button className='bg-[#ef5066] text-[#011631] font-semibold px-3 py-2 mt-3 rounded-md w-full cursor-pointer'>Proceed to Checkout</button>
                </div>
              </div>
            </div>
          </div> : <div className='flex flex-col gap-3 justify-center items-center h-[500px]'>
            <h1 className='text-[#ef5066] text-5xl font-bold'>Oh no! Your cart is empty</h1>
            <img src={emptyCart} alt="cart empty" className='w-[400px]' />
            <button onClick={() => navigate('/products')} className='bg-[#ef5066] text-[#011631] font-semibold px-3 py-2 rounded-md cursor-pointer'>Continue Shopping</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
