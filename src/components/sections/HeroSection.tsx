import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const HeroSection: React.FC = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/projects/FB_IMG_1751817721949.jpg')`
        }}
      />
      
      {/* Overlay */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 text-shadow">
            <span className="block">Alhaji Mustapha</span>
            <span className="block text-royal-gold">Abubakar Bida</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl lg:text-3xl mb-4 text-royal-gold font-semibold"
          >
            Sarkin Dawakin Nupe
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Championing Nupe Heritage, Horse Racing Excellence & Niger State Development
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/about"
              className="btn-primary text-lg px-8 py-4 min-w-[200px]"
            >
              Learn About Him
            </Link>
            <Link
              to="/horse-racing"
              className="btn-outline text-lg px-8 py-4 min-w-[200px] text-white border-white hover:bg-white hover:text-royal-navy"
            >
              Horse Racing Federation
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { title: 'Traditional Leadership', href: '/about', icon: '👑' },
            { title: 'Horse Racing', href: '/horse-racing', icon: '🏇' },
            { title: 'Development Projects', href: '/development', icon: '🏗️' },
            { title: 'Cultural Heritage', href: '/cultural', icon: '🏛️' },
          ].map((item, index) => (
            <Link
              key={item.title}
              to={item.href}
              className="glass-effect p-4 rounded-lg hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <h3 className="text-sm font-semibold group-hover:text-royal-gold transition-colors">
                {item.title}
              </h3>
            </Link>
          ))}
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-royal-gold transition-colors duration-300"
        aria-label="Scroll to next section"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDownIcon className="h-8 w-8" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default HeroSection
