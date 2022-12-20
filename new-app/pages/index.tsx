import type { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ y: -1000,opacity:0.5 }}
      animate={{ y: 0,opacity:1 }}
      exit={{ y: -1000,opacity:0.5 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <div className='
        flex
        justify-center
        items-center'
      >
        <Hero />
      </div>
    </motion.div>
  )
}

export default Home
