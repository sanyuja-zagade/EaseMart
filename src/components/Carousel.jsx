import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import Products from '../pages/Products';
import Category from './Category';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const { data, allProducts } = getData();

  const navigate = useNavigate();

  useEffect(() => {
    allProducts()
  }, [])

  return (
    <div>
      {
        data && data.length > 0 && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={500}
            loop={true}
          >
            {
              data.slice(0, 6).map((product) => {
                return <SwiperSlide key={product.id} className='bg-linear-to-r from-[#3e1631] to-[#011631] z-0'>
                  <div className='flex flex-col md:flex-row gap-10 justify-evenly items-center h-[650px] md:h-[550px] px-4 my-10 md:my-0'>
                    <div className='space-y-8'>
                      <h1 className='text-white text-3xl md:text-5xl font-bold md:w-[500px] line-clamp-2'>{product.title}</h1>
                      <p className='text-[#b9adad] pr-7 md:w-[500px] line-clamp-3'>{product.description}</p>
                      <button onClick={()=>navigate(`/products/${product.id}`)} className='bg-linear-to-r from-[#f24f66] to-[#be8457] text-[#011631] font-semibold border-3 border-[#be8457] px-3 py-2 rounded cursor-pointer mt-2'>Shop Now</button>
                    </div>
                    <img src={product.images[0]} alt={product.title} className='bg-gray-300 rounded-full w-[500px] hover:scale-105 transition-all shadow-2xl shadow-[#f24f66]' />
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        )
      }
      <Category />
    </div>
  )
}

export default Carousel
