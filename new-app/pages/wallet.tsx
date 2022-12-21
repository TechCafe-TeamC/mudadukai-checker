/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import WalletNav from '../components/WalletNav'
import { motion } from 'framer-motion'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import jaLocale from "@fullcalendar/core/locales/ja"
import styled from "@emotion/styled"
import { Button, Modal } from 'react-bootstrap'
import { ShowModal } from '../components/ShowModal'

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
        title="無駄遣いカレンダー"
      >
        <StyleWrapper>
          <FullCalendar
            plugins={[dayGridPlugin]}
            contentHeight='420px'
            headerToolbar={{left:'', center:'title', right:''}}
            initialView="dayGridMonth"
            locale="ja"
          />
        </StyleWrapper>
      </ShowModal>
    </motion.div >
  )
}

const StyleWrapper = styled.div`
.fc-toolbar {
  color: rgb(212,175,55);
  background: rgb(31 41 55);
  border: none;
}
.fc-scrollgrid {
  border: none;
  font-size: 0.9rem;
}
.fc-theme-standard th{
  height: 10px;
  border: none;
}
.fc-theme-standard td {
  border: none;
  background: rgb(17,24,39);
  overflow:hidden;
}
.fc .fc-daygrid-day.fc-day-today {
  background: rgb(17,24,39);
}
.fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-frame {
  background: rgb(17,24,39);
  outline: 3px solid white;
  outline-offset: -3px;
}
.fc .fc-daygrid-day-frame {
  height: 100%;
}
.fc .fc-daygrid-day-top {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100%;
}
`

export default wallet