import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import noItemFound from '../assets/product-is-empty.webp'
import MobileFilterSection from '../components/MobileFilterSection'

const Products = () => {
  const { data, allProducts, categoryData } = getData();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [brand, setBrand] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [page, setPage] = useState(1);
  const [mobileFilter, setMobileFilter] = useState(false);

  useEffect(() => {
    allProducts();
    window.scrollTo(0, 0);
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setPage(1);
  }
  const handleBrandChange = (e) => {
    setBrand(e.target.value);
    setPage(1);
  }
  const pageHandler = (selectedPage) => {
    setPage(selectedPage);
    window.scrollTo(0, 0);
  }

  const filteredData = data?.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || product.category === category) &&
      (brand === "All" || product.brand === brand) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    )
  })

  const dynamicPage = Math.ceil(filteredData?.length / 8);

  return (
    <div>
      <div className='bg-gradient-to-b from-[#3e1631] to-[#011631] px-4 pb-16'>
        <MobileFilterSection mobileFilter={mobileFilter} setMobileFilter={setMobileFilter} search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
        {
          data?.length > 0 ? (
            <>
              <div className='flex gap-16'>
                <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} brand={brand} setBrand={setBrand} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
                {
                  filteredData?.length > 0 ? (
                    <div className='flex flex-col justify-between items-center'>
                      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-9 mt-6 md:mt-16'>
                        {
                          filteredData?.slice(page * 8 - 8, page * 8).map((product, index) => {
                            return <ProductCard key={index} product={product} />
                          })
                        }
                      </div>
                      <Pagination page={page} pageHandler={pageHandler} dynamicPage={dynamicPage} />
                    </div>
                  ) : (
                    <div className='flex flex-col justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                      <h1 className='text-red-400 text-5xl font-bold'>No Item Found</h1>
                      <img src={noItemFound} alt="no item found" />
                    </div>
                  )
                }
              </div>
            </>
          ) : (
            // Loader
            <div className='flex justify-center items-center h-[400px]'>
              <div className="w-10 h-10 border-4 border-t-[#be8457] rounded-full animate-spin"></div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products
