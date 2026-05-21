import Experience from '@/components/home/Experience'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import React from 'react'
import Projects from '../components/home/Projects'
import PaySlider from '@/components/home/Pay'

const Page = () => {
  return (
    <div>
       <Hero/>
      <Experience/>
      <Services/>
      <Projects/>
      <PaySlider/>
      
    </div>
  )
}

export default Page
