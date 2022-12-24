/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { auth } from "../firebase/client"
import { useAuthState } from "react-firebase-hooks/auth"
import Login from './Login'
import { login } from '../lib/auth'

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
                >
                </div>
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
                        >無駄遣いチェッカー</h1>
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
  return (
    <button onClick={login}>
      Google Login
    </button>
  )
}
