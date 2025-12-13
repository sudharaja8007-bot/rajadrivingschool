import React from 'react'
import HomeSection from '../Section/LandingPage/HeroSection'
import Layout from '../components/Layout'
import About from '../Section/LandingPage/About'
import OurCourses from '../Section/LandingPage/OurCourses'
import Instructor from '../Section/LandingPage/Instructor'

function LandingPage() {
  return (
    <Layout>
        <HomeSection/>
        <About/> 
        <OurCourses/>
        <Instructor/>   
    </Layout>
  )
}

export default LandingPage