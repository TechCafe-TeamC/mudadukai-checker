import React from 'react'
type Props = {
    imageConfirm: File
    total: number
}

export const ModalConfirm = ({ imageConfirm, total }: Props) => {

    return (
        <div className='text-center'>
            <img src={window.URL.createObjectURL(imageConfirm)} className="w-48 h-48 object-contain text-center"></img>
            <p className='h-48 text-3xl'>
                {"合計：" + total  }
            </p>
            <p className='h-48 text-3xl'>
                {"合計：" + total }
            </p>
            <button>確認</button>
        </div>
    )
}
