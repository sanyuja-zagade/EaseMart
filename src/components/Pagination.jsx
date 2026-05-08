import React from 'react'
import ProductCard from './ProductCard';

const Pagination = ({page, pageHandler, dynamicPage}) => {

  const getPages = (current, total)=>{
    const pages = [];
    if (total <= 5) {
      for (let cntr=1; cntr<=total; cntr++) {
        pages.push(cntr);
      }
    } else {
      if (current <=3) {
        pages.push(1, 2, 3, '...', total);
      } else if (current >= total-2) {
        pages.push(1, '...', total-2, total-1, total);
      } else {
        pages.push(1, '...', current-1, current, current+1, '...', total);
      }
    }
    return pages;
  }

  return (
    <div className='mt-16 space-x-4'>
      <button 
      disabled={page===1} 
      className={`${page===1 ? "bg-[#422e1f]" : "bg-[#ef5066]"} text-[#011631] font-semibold rounded px-3 py-1 cursor-pointer`}
      onClick={()=>pageHandler(page-1)}
      >
        Prev
      </button>
      {
        getPages(page, dynamicPage)?.map((item, index)=>{
          return (
            <span key={index}
            onClick={()=> typeof item === "number" && pageHandler(item)}
            className={`${item===page ? "font-bold text-lg text-[#be8457]" : "text-white"} cursor-pointer`}
            >
              {item}
            </span>
          )
        })
      }
      <button 
      disabled={page===dynamicPage} 
      className={`${page===dynamicPage ? "bg-[#422e1f]" : "bg-[#ef5066]"} text-[#011631] font-semibold rounded px-3 py-1 cursor-pointer`}
      onClick={()=>pageHandler(page+1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
