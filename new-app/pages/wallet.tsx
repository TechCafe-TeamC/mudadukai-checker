import React from 'react'
import WalletNav from '../components/WalletNav'
import { motion } from 'framer-motion'


const wallet = () => {
  return (
    <motion.div
      initial={{ y: 1000,opacity:0.5 }}
      animate={{ y: 0,opacity:1 }}
      exit={{ y: 1000,opacity:0.5 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <div className='
        flex
        justify-left
        w-full
        h-screen'
      >
        <WalletNav />
      </div>
    </motion.div>
  )
}

export default wallet