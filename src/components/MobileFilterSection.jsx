import React from 'react'
import { FaFilter } from 'react-icons/fa6'
import { getData } from '../context/DataContext';

const MobileFilterSection = ({ mobileFilter, setMobileFilter, search, setSearch, category, setCategory, brand, setBrand, priceRange, setPriceRange, handleCategoryChange, handleBrandChange }) => {

  const {categoryData, brandData} = getData();

  const toggleFilter = ()=>{
    setMobileFilter(!mobileFilter)
  }

  return (
    <>
      <div className='backdrop-blur-md bg-white/60 border-b-1 border-white/80 rounded-md flex justify-between items-center px-4 py-2 md:hidden'>
        <h1 className='text-xl font-semibold'>Filters</h1>
        <FaFilter onClick={toggleFilter} className='text-gray-800' />
      </div>
      {
        mobileFilter ? <div className='backdrop-blur-md bg-white/80 md:hidden p-4'>
          {/* search input */}
          <input type="text"
            placeholder='Search'
            value={search}
            onChange={((e) => { setSearch(e.target.value) })}
            className='bg-white rounded-md border-2 border-gray-400 p-2 w-full'
          />

          {/* category section */}
          <h1 className='text-xl font-semibold mt-5'>Category</h1>
          <div onClick={() => setMobileFilter(false)} className='flex flex-col mt-5'>
            {
              categoryData?.map((product, index) => {
                return <div key={index} className='flex gap-2'>
                  <input type="checkbox"
                    name={product}
                    checked={category === product}
                    value={product}
                    onChange={handleCategoryChange}
                    className='filter-input'
                  />
                  <button className='cursor-pointer uppercase'>{product}</button>
                </div>
              })
            }
          </div>

          {/* brand section */}
          <h1 className='text-xl font-semibold mt-5 mb-3'>Brand</h1>
          <select name="" id=""
            value={brand}
            onChange={handleBrandChange}
            className='bg-white w-full p-2 border-gray-200 border-2 rounded-md'>
            {
              brandData?.map((product, index) => {
                return <option key={index} value={product}>{product?.toUpperCase()}</option>
              })
            }
          </select>

          {/* price range */}
          <h1 className='text-xl font-semibold mt-5 mb-3'>Price Range</h1>
          <div className='flex flex-col gap-2'>
            <label>Price Range: {priceRange[0]} - {priceRange[1]} Rs</label>
            <input type="range" name="" id="" min="0" max="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className='filter-input' />
          </div>

          {/* reset button */}
          <button
            onClick={() => { setSearch(""); setCategory("All"); setBrand("All"); setPriceRange([0, 5000]); setMobileFilter(false) }}
            className='bg-[#011631] text-gray-300 font-semibold rounded px-3 py-2 mt-5 cursor-pointer'>Reset Filters</button>
        </div> : null
      }
    </>

  )
}

export default MobileFilterSection
