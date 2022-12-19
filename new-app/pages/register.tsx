import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'
import { motion } from 'framer-motion'

const register = () => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: -1000 }}
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div>
        <div className='
          flex
          justify-left'
        >
          {/* トップページへ */}
          <Link href='/' 
            className='
            bg-gray-800
              m-5
              p-3
              w-16
              h-16
              rounded-full
              border-gold
              flex
              justify-center'
          >
            <Icon.House
              size='32'
              className='
                text-gold'
            />
          </Link>
        </div>
        This is register page
      </div>
    </motion.div>
  )
}

export default register