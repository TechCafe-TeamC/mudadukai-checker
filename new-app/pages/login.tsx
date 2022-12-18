import Link from 'next/link'
import React from 'react'

const login = () => {
  return (
    <div>
        <div className='flex justify-left'>
            <Link href='/' className='text-center'>TOP</Link>
        </div>
        This is Login page
    </div>
  )
}

export default login