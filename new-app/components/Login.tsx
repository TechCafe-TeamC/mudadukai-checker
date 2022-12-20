import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../hooks/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import Image from 'next/image'

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

// ユーザーアイコン表示
const UserInfo = () => {
  return (
    <div>
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