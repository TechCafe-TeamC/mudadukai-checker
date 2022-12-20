import { initializeApp } from "firebase/app"
import { getAuth , GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCBtUVFGvsCfidnAuV2hdaE591C4BPF7dM",
  authDomain: "techcafeapplogin.firebaseapp.com",
  projectId: "techcafeapplogin",
  storageBucket: "techcafeapplogin.appspot.com",
  messagingSenderId: "767334064374",
  appId: "1:767334064374:web:0048e9424cd2926cc0ccd7"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const provider = new GoogleAuthProvider()


export { auth, provider }