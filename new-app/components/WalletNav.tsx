import * as Icon from 'react-bootstrap-icons'
import React from 'react'
import { FileInput } from './FileInput'
import Button from './wallet/Button'

type Props = {
    OnClick: () => void
    OnOpenComforim: (file: File, total: number) => void
}

const WalletNav = ({ OnClick, OnOpenComforim }: Props) => {

    return (
        <div className='
            flex justify-between items-end mx-auto mb-16'
        >
            {/* 写真撮影ボタン */}
            <Button
                HtmlFor={"ImageSelect"}
            >
                <FileInput onChange={(OnOpenComforim)} isCapture={true} />
                <Icon.CameraFill
                    size='30'
                    className='text-gold'
                />
            </Button>

            {/* カレンダー表示ボタン */}
            <Button
                OnClick={OnClick}
            >
                <Icon.Calendar3
                    size='30'
                    className='text-gold'
                />
            </Button>
        </div>
    )
}

export default WalletNav