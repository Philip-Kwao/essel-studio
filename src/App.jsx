import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Pricing from './pages/pricing/Pricing'
import TermsAndConditions from './pages/terms-and-conditons/TermsAndConditions'
import MusicPromotion from './pages/music-promo/MusicPromotion'
import Rental from './pages/rental/Rental'
import MainService from './pages/service/MainService'
import MusicDistribution from './pages/music-dist/MusicDistribution'
import ArtisteWebsite from './pages/artiste-website/ArtisteWebsite'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='gallery' element={<Gallery />} />
          <Route path='service' element={<MainService />} />
          <Route path='contact' element={<Contact />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='terms-and-conditions' element={<TermsAndConditions />} />
          <Route path='music-promotion' element={<MusicPromotion />} />
          <Route path='music-distribution' element={<MusicDistribution />} />
          <Route path='rental' element={<Rental />} />
          <Route path='artiste-website' element={<ArtisteWebsite />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App