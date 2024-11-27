import axios from 'axios'
import { useEffect, useState } from 'react'
import ContactSection from './components/ContactSection'
import HomeSection from './components/HomeSection'
import ImageModel from './components/ImageModel'
import { Loading } from './components/Loading'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Stats from './components/Stats'

const makeReq = async () => {
  await axios.post('https://puce-bored-bass.cyclic.app/viewers/newViewer', {})
}

function App() {
  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  useEffect(() => {
    makeReq()
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPosition(window.scrollY)
    })
    return () => window.removeEventListener('resize', () => {})
  }, [])
  return (
    <>
      <Loading />
      <Navbar scrollPosition={scrollPosition} />
      <HomeSection />
      <Skills />
      <Stats />
      <Projects updateIsOpen={() => setIsOpen(!isOpen)} />
      <ContactSection />
      <ImageModel isOpen={isOpen} updateIsOpen={() => setIsOpen(!isOpen)} />
    </>
  )
}

export default App
