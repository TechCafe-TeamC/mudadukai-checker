import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'

type Props = {
    children: React.ReactNode
  }

const Layout = ({children}: Props) => {
    return (
        <motion.div
            {...pageTransition}
        >
            <div>{children}</div>
        </motion.div>
    )
}

export default Layout