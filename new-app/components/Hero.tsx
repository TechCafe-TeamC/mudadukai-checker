import Link from 'next/link'
import React from 'react'

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
            rounded-[3.5rem]
            mx-auto
            w-[200px]
            border-gray2
            origin-shadow'
        >
            <div className='
                bg-gray-800
                rounded-[3rem]
                py-5
                border-gold'
            >
                <Link href='/login'>
                    <div className='
                        text-gold
                        text-xl
                        py-3
                        hover:text-white
                        hover:font-bold'
                    >Login</div>
                </Link>
                <Link href='/register'>
                    <div className='
                        text-gold
                        text-xl
                        py-3
                        hover:text-white
                        hover:font-bold'
                    >Register</div>
                </Link>
            </div>
        </div>
        <Link href='/wallet'>
            <p className='
                text-gold
                p-5
                origin-text-shadow'
            >Click to Start</p>
        </Link>
    </div>
  )
}

export default Hero