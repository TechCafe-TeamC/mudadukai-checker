/* eslint-disable @next/next/no-img-element */
import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../hooks/firebase'
import { useAuthState } from "react-firebase-hooks/auth"

const Login = () => {
  const [user] = useAuthState(auth)

  return (
    <div>
      {user ? (
        <div>
          <UserInfo />
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
        </div>
      ) : (
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
            <LogInButton />
          </div>
        </div>
      )}
    </div>
  )
}

export default Login

// ログイン
const LogInButton = () => {
  const LogInWithGoogle = () => {
    // firebase google login
    signInWithPopup(auth, provider)
  }
  return (
    <button onClick={LogInWithGoogle}>
      Googleでログイン
    </button>
  )
}

// ユーザーアイコン表示
const UserInfo = () => {
  return (
    <div className='flex justify-center rounded-full'>
      <img src={auth.currentUser?.photoURL! as string} alt="" />
    </div>
  )
}

// ログアウト
const LogOutButton = () => {
  return (
    <button onClick={() => auth.signOut()} >
      ログアウト
    </button>
  )
}
