import type { NextPage } from 'next'
import React from 'react'
import Hero from '../components/Hero'
import { motion } from 'framer-motion'
import { indexTransition } from '../animations/variants'

const Home: NextPage = () => {
  return (
    <motion.div
      {...indexTransition}
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
