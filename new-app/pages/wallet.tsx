import React from 'react'
import WalletNav from '../components/WalletNav'
import { motion } from 'framer-motion'


const wallet = () => {
  return (
    <motion.div
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      exit={{ x: -2000 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
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