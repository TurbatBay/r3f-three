import React from 'react'
import Image from 'next/image'
import asterisk from '../public/asterisk.png'
import { FaArrowLeftLong, FaArrowUp, FaArrowUpRightDots } from 'react-icons/fa6'
import MyAnimatedBox from './Three'
import TogglerButton from '@/components/Buttons'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
const Hero = () => {
  return (
    <section className='relative h-screen font-body'>
      <MyAnimatedBox />

      <div className=' flex justify-between  text-[#212127] w-full items-center  mt-10 p-10  absolute top-0 left-0'>
        {/* LEFT SIDE CONTENT */}

        <div className='w-[50%]'>
          <div className='flex items-center'>
            <button className='bg-[#212025] border-[#212025] border rounded-full text-white px-4 py-2 m-2'>
              Availibility and Reliability
            </button>
            <button className='bg-transparent border-[#212025] border rounded-full text-[#212025] px-4 py-2 m-2'>
              Security
            </button>
            <button className='bg-transparent border-[#212025] border rounded-full text-[#212025] px-4 py-2 m-2'>
              Customization
            </button>
          </div>
          <div>
            <div className='text-[6.2rem]  font-semibold mb-[-3rem]  text-[#212025]'>
              Performance
            </div>
            <div className='text-[6.2rem] font-semibold  text-[#212025]'>
              {' '}
              Optimization
            </div>
          </div>
          <div className='flex justify-between items-center w-70%'>
            <Image src={asterisk} alt='asterisk' width={50} height={50} />
            <p className='w-[40%] text-sm tracking-tighter'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              earum reprehenderit nulla qui ipsum maxim
            </p>
            <button className='bg-white opacity-50 hover:opacity-100 border rounded-full text-[#212025] px-4 py-2 m-2 w-[12rem] h-20 flex items-center justify-center'>
              <FaArrowLeftLong style={{ transform: 'scaleX(-1)' }} />
            </button>
          </div>
        </div>

        {/* Right side card */}

        <div className=' flex flex-col justify-between w-100% border border-slate-200 bg-transparent rounded-[50px] h-20% '>
          <div className='flex flex-col justify-between h-[45%] p-10'>
            <div className=' flex justify-between items-center'>
              <p className='w-[60%]'>Lorem ipsum dolor sit amet.</p>
              <button className='bg-white opacity-50 hover:opacity-100 rounded-full w-10 h-10 flex justify-center items-center '>
                <FaArrowUp />
              </button>
            </div>
            <p className='w-100% text-4xl font-light-bold'>
              User <br /> Experience
            </p>
            <div className='flex justify-between pt-5'>
              <p>Total Freelancers</p>
              <p>+244</p>
              <button className='bg-green-400 h-6 w-6 text-white rounded-full flex items-center justify-center'>
                <FaArrowUp />
              </button>
              <p>88%</p>
            </div>
          </div>
          <Image
            src={'/wave.jpg'}
            alt={'wave card pic'}
            width={300}
            height={300}
            className='w-full h-[60%] object-contain rounded-[50px]'
          />
        </div>
      </div>

      {/* </div> */}
    </section>
  )
}

export default Hero
