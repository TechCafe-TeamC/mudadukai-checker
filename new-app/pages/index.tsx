import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div className='flex justify-center items-center'>
      <Link href='/wallet' className='w-full h-screen bg-orange-300'></Link>
      <div className='absolute'>
        <Hero />
      </div>
    </div>
  )
}

export default Home
