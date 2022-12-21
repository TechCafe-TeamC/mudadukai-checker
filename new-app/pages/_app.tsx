import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className='
      w-full
      h-screen
      bg-gray-900
      overflow-hidden
      font-kaisei'
    >
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Component {...pageProps} key={router.asPath} />
      </AnimatePresence>
    </div>
  )
}

export default MyApp
