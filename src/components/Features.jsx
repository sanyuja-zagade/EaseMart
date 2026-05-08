import { Clock, Lock, RotateCcw, Truck } from 'lucide-react'
import React from 'react'

const features = [
    {icon: Truck, text: "Free Shiping", subtext: "On orders over Rs.100/-"},
    {icon: Lock, text: "Secure Payment", subtext: "100% protected payments"},
    {icon: RotateCcw, text: "Easy Returns", subtext: "7-days return policy"},
    {icon: Clock, text: "24/7 Support", subtext: "Dedicated custormer service"},
]

const Features = () => {
  return (
    <div className='bg-[#011631] border-t-1 shadow-md border-[#a39da1] py-8 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8'>
          {
            features.map((feature, index)=>{
              return <div key={index} className='flex justify-center items-center text-center sm:text-left'>
                <feature.icon className='flex-shrink-0 h-10 w-10 text-white' aria-hidden='true' />
                <div className='ml-4'>
                  <p className='text-base font-medium text-white'>{feature.text}</p>
                  <p className='mt-1 text-sm text-[#ccc1c9]'>{feature.subtext}</p>
                </div>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Features
