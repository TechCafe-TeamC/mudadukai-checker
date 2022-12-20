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
        
        <Login />
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