/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { auth, provider } from '../hooks/firebase'
import { useAuthState } from "react-firebase-hooks/auth"
import Link from 'next/link'
import { signInWithPopup } from 'firebase/auth'
import Login from './Login'

const Hero = () => {
  const [user] = useAuthState(auth)

  return (
    <div>
        {user ? (
            <Login />
        ) : (
            <div className='
              flex
              justify-center
              items-center'
            >
                <div className='
                    w-full
                    h-screen'
                ></div>
                <div className='
                absolute
                text-center
                '
                >
                    <div>
                        <h1 className='
                        text-gold
                        text-4xl
                        p-10
                        font-bold'
                        >HELLO WORLD</h1>
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
                            <LogInButton />
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default Hero

// ログイン

const LogInButton = () => {
  const LogInWithGoogle = () => {
    // firebase google login
    signInWithPopup(auth, provider)
  }
  return (
    <button onClick={LogInWithGoogle}>
      Google Login
    </button>
  )
}
