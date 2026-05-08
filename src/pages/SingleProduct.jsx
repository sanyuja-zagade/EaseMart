import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums';
import { IoCartOutline } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const SingleProduct = () => {
  const {addToCart} = useCart();
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState('');

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${params.id}`);
      const product = res.data;
      setSingleProduct(product);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getSingleProduct();
  }, [])

  const [quantity, setQuantity] = useState(1);

  const OgPrice = Math.round(singleProduct.price + ((singleProduct.price * singleProduct.discountPercentage) / 100))

  return (
    <>
      {
        singleProduct ? <div className='bg-linear-to-b from-[#3e1631] to-[#011631] px-4 pb-16 '>
          <Breadcrums title={singleProduct.title} />
          <div className='mx-auto md:p-6 grid md:grid-cols-2 grid-cols-1 gap-10'>
            <img src={singleProduct.images[0]} alt={singleProduct.title} className='rounded w-full object-cover bg-[#ccc1c9] border-1 border-[#be8457]' />
            <div className='flex flex-col gap-6 md:p-8'>
              <h1 className='md:text-3xl text-2xl font-bold text-white'>{singleProduct.title}</h1>

              <div className='text-[#ccc1c9]'>{singleProduct.brand?.toUpperCase()} | {singleProduct.tags[0]?.toUpperCase()}, {singleProduct.tags[1]?.toUpperCase()}</div>

              <p className='text-3xl text-[#be8457]'>
                Rs. {singleProduct.price}
                <span className='line-through text-lg text-[#ccc1c9] font-semibold mx-5'>Rs. {OgPrice}</span>
                <span className='text-2xl text-green-500 font-semibold'>{singleProduct.discountPercentage}% off</span></p>

              <p><span className='bg-[#ef5066] font-semibold rounded-full px-2 py-1 inline-flex gap-1 items-center w-fit'>{singleProduct.rating} <FaStar className='text-[#011631]' /></span></p>

              <p className='text-[#ccc1c9]'>{singleProduct.description}</p>

              <div className='flex items-center gap-4'>
                <label className='text-sm font-medium text-[#ccc1c9]' >Quantity</label>
                <input type="number" min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className='w-20 border border-[#918e8f] text-white rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#ccc1c9]' />
              </div>

              <div className='flex gap-4 mt-4'>
                <button onClick={()=>addToCart(singleProduct)} className='px-6 py-2 flex gap-2 text-lg bg-[#be8457] text-[#011631] border-3 border-[#532d47] font-semibold rounded-md cursor-pointer'>
                  <IoCartOutline className='w-6 h-6' /> Add to Cart</button>
              </div>

              {/* reviews */}
              <div className='space-y-6 mt-10 border-t border-[#ccc1c9]'>
                <h1 className='text-xl md:text-2xl text-white font-semibold mt-6'>Reviews</h1>
            {
              singleProduct.reviews[0] && (
                <div className='p-4 space-y-4 bg-gradient-to-b from-[#1a0814] to-[#011631] border-1 border-[#be8457] rounded-lg'>
                  <p className='text-xl text-white font-bold'>{singleProduct.reviews[0].reviewerName}
                    <span className='bg-[#ef5066] ml-3 font-semibold rounded-full px-2 py-1 inline-flex gap-1 items-center w-fit'>{singleProduct.reviews[0].rating} <FaStar className='text-[#011631]' /></span></p>
                  <p className='text-lg text-[#ccc1c9]'>{singleProduct.reviews[0].comment}</p>
                  <p className='text-[#b1acaf] text-sm font-semibold text-right'>- Posted on {singleProduct.reviews[0].date.split("T")[0]}</p>
                </div>
              )
            }
            {
              singleProduct.reviews[1] && (
                <div className='p-4 space-y-4 bg-gradient-to-b from-[#1a0814] to-[#011631] border-1 border-[#be8457] rounded-lg'>
                  <p className='text-xl text-white font-bold'>{singleProduct.reviews[1].reviewerName}
                    <span className='bg-[#ef5066] ml-2 font-semibold rounded-full px-2 py-1 inline-flex gap-1 items-center w-fit'>{singleProduct.reviews[1].rating} <FaStar className='text-[#011631]' /></span></p>
                  <p className='text-lg text-[#ccc1c9]'>{singleProduct.reviews[1].comment}</p>
                  <p className='text-[#b1acaf] text-sm font-semibold text-right'>- Posted on {singleProduct.reviews[1].date.split("T")[0]}</p>
                </div>
              )
            }
            {
              singleProduct.reviews[2] && (
                <div className='p-4 space-y-4 bg-gradient-to-b from-[#1a0814] to-[#011631] border-1 border-[#be8457] rounded-lg'>
                  <p className='text-xl text-white font-bold'>{singleProduct.reviews[2].reviewerName}
                    <span className='bg-[#ef5066] ml-2 font-semibold rounded-full px-2 py-1 inline-flex gap-1 items-center w-fit'>{singleProduct.reviews[2].rating} <FaStar className='text-[#011631]' /></span></p>
                  <p className='text-lg text-[#ccc1c9]'>{singleProduct.reviews[2].comment}</p>
                  <p className='text-[#b1acaf] text-sm font-semibold text-right'>- Posted on {singleProduct.reviews[2].date.split("T")[0]}</p>
                </div>
              )
            }

          </div>
            </div>
          </div>


          


        </div> :
          // Loader
          <div className='flex justify-center items-center h-screen bg-linear-to-b from-[#3e1631] to-[#011631]'>
            <div className="w-10 h-10 border-4 border-t-[#be8457] rounded-full animate-spin"></div>
          </div>
      }
    </>
  )
}

export default SingleProduct
