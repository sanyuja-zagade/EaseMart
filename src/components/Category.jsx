import React, { useEffect } from 'react'
import { getData } from '../context/DataContext'
import { useNavigate } from 'react-router-dom';

const Category = () => {
  const { data } = getData();
  const navigate = useNavigate();

  const getUniqueData = (data, property) => {
    let uniqueData = data?.map((product) => {
      return product[property];
    })
    return [...new Set(uniqueData)];
  }
  const categoryData = getUniqueData(data, "category");

  return (
    <div className='bg-[#A4714B]'>
      <div className='max-w-5xl mx-auto flex flex-wrap justify-evenly items-center gap-9 py-7 px-4'>
        {
          categoryData?.map((category, index) => {
            return <div key={index} className=''>
              <button onClick={() => navigate(`/category/${category}`)} className='bg-gradient-to-b from-[#1a0814] to-[#521d3b] text-white py-2 px-4 rounded cursor-pointer'>{category}</button>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Category
