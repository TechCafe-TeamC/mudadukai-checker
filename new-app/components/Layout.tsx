import React from 'react'
import { motion } from 'framer-motion'
import { indexTransition } from '../animations/variants'

type Props = {
    children: React.ReactNode
  }

  const Layout1 = ({children}: Props) => {
    return (
        <motion.div
            {...indexTransition}
        >
            <div>{children}</div>
        </motion.div>
    )
}
export default Layout1
