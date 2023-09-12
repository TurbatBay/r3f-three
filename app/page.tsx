// 'use client'
import Image from 'next/image'
import MyAnimatedBox from '@/components/Three'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
export default function Home() {
  return (
    <main className='container mx-auto'>
      <Navbar />
      {/* <MyAnimatedBox /> */}
      <Hero />
    </main>
  )
}
