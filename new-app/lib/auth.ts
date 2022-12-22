import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import { auth } from "../firebase/client"

export const login = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider).then((result) => {
        alert(`${result.user.displayName}さんこんにちは`)
    })
    .catch((err) => console.log(err))
}

export const logout = () => {
    signOut(auth).then(() => {
        alert("サインアウト完了")
    })
}