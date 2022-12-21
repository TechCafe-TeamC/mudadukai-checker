import React, { useState } from 'react'
import WalletNav from '../components/WalletNav'
import { motion } from 'framer-motion'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import styled from "@emotion/styled"
import { Button, Modal } from 'react-bootstrap'
import { ShowModal } from '../components/SHowModal'

const wallet = () => {
  const [showModal, setshowModal] = useState<boolean>(false)
  const OpenModal = () => setshowModal(true)
  const CloseModal = () => setshowModal(false)


  return (
    <motion.div
      initial={{ y: 1000, opacity: 0.5 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 1000, opacity: 0.5 }}
      transition={{ ease: "easeInOut", duration: 0.4 }}
    >

      <div className='
        flex
        justify-left
        w-full
        h-screen'
      >

        <WalletNav OnClick={OpenModal} />
      </div>
      {/* <StyleWrapper>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locales={[jaLocale]}
            locale="ja"
          />
        </StyleWrapper> */}
      <ShowModal
        showModal={showModal}
        OpenModal={OpenModal}
        CloseModal={CloseModal}
        title="無駄遣いCalendar"

      >aaaa</ShowModal>
    </motion.div >
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