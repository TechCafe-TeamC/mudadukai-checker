/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import WalletNav from '../components/WalletNav'
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import styled from "@emotion/styled"
import { ShowModal } from '../components/ShowModal'
import { FileInput } from '../components/FileInput'
import * as Icon from 'react-bootstrap-icons'
import Link from 'next/link'
import Layout2 from '../components/WalletLayout'
import { ShowFallYen } from '../components/ShowFallYen'
import { ModalConfirm } from '../components/ModalConfirm'
import useTotalToCoin from '../hooks/useTotalToCoin'
import { useAuth } from '../context/auth'
import { useRouter } from 'next/router'
import { collection, doc, getDocs, onSnapshot, query, setDoc, where } from 'firebase/firestore'
import { db } from '../firebase/client'
import { PostMoney } from '../types/PostMoney'
import { zeroPadding } from '../lib/wallet'

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
  const [insertCoin, setinsertCoin] = useState<number[]>([0,0,0,0,0,0]) // 入れた金額コイン

  // 今月の使用金額のデータ取得
  const [userData, setUserData] = useState<any[]>([])
  const [totalMonthMoney, setTotalMonthMoney] = useState<number>(0) //表示させる今月の合計金額

  useEffect(() => {
    if (fbUser) {
      const docRef = query(collection(db, `posts`), where("userId", "==", fbUser.uid))
      getDocs(docRef).then(snapshot => {
        let results: any[] = [];
        
        snapshot.docs.forEach(doc => {
          results.push({id: doc.id, ...doc.data()})
          setUserData(results)
        })
      })
    }
  }, [fbUser, insertCoin])

  useEffect(() => {
    if (userData.length > 0) {
      let today = new Date()
      let year = today.getFullYear()
      let month = today.getMonth() + 1
      const curMonth: string = year + '-' + zeroPadding(month, 2) //現在の年-月
      const filterData = userData.filter((data) => data.createdAt.slice( 0, 7 ) == curMonth)
      let totalMoney = 0
      filterData.map((data) => {
        totalMoney = totalMoney + data.money
      })
      setTotalMonthMoney(totalMoney)
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

  const handleCoinInsert = (coin: number[]) => { // 挿入のコインの処理
    const result = insertCoin.map((e, i) =>
      (e + coin[i])
    )
    setinsertCoin(result)
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
    CloseConfirm()
    handleCoinInsert(insertCoin)

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
      alert("データ送信しました")
    })
  }

  return (
    <>
      <Layout2>
        <FileInput onChange={OnOpenComfirm} />

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
          absolute
          left-5
          top-5
          flex
          gap-5
          justify-center'
          >
            {/* トップページへ */}
            <Link href='/' className='
              bg-gray-800
              m-5
              rounded-full
              border-gray
              origin-shadow'
            >
              <div
                className='
                bg-gray-800
                w-16
                h-16
                p-3
                border-gold
                rounded-full'
              >
                <Icon.House
                  size='32'
                  className='
                  text-gold'
                />
              </div>
            </Link>
            {/* 合計金額表示ウィンドウ */}
            <div className='
              bg-gray-800
              my-5
              rounded-full
              border-gray
              origin-shadow'
            >
              <div className='flex items-center h-full px-5 text-gold font-bold border-gold rounded-full text-1xl'>
                <p className='w-36 p-2'>今月の使用金額：</p>
                <p className='bg-gray-900 p-1 px-2 w-32 rounded-md text-right text-2xl text-white origin-shadow-inset'>{totalMonthMoney}</p>
                <p className='p-3'>円</p>
              </div>
            </div>
          </div>
          {/* 下部のナビゲーション */}
          <WalletNav OnClick={OpenModal} />
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

      </Layout2>
    </>
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