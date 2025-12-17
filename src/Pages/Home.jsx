import React from 'react'

import Banner from '../Components/Banner'
import About from '../Components/About'

import ProjectData from '../Components/ProjectData'
import Contact from '../Components/Contact'
import Skill from '../Components/Skill'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'




const Home = () => {
  return (
  <>
  <Navbar/>
  <section id='home' className='mt-5'>
  <Banner/>
  </section>
 <section id='about'>
 <About/>
 </section>
<section id='skill'>
<Skill/>
</section>
 <section id='project'>
 <ProjectData/>
 </section>

  <section id='contact'>
  <Contact/>
  </section>
 <Footer/>
  
  
  </>
  )
}

export default Home