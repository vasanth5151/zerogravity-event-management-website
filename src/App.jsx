import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Whychooseus from './components/Whychooseus'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FAQSection from './components/Faqsection'

const App = () => {
  return (
   <>

   <Navbar />
   <Herosection />
   <About />
   <Services />
   <Gallery />
   <Whychooseus />
   <Testimonials />
    <Contact />
    <FAQSection />
   <Footer />

   </>
  )
}

export default App