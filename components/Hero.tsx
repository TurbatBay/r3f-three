import React from 'react'
import Image from 'next/image'
import asterisk from '../public/asterisk.png'
import { FaArrowLeftLong, FaArrowUp, FaArrowUpRightDots } from 'react-icons/fa6'
import { FiArrowDownRight, FiArrowUp } from 'react-icons/fi'
import MyAnimatedBox from './Three'
import TogglerButton from '@/components/Buttons'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <section className='relative  font-body'>
      <MyAnimatedBox />
      <div className=' container flex justify-between max-w-screen-xl   text-[#212127] items-center  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-tight '>
        {/* LEFT SIDE CONTENT */}

        <div className='w-1/2'>
          <div className='flex items-center justify-between max-w-md'>
            <button className='bg-[#212025] border-[#212025] border rounded-full text-white text-sm px-4 py-2 '>
              Availibility and Reliability
            </button>
            <button className='bg-transparent border-[#212025] border rounded-full text-[#212025] text-sm px-4 py-2 '>
              Security
            </button>
            <button className='bg-transparent border-[#212025] border rounded-full text-[#212025] text-sm px-4 py-2'>
              Customization
            </button>
          </div>

          <div className='overflow-hidden text-[6rem]  font-semibold mb-[-1rem]  text-[#212025]'>
            <div className='performance mb-[-3rem]'>Performance</div>
            <div className='opti'>Optimization</div>
          </div>

          <div className='flex justify-between items-center '>
            <Image src={asterisk} alt='asterisk' width={50} height={50} />
            <p className='w-[40%] text-sm tracking-tighter'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              earum reprehenderit.
            </p>
            <button className='bg-white opacity-50 hover:opacity-100 border rounded-full text-[#212025]  px-4 py-2 m-2 w-[14rem] h-[6rem] flex items-center justify-center  '>
              <FiArrowDownRight />
            </button>
          </div>
        </div>

        {/* Right side card */}

        <div className='  border border-slate-200  bg-transparent rounded-[3.125rem] w-[17rem] h-[30rem] '>
          <div className='flex flex-col justify-between  pt-6 pb-6 pr-6 pl-8'>
            <div className=' flex justify-between items-center '>
              <p className='w-3/4  text-xs'>
                Intuitive and user-friendly interface .
              </p>
              <button className='bg-white opacity-50 hover:opacity-100 rounded-full w-[3.125rem] h-[3.125rem] flex justify-center items-center origin-center rotate-45'>
                <FiArrowUp />
              </button>
            </div>
            <p className='w-full text-3xl pt-[0.55rem] font-semibold'>
              User <br /> Experience
            </p>
            <div className='flex justify-between pt-5 pb-2  text-xs'>
              <p>Total Freelancers</p>
              <p>+244</p>
              <button className='bg-green-400 h-4 w-4 text-white rounded-full flex items-center justify-center'>
                <FiArrowUp />
              </button>
              <p>88%</p>
            </div>
          </div>
          <img
            src='/wave.jpg'
            alt='wave'
            className=' rounded-[50px] object-cover h-[16rem] w-[18rem]'
          />
          {/* <Image
            src={'/wave.jpg'}
            alt={'wave card pic'}
            width={292}
            height={222}
            className=' object-fill rounded-[50px]'
          /> */}
        </div>
      </div>

      {/* </div> */}
    </section>
  )
}

export default Hero
