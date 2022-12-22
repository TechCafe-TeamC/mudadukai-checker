import React from 'react'
import { motion } from 'framer-motion'
import { walletTransition } from '../animations/variants'

type Props = {
    children: React.ReactNode
  }

  const Layout2 = ({children}: Props) => {
    return (
        <motion.div
            {...walletTransition}
        >
            <div>{children}</div>
        </motion.div>
    )
}
export default Layout2