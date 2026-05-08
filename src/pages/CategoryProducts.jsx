import axios from 'axios';
import { ChevronLeft } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryProductList from '../components/CategoryProductList';

const CategoryProducts = () => {
  const params = useParams();
  const category = params.category;
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState([]);

  const getCategoryProducts = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/category/${category}`);
      const data = res.data.products;
      setCategoryData(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCategoryProducts();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-gradient-to-b from-[#3e1631] to-[#011631]'>
      {
        categoryData.length > 0 ? (
          <div className='max-w-6xl mx-auto py-10 px-4'>
            <button onClick={()=>navigate('/')} className='bg-[#be8457] text-[#3e1631] text-lg font-bold rounded-md px-3 py-1 mb-8 flex gap-1 items-center cursor-pointer'><ChevronLeft /> Back </button>
            {
              categoryData.map((product, index)=>{
                return <CategoryProductList key={index} product={product} />
              })
            }
          </div>
        ) : (
          // Loader
          <div className='flex justify-center items-center h-[400px]'>
            <div className="w-10 h-10 border-4 border-t-[#be8457] rounded-full animate-spin"></div>
          </div>
        )
      }
    </div>
  )
}

export default CategoryProducts
