import React from 'react'
import WalletNav from '../components/WalletNav'
import { motion } from 'framer-motion'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import styled from "@emotion/styled"

const wallet = () => {
  return (
    <motion.div
      initial={{ y: 1000, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0.5 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >
      <StyleWrapper>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale="ja"
        />
      </StyleWrapper>
      <div className='
        flex
        justify-left
        w-full
        h-screen'
      >

        <WalletNav />
      </div>
    </motion.div>
  )
}

const StyleWrapper = styled.div`
*{
  color:white
}
.fc {
  background:black
}
td{
  background:black
}

.fc-day-today{
  background-color:red !important
}
`

export default wallet