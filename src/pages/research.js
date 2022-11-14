import React, {useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
import ResearchSection from '../components/ResearchSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    {/* <HeroSection/> */}
    <ResearchSection/>

    <Footer/>
    </>
  )
}

export default Home