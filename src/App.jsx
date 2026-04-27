import './styles/globals.css'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Toolkit from './components/Toolkit'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Toolkit />
      <Gallery />
      <Contact />
    </>
  )
}

export default App
