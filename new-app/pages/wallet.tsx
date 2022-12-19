import React from 'react'
import WalletHeader from '../components/WalletHeader'
import { motion } from 'framer-motion'


const wallet = () => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div className='
        flex
        justify-left
        w-full
        h-screen'
      >
        <WalletHeader />
      </div>
    </motion.div>
  )
}

export default wallet