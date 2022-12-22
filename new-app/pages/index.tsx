import type { NextPage } from 'next'
import React from 'react'
import Hero from '../components/Hero'
import Layout1 from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout1>
      <div className='
        flex
        justify-center
        items-center'
      >
        <Hero />
      </div>
    </Layout1>
  )
}

export default Home
