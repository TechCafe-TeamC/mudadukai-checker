/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { auth, provider } from '../hooks/firebase'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'

const Login = () => {

  return (
    <div className='
    flex
    justify-center
    items-center'
    >
      <Link href='/wallet'
        className='
          w-full
          h-screen'
      ></Link>
      <div className='
        absolute
        text-center
        '
      >
        <Link href='/wallet'>
          <h1 className='
            text-gold
            text-4xl
            p-10
            font-bold'
          >HELLO WORLD</h1>
        </Link>
        <div className='
          mb-6'
        >
          <UserInfo />
        </div>
        <div className='
            bg-gray-800
            rounded-full
            mx-auto
            w-52
            border-gray2
            origin-shadow'
        >
          <div className='
              bg-gray-800
              rounded-full
              border-gold
              text-gold
              text-xl
              py-3'
          >
            <LogOutButton />
          </div>
        </div>
        <Link href='/wallet'>
            <p className='
                text-gold
                pt-10
                origin-text-shadow'
            >Click to Start</p>
        </Link>
      </div>
    </div>
  )
}

export default Login

// ユーザーアイコン表示
const UserInfo = () => {
  return (
    <div className='
      flex
      justify-center
      w-28
      rounded-full
      mx-auto
      border-gray
      origin-shadow'
    >
      <img className='
      bg-gray-800
        rounded-full
        border-gold'
        src={auth.currentUser?.photoURL! as string}
        alt="" 
      />
    </div>
  )
}

// ログアウト
const LogOutButton = () => {
  return (
    <button onClick={() => auth.signOut()} >
      Log Out
    </button>
  )
}
