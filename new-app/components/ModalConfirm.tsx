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
        <div className='text-center'>
            <img src={window.URL.createObjectURL(imageConfirm)} className="w-48 h-48 object-contain text-center"></img>
            <button onClick={BtnConfitm}>確認</button>

            <p className='h-48 text-3xl'>
                {"合計:" + total + "\n"}
                <li>
                    {"500円:" + coins[0]}
                </li>
                <li>
                    {"100円:" + coins[1]}
                </li>
                <li>
                    {"50円:" + coins[2]}
                </li>
                <li>
                    {"10円:" + coins[3]}
                </li>
                <li>
                    {"5円:" + coins[4]}
                </li>
                <li>
                    {"1円:" + coins[5]}
                </li>
            </p>

        </div>
    )
}
