import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
      </main>

      <Footer />
      <Analytics />
    </>
  )
}

export default App