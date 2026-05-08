import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/EaseMart_Logo.png'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitterSquare } from 'react-icons/fa'

// 030b15
// 012a40

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#011631] via-[#012a40] to-[#011631] text-[#8d9ba8] border-t-1 border-[#a39da1] py-10'>
      <div className='max-w-7xl mx-auto px-4 md:flex md:justify-between'>
        {/*  info */}
        <div className='mb-6 md:mb-0'>
            <Link to='/'>
              <img src={logo} alt="" className='h-15 mb-8'/>
            </Link>
            <p className='text-sm'>Email: support@EaseMart.com</p>
            <p className='text-sm'>Phone: (123) 456-7890</p>
        </div>
        {/* customer service link */}
        <div className='mb-8 md:mb-0'>
            <h3 className='text-xl font-semibold text-[#a8adb3]'>Customer Service</h3>
            <ul className='mt-4 text-sm space-y-2'>
                <li>Contact Us</li>
                <li>Shipping & Returns</li>
                <li>FAQs</li>
                <li>Order Tracking</li>
                <li>Size Guide</li>
            </ul>
        </div>
        {/* social media links */}
        <div className='mb-8 md:mb-0'>
            <h3 className='text-xl font-semibold text-[#a8adb3]'>Follow Us</h3>
            <div className='flex space-x-4 mt-4'>
                <FaFacebook className='text-xl hover:scale-130 cursor-pointer transition-all'/>
                <FaInstagram className='text-xl hover:scale-130 cursor-pointer transition-all'/>
                <FaTwitterSquare className='text-xl hover:scale-130 cursor-pointer transition-all'/>
                <FaPinterest className='text-xl hover:scale-130 cursor-pointer transition-all'/>
            </div>
        </div>
        {/* newsletter subscription */}
        <div>
            <h3 className='text-xl font-semibold text-[#a8adb3]'>Stay in the Loop</h3>
            <p className='mt-2 text-sm'>Subscribe to get special offers, free giveaways, and more</p>
            <form action="" className='mt-9 flex'>
                <input 
                type="email" 
                placeholder='Your email address'
                className='w-full p-2 rounded-l-md  text-[#ced2d6] bg-[#012a40] focus:outline-none focus:ring-2 focus:ring-[#be8457]'
                />
                <button type='submit' className='bg-[#f24f66] text-[#011631] font-semibold border-3 border-[#be8457] cursor-pointer px-4 rounded-r-md'>Subscribe</button>
            </form>
        </div>
      </div>
      {/* bottom section */}
      <div className='mt-8 border-t border-gray-700 pt-6 text-center text-sm'>
        <p>&copy; {new Date().getFullYear()} <span className='font-semibold text-[#be8457]'>EaseMart</span>. All rights reserved</p>
        <p className='mt-2'> - built by Sanyuja with &hearts;</p>
      </div>
    </footer>
  )
}

export default Footer