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
          <div>
            <SignOutButton />
          </div>
        </div>
      ) : (
        <div className='
        text-gold
        text-xl
        py-3
        hover:text-white
        hover:font-bold'
        >
          <LogInButton />
        </div>
      )}
    </div>
  )
}

export default Login

const UserInfo = () => {
  
}

const LogInButton = () => {
  const LogInWithGoogle = () => {
    // firebase google login
    signInWithPopup(auth, provider)

  }
  return (
    <button onClick={LogInWithGoogle}>
      Googleでサインイン
    </button>
  )
}