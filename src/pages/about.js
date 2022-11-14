import React, {useState} from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import { AboutObj, AboutObjFour, AboutObjThree, AboutObjTwo} from '../components/AboutSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    {/* <HeroSection /> */}
    <AboutSection {...AboutObj} />
    <AboutSection {...AboutObjTwo} />
    <AboutSection {...AboutObjThree} />
    <AboutSection {...AboutObjFour} />
    <Footer/>
    </>
  )
}

export default Home