import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'
import { motion } from 'framer-motion'
import LoginWin from '../components/Login'

const login = () => {
  return (
    <motion.div
      initial={{ y: 1000,opacity:0.5 }}
      animate={{ y: 0,opacity:1 }}
      exit={{ y: 1000,opacity:0.5 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
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
      {/* ログインウィンドウ */}
      <div>
        <h1 className='
          '
        >ログイン</h1>
        <LoginWin />
      </div>
    </motion.div>
  )
}

export default login