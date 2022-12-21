import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'
import { type } from 'os'

type Props = {
    OnClick: () => void
}

const WalletNav = ({ OnClick }: Props) => {


    return (
        <div className='
      flex-col absolute right-5 top-5'
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
            {/* カレンダーの表示 */}
            {/* <Link href='/' */}
            <button onClick={OnClick}
                className='
            bg-gray-800
            m-5
            rounded-full
            border-gray
            origin-shadow
            flex
            justify-center'
            >
                <div className='
                bg-gray-800
                p-[14px]
                w-16
                h-16
                rounded-full
                border-gold'
                >
                    <Icon.Calendar3
                        size='30'
                        className='
                    text-gold'
                    />
                </div>
            </button>
        </div>
    )
}

export default WalletNav