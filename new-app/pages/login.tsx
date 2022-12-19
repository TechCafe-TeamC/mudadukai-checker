import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'

const login = () => {
  return (
    <div>
        <div className='
          flex
          justify-left'
        >
          <Link href='/' 
            className='
            bg-gray-800
              m-5
              p-3
              w-11
              h-11
              rounded-full
              border-gold
              flex
              justify-center'
          >
            <Icon.House
              className='
                text-gold'
            />
          </Link>
        </div>
        This is Login page
    </div>
  )
}

export default login