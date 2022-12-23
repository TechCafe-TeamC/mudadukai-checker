import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../animations/variants'

type Props = {
    showModal: boolean
    OpenModal: () => void
    CloseModal: () => void
    title: string
    children: React.ReactNode
}

export const ShowModal = ({ showModal, OpenModal, CloseModal, title, children }: Props) => {
    return (
        <>
            {showModal ? (
                <>
                    <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                    >
                    <div className="center z-50">
                        <div className="relative mx-auto w-[500px] border-gray2 origin-shadow rounded-3xl bg-gray-800">
                            {/*content*/}
                            <div className="border-gold rounded-2xl bg-gray-800 text-gold h-[600px]">
                                {/*header*/}
                                <div className="flex justify-between p-3 border-b border-solid border-gray-600">
                                    <div className="text-2xl">
                                        {title}
                                    </div>
                                    <button className='text-3xl font-bold px-2' onClick={CloseModal}>
                                        ×
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-5 flex items-center h-[90%] my-auto text-white">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-30 fixed inset-0 z-40 bg-gray-900"
                        onClick={CloseModal}
                    ></div>
                    </motion.div>
                </>
            ) : null}
        </>
    )
}
