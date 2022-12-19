import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      exit={{ x: -2000 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <div className='
        flex
        justify-center
        items-center'
      >
        <Link href='/wallet'
          className='
            w-full
            h-screen'
        ></Link>
        <div className='
          absolute'
        >
          <Hero />
        </div>
      </div>
    </motion.div>
  )
}

export default Home
