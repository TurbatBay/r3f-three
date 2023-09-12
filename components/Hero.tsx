'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaArrowLeftLong, FaArrowUp, FaArrowUpRightDots } from 'react-icons/fa6'
import { FiArrowDownRight, FiArrowUp } from 'react-icons/fi'
import MyAnimatedBox from './Three'
import TogglerButton from '@/components/Buttons'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import asterisk from '../public/asterisk.png'

const Hero = () => {
  const [backgroundColor, setBackgroundColor] = useState([
    'black', // Default black background
    'transparent',
    'transparent',
  ])
  const [textColor, setTextColor] = useState([
    'white', // Default white text
    '#212025',
    '#212025',
  ])

  const handleClick = (index: number) => {
    const newBackgroundColor = Array(3).fill('transparent')
    newBackgroundColor[index] = 'black'

    const newTextColor = Array(3).fill('#212025')
    newTextColor[index] = 'white'

    setBackgroundColor(newBackgroundColor)
    setTextColor(newTextColor)
  }

  return (
    <section className='relative font-body'>
      <MyAnimatedBox />
      <div className='container flex justify-between max-w-screen-xl text-[#212127] items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-tight'>
        {/* LEFT SIDE CONTENT */}
        <div className='w-1/2'>
          <div className='flex items-center justify-between max-w-md'>
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`bg-${backgroundColor[index]} border-black border rounded-full text-${textColor[index]} text-sm px-4 py-2`}
                onClick={() => handleClick(index)}
              >
                {index === 0
                  ? 'Availibility and Reliability'
                  : index === 1
                  ? 'Security'
                  : 'Customization'}
              </button>
            ))}
          </div>

          <div className='overflow-hidden text-[6rem] font-semibold mb-[-1rem] text-[#212025]'>
            <div className='performance mb-[-3rem]'>Performance</div>
            <div className='opti'>Optimization</div>
          </div>

          <div className='flex justify-between items-center '>
            <Image src={asterisk} alt='asterisk' width={50} height={50} />
            <p className='w-[40%] text-sm tracking-tighter'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              earum reprehenderit.
            </p>
            <button className='bg-white opacity-60 hover:opacity-100 border rounded-full text-[#212025] px-4 py-2 m-2 w-[14rem] h-[6rem] flex items-center justify-center '>
              <FiArrowDownRight size={25} color={'black'} />
            </button>
          </div>
        </div>

        {/* Right side card */}
        <div className='border border-slate-200 bg-transparent rounded-[3.125rem] w-[17rem] h-[30rem]'>
          <div className='flex flex-col justify-between pt-6 pb-6 pr-6 pl-8'>
            <div className=' flex justify-between items-center '>
              <p className='w-3/4  text-xs'>
                Intuitive and user-friendly interface.
              </p>
              <button className='bg-white opacity-60 hover:opacity-100 rounded-full w-[3.125rem] h-[3.125rem] flex justify-center items-center origin-center rotate-45'>
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
            className='rounded-[50px] object-cover h-[16rem] w-[18rem]'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
