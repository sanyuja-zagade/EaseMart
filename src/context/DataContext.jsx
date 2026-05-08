import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState();

    const allProducts = async ()=>{
        try {
            const res = await axios.get('https://dummyjson.com/products?limit=100')
            const productsData = res.data.products;
            setData(productsData);
        } catch (err) {
            console.log(err);
        }
    }

    const getUniqueData = (data, property)=>{
        let uniqueData = data?.map((product)=>{
          return product[property];
        })
        return ['All', ...new Set(uniqueData)];
      }

    const categoryData = getUniqueData(data, "category");
    const brandData = getUniqueData(data, "brand")

    return <DataContext.Provider value={{data, setData, allProducts, categoryData, brandData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)