import React from 'react'
import Navbar from './Navbar';
import CoverSection from './CoverSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

function LandingPage() {
  return (
    <div className='h-screen '>
      <header >
        <Navbar/>
      </header>
      <main>
        <CoverSection/>
        <FeaturesSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default LandingPage;