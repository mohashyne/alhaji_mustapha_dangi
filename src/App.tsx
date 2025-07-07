
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'

// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Pages
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import HorseRacingPage from './pages/HorseRacingPage'
import DevelopmentPage from './pages/DevelopmentPage'
import CulturalPage from './pages/CulturalPage'
import MediaPage from './pages/MediaPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/horse-racing" element={<HorseRacingPage />} />
          <Route path="/development" element={<DevelopmentPage />} />
          <Route path="/cultural" element={<CulturalPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </motion.main>
      
      <Footer />
    </div>
  )
}

export default App
