import React from 'react'
import TogglerButton from '@/components/Buttons'

const Navbar = () => {
  return (
    <nav className='flex flex-col md:flex-row justify-between w-full h-[4rem] mt-4 text-center text-[#212025] mx-auto mr-4 p-10 pt-5 absolute top-0 left-0'>
      <div className='w-full md:w-2/5 flex justify-between items-center'>
        {/* <TogglerButton /> */}
        <div className='relative mt-[-2.2rem]'>
          <button className='bg-transparent absolute  text-black border border-black pr-[5rem] pl-9 pt-3 pb-3  rounded-[5rem]'>
            ...
          </button>
          <button className='bg-black border border-black absolute left-[4rem] top-[-1] text-white px-6 pt-3 pb-3 rounded-[5rem]'>
            Menu
          </button>
        </div>
        <ul className='flex underline justify-between items-center w-[18rem]  '>
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
