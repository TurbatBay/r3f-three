import React from 'react'
import TogglerButton from '@/components/Buttons'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between w-full h-[4rem] mt-4 text-center text-[#212025] mx-auto mr-4 p-10'>
      <div className='w-full md:w-2/5 flex justify-between items-center'>
        <TogglerButton />
        <ul className='flex underline justify-between items-center w-full md:w-[14rem] '>
          <li>About</li>
          <li>Product</li>
          <li>Resources</li>
        </ul>
      </div>

      <div className='w-full md:w-1/4 flex flex-col md:flex-row justify-between items-center mt-4 md:mt-0'>
        <p className=' underline mb-2 md:mb-0'>hello@devspire.com</p>
        <button className='bg-[#E8E9EB] text-[#212025] border rounded-full px-5 py-2.5'>
          Contact Us
        </button>
      </div>
    </nav>
  )
}

export default Navbar
