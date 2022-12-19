import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'

const WalletHeader = () => {
  return (
    <div className='
      flex-col absolute right-5 top-5'
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
          justify-center
          hover:bg-orange-100'
      >
        <Icon.House
          size='32'
          className='
            text-gold'
        />
      </Link>
      {/* カレンダーの表示 */}
      <Link href='/' 
        className='
        bg-gray-800
          m-5
          p-[14px]
          w-16
          h-16
          rounded-full
          border-gold
          flex
          justify-center'
      >
        <Icon.Calendar3
          size='30'
          className='
            text-gold'
        />
      </Link>
    </div>
  )
}

export default WalletHeader