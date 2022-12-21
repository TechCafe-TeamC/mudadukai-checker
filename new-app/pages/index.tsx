import type { NextPage } from 'next'
import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className='
        flex
        justify-center
        items-center'
      >
        <Hero />
      </div>
    </Layout>
  )
}

export default Home
