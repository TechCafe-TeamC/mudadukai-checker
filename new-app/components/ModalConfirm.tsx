/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import useTotalToCoin from '../hooks/useTotalToCoin'
import { EOL } from 'os'
type Props = {
    imageConfirm: File
    total: number
    BtnConfitm: () => void
}

export const ModalConfirm = ({ imageConfirm, total, BtnConfitm }: Props) => {
    const coins: number[] = useTotalToCoin(total)


    return (
        <div className=''>
            <div className='flex justify-center'>
                <img src={window.URL.createObjectURL(imageConfirm)}
                    className="
                        min-w-[16rem] max-w-[16rem]
                        min-h-[22rem] max-h-[22rem]
                        p-5
                        object-contain
                        bg-gray-900
                        rounded-3xl"
                >
                </img>
                <div className='
                    h-full
                    my-auto
                    ml-3
                    text-2xl
                    list-none
                    text-gold'
                >
                    <li className='flex justify-between border-b-2 border-gray-600 p-2'>
                        <p className='w-20'>500円</p>
                        <p className='w-4'>×</p>
                        <p className=' w-12 text-white text-right'>{coins[0]}</p>
                    </li>
                    <li className='flex justify-between border-b-2 border-gray-600 p-2'>
                        <p className='w-20'>100円</p>
                        <p className='w-4'>×</p>
                        <p className=' w-12 text-white text-right'>{coins[1]}</p>
                    </li>
                    <li className='flex justify-between border-b-2 border-gray-600 p-2'>
                        <p className='w-20'>50円</p>
                        <p className='w-4'>×</p>
                        <p className=' w-12 text-white text-right'>{coins[2]}</p>
                    </li>
                    <li className='flex justify-between border-b-2 border-gray-600 p-2'>
                        <p className='w-20'>10円</p>
                        <p className='w-4'>×</p>
                        <p className=' w-12 text-white text-right'>{coins[3]}</p>
                    </li>
                    <li className='flex justify-between border-b-2 border-gray-600 p-2'>
                        <p className='w-20'>5円</p>
                        <p className='w-4'>×</p>
                        <p className=' w-12 text-white text-right'>{coins[4]}</p>
                    </li>
                    <li className='flex justify-between border-b-2 border-gray-600 p-2'>
                        <p className='w-20'>1円</p>
                        <p className='w-4'>×</p>
                        <p className=' w-12 text-white text-right'>{coins[5]}</p>
                    </li>
                </div>
            </div>
            <div className='flex justify-between items-center m-5'>
                <div className='
                    text-2xl
                    text-gold
                    flex
                    p-5
                    leading-10'
                >
                    <p>合計：</p>
                    <p className='text-white font-bold text-3xl'>{total + "円"}</p>
                </div>
                <button onClick={BtnConfitm}
                    className='
                        rounded-full
                        border-gray
                        origin-shadow'
                >
                    <div className='
                        p-3
                        w-28
                        text-2xl
                        text-gold
                        text-center
                        rounded-full
                        border-gold'
                    >
                        確認
                    </div>
                </button>
            </div>

        </div>
    )
}
