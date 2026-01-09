import React from 'react'
import HeroSection from './HeroSection'
import TopCategories from './TopCategories'
import CustomersSay from './CustomersSay'
import NewArrivals from './NewArrivals'
import NewBorn from './NewBorn'
import Questions from './Questions'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <TopCategories/>
        <CustomersSay/>
        <NewArrivals/>
        <NewBorn/>
        <Questions/>
    </div>
  )
}

export default Home