import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='text-center'>
        <h1 className='font-black text-4xl p-10'>HELLO WORLD</h1>
        <div className='bg-gray-100 rounded-3xl w-[150px] py-4 mx-auto'>
            <Link href='/login'>
                <div className='text-xl py-2'>Login</div>
            </Link>
            <Link href='/register'>
                <div className='text-xl py-2'>Register</div>
            </Link>
        </div>
        <Link href='/wallet'>
            <p className='p-5'>Click to Start</p>
        </Link>
    </div>
  )
}

export default Hero