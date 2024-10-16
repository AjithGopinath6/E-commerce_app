import React from 'react'
import Hero from '../Components/Hero'
import LatestCollections from '../Components/LatestCollections'
import BestSeller from '../Components/BestSeller'

function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
    </div>
  )
}

export default Home