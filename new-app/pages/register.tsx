import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'
import { motion } from 'framer-motion'

const register = () => {
  return (
    <motion.div
      initial={{ x: 2000 }}
      animate={{ x: 0 }}
      exit={{ x: -2000 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <div>
        <div className='
          flex
          justify-left'
        >
          {/* トップページへ */}
          <Link href='/' className='
            bg-gray-800
            m-5
            rounded-full
            border-gray
            origin-shadow
            flex
            justify-center'
          >
            <div
              className='
              bg-gray-800
              w-16
              h-16
              p-3
              border-gold
              rounded-full' 
            >
              <Icon.House
              size='32'
              className='
                text-gold'
              />
            </div>
          </Link>
        </div>
        This is register page
      </div>
    </motion.div>
  )
}

export default register