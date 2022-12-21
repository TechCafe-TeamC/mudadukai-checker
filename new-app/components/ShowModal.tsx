import React, { useState } from 'react'
import { motion } from 'framer-motion'

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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ ease: "easeInOut", duration: 0.4 }}
                    >
                    <div className="center z-50">
                        <div className="relative mx-auto w-[500px] border-gray2 origin-shadow rounded-3xl bg-gray-800">
                            {/*content*/}
                            <div className="border-gold rounded-2xl bg-gray-800 text-gold h-[600px]">
                                {/*header*/}
                                <div className="flex items-start p-3 border-b border-solid border-gray-600">
                                    <h3 className="text-2xl">
                                        {title}
                                    </h3>
                                </div>
                                {/*body*/}
                                <div className="relative p-5 flex-auto text-white">
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
