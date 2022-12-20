import Link from 'next/link'
import React from 'react'
import Login from './Login'

const Hero = () => {
  return (
    <div className='
        text-center'
    >
        <Link href='/wallet'>
            <h1 className='
                text-gold
                text-4xl
                p-10
                font-bold'
            >HELLO WORLD</h1>
        </Link>
        
        <div className='
            bg-gray-800
            rounded-full
            mx-auto
            w-[200px]
            border-gray2
            origin-shadow'
        >
            <div className='
                bg-gray-800
                rounded-full
                py-5
                border-gold'
            >
                <Login />
            </div>
        </div>
        <Link href='/wallet'>
            <p className='
                text-gold
                pt-10
                origin-text-shadow'
            >Click to Start</p>
        </Link>
    </div>
  )
}

export default Hero