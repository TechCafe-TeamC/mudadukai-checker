import Link from 'next/link'
import * as Icon from 'react-bootstrap-icons'
import React from 'react'
import { type } from 'os'
import { useState, useEffect } from 'react'
import { FileInput } from './FileInput'

type Props = {
    OnClick: () => void
    OnOpenComforim: (file: File, total: number) => void
}

const WalletNav = ({ OnClick, OnOpenComforim }: Props) => {
    const [image, setImage] = useState<HTMLInputElement>()

    return (
        <div className='
            flex justify-between items-end mx-auto mb-16'
        >
            {/* 画像をフォルダーから選択 */}
            <label htmlFor='ImageSelect'
                className='
                    bg-gray-800
                    m-5
                    rounded-full
                    border-gray
                    origin-shadow
                    flex
                    justify-center
                    cursor-pointer'
            >
                {/* 完成後にVisionAI呼ぶ */}
                <FileInput onChange={(OnOpenComforim)} isCapture={false} />
                <div className='
                bg-gray-800
                p-[13px]
                w-16
                h-16
                rounded-full
                border-gold'
                >
                    <Icon.Folder
                        size='33'
                        className='
                        text-gold'
                    />
                </div>
            </label>

            {/* 写真撮影 */}
            <label htmlFor='ImageSelect'
                className='
                    bg-gray-800
                    m-5
                    rounded-full
                    border-gray
                    origin-shadow
                    flex
                    justify-center
                    cursor-pointer'
            >
                {/* 完成後にVisionAI呼ぶ */}
                {/* <FileInput/> */}
                <FileInput onChange={(OnOpenComforim)} isCapture={true} />
                <div className='
                bg-gray-800
                p-[11px]
                w-16
                h-16
                rounded-full
                border-gold'
                >
                    <Icon.CameraFill
                        size='35'
                        className='
                        text-gold'
                    />
                </div>
            </label>
            <button>
            </button>

            {/* カレンダーの表示 */}
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