/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import WalletNav from '../components/WalletNav'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import styled from "@emotion/styled"
import { ShowModal } from '../components/ShowModal'
import * as Icon from 'react-bootstrap-icons'
import Link from 'next/link'
import { ShowFallYen } from '../components/ShowFallYen'
import { ModalConfirm } from '../components/ModalConfirm'
import useTotalToCoin from '../hooks/useTotalToCoin'
import { useAuth } from '../context/auth'
import { useRouter } from 'next/router'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { db } from '../firebase/client'
import { PostMoney } from '../types/PostMoney'
import { zeroPadding } from '../lib/wallet'
import Button from '../components/wallet/Button'
import { motion } from 'framer-motion'
import { walletTransition } from '../animations/variants'

const wallet = () => {
  const { fbUser, isLoading } = useAuth()
  const router = useRouter()

  const [showModal, setshowModal] = useState<boolean>(false)
  const OpenModal = () => setshowModal(true)
  const CloseModal = () => setshowModal(false)

  const [showConfirm, setshowConfirm] = useState<boolean>(false)
  const OpenConfirm = () => setshowConfirm(true)
  const CloseConfirm = () => setshowConfirm(false)
  // 画像ファイルの情報
  const [imageConfirm, setimageConfirm] = useState<File>()
  const [insertMoney, setinsertMoney] = useState<number>(0) // 入れたお金
  const [insertCoin, setinsertCoin] = useState<number[]>([0, 0, 0, 0, 0, 0]) // 入れた金額コイン

  // 今月の使用金額のデータ取得
  const [userData, setUserData] = useState<any[]>([])
  const [totalMonthMoney, setTotalMonthMoney] = useState<number>(0) //表示させる今月の合計金額

  useEffect(() => {
    if (fbUser) {
      const docRef = query(collection(db, `posts`), where("userId", "==", fbUser.uid))
      getDocs(docRef).then(snapshot => {
        let results: any[] = [];

        snapshot.docs.forEach(doc => {
          results.push({ id: doc.id, ...doc.data() })
          setUserData(results)
        })
      })
    }
  }, [fbUser, insertCoin])

  const [calendarDate, setCalendarDate] = useState<string[]>([]) // 月のカレンダーの日付配列
  const [calendarTotal, setCalendarTotal] = useState<number[]>([]) // 月のカレンダーの日ごとの合計金額配列

  useEffect(() => {
    if (userData.length > 0) {
      let today = new Date()
      let year = today.getFullYear()
      let month = today.getMonth() + 1
      const curMonth: string = year + '-' + zeroPadding(month, 2) //現在の年-月
      const filterData = userData.filter((data) => data.createdAt.slice(0, 7) == curMonth)
      let totalMoney = 0
      filterData.map((data) => {
        totalMoney = totalMoney + data.money
      })
      setTotalMonthMoney(totalMoney)

      let lastDay: number
      let monthLastDay = new Date(year, month, 0)
      lastDay = monthLastDay.getDate() // 月の最終日

      // calendarDateのデータ作成
      const arrCalendarDate: string[] = []
      for (let i = 1; i <= lastDay; i++) {
        arrCalendarDate.push(curMonth + '-' + zeroPadding(i, 2))
      }
      setCalendarDate(arrCalendarDate)

      // calendarTotalのデータ作成
      const arrCalendarTotal: number[] = []
      // 最終日まで配列を作成する
      for (let i = 0; i < lastDay; i++) {
        let calcTotal: number = 0
        let matchData = userData.filter((data) => data.createdAt == calendarDate[i])
        if (matchData.length > 0) {
          for (let j = 0; j < matchData.length; j++) {
            calcTotal = calcTotal + matchData[j].money
          }
        }
        arrCalendarTotal.push(calcTotal)
      }
      setCalendarTotal(arrCalendarTotal)
    }
  }, [userData])

  const OnOpenComfirm = (file: File, total: number) => { // モーダル開くのとファイルにデータ入れるの同時に行う
    OpenConfirm()
    setimageConfirm(file)
    setinsertMoney(total)
  }

  const handleCoinStart = () => { // 最初のコインの処理
    setinsertCoin(useTotalToCoin(totalMonthMoney))
  }

  useEffect(() => {
    handleCoinStart() // 最初にコイン入れる

  }, [totalMonthMoney])

  // 後日開発で使う予定
  // const handleCoinInsert = (coin: number[]) => { // 
  //   const result = insertCoin.map((e, i) =>
  //     (e + coin[i])
  //   )
  //   setinsertCoin(result)
  // }

  const colorCalendar = (calendarTotal: number) => {
    let _calendarTotal = calendarTotal

    _calendarTotal = (_calendarTotal / 10000)
    _calendarTotal = Math.max(_calendarTotal, 0)
    _calendarTotal = Math.min(_calendarTotal, 1)
    if (_calendarTotal <= 0.3 && _calendarTotal != 0) {
      _calendarTotal = 0.3
    }
    return `rgba(253, 205, 31, ${_calendarTotal})`
  }

  // ログインしていなければルートディレクトリに飛ばす処理
  if (isLoading) {
    return null
  }

  if (!fbUser) {
    router.push("/")
    return null
  }

  // モーダルの確定押した時の処理
  const BtnConfirm = () => {
    setinsertCoin([0, 0, 0, 0, 0, 0])

    CloseConfirm()

    // 送信系書いてください
    const ref = doc(collection(db, "posts"))
    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()

    const dateNow: string = year + '-' + zeroPadding(month, 2) + '-' + zeroPadding(day, 2)
    const post: PostMoney = {
      id: ref.id,
      money: insertMoney,
      createdAt: dateNow,
      userId: fbUser.uid
    }

    setDoc(ref, post).then(() => {
      // alert("データ送信しました")
    })
  }

  return (
      <motion.div
        {...walletTransition}
      >
        <div className='
        flex
        justify-right
        w-full
        h-screen'
        >
          <div className='
            absolute
            top-0 left-0
            w-full
            h-screen
            z-[-1]'
          >
            <ShowFallYen coin={insertCoin!} />
          </div>          
          
          <div className='
          top-5
          flex
          x-center
          md:gap-0
          gap-5
          justify-center
          items-center'
          >
            {/* トップページへ */}
              <Button>
                <Link href='/'>
                  <Icon.House
                    size='30'
                    className='
                    text-gold'
                  />
                </Link>
              </Button>
            {/* 合計金額表示ウィンドウ */}
            <div className='flex
              bg-gray-800
              my-5
              rounded-full
              border-gray
              origin-shadow
              '
            >
              <div className='
                flex-row
                w-56
                px-10
                items-center
                h-full
                text-gold
                font-bold
                border-gold
                rounded-full
                text-1xl
                md:flex
                md:px-5
                md:w-auto'
              >
                <p className='w-[8.5rem] py-2 md:py-4 px-1'>今月の使用金額：</p>
                <div className='flex justify-center items-center w-[8.5rem]'>
                  <p className='bg-gray-900 p-1 px-2 w-28 rounded-md text-right text-2xl text-white origin-shadow-inset'>{totalMonthMoney}</p>
                  <p className='p-3'>円</p>
                </div>
              </div>
            </div>
          </div>
          {/* 下部のナビゲーション */}
          <WalletNav OnClick={OpenModal} OnOpenComforim={OnOpenComfirm} />
        </div>
        <ShowModal
          showModal={showModal}
          OpenModal={OpenModal}
          CloseModal={CloseModal}
          title="無駄遣いチェッカー"
        >
          <StyleWrapper>
            <FullCalendar
              plugins={[dayGridPlugin]}
              contentHeight='420px'
              headerToolbar={{ left: '', center: 'title', right: '' }}
              initialView="dayGridMonth"
              locale="ja"
              events={
                calendarDate.map((v, i) => {
                  return {
                    title: "", date: v, display: "background", backgroundColor: colorCalendar(calendarTotal[i])
                  }
                })
              }
            />
          </StyleWrapper>
        </ShowModal>
        {/* 確認のモーダル */}
        <ShowModal
          showModal={showConfirm}
          OpenModal={OpenConfirm}
          CloseModal={CloseConfirm}
          title="ご確認"
        >
          <StyleWrapper>
            <ModalConfirm imageConfirm={imageConfirm!} total={insertMoney} BtnConfitm={BtnConfirm} />
          </StyleWrapper>
        </ShowModal>

      </motion.div>
  )
}

const StyleWrapper = styled.div`
      .fc-toolbar {
        color: rgb(212,175,55);
        background: rgb(31 41 55);
        width: 434px;
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
      .fc-daygrid {
        width: 434px;
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