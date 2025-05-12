import FAQ from '@/components/FAQ'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import ParticlesBackground from '@/components/ParticlesBackground'
import React from 'react'


const page = () => {
    return (
    <div className=' h-screen '>
      <ParticlesBackground/>
     
      <Features/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default page