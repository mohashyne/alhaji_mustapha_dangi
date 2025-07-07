import React from 'react'
import { motion } from 'framer-motion'

const HorseRacingPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="section-padding"
      >
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-royal-navy mb-6">
              Horse Racing Federation of Nigeria
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading Nigerian horse racing to international standards under the presidency of Alhaji Mustapha
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-royal-navy mb-6">HRFN Leadership & Achievements</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Under the leadership of Alhaji Mustapha as President of the Horse Racing Federation of Nigeria, 
              the sport has reached new heights with international recognition and modern standards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-royal-navy mb-3">S.D. Stable Success</h3>
                <p className="text-gray-600">Al-Makthoum and Dan Donai championship victories</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-royal-navy mb-3">International Events</h3>
                <p className="text-gray-600">Yola Derby, Bida Tournament, Kaduna Races</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-royal-navy mb-3">Grade-One Derby</h3>
                <p className="text-gray-600">Planning Nigeria's premier racing event</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default HorseRacingPage
