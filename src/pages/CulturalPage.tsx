import React from 'react'
import { motion } from 'framer-motion'

const CulturalPage: React.FC = () => {
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
              Cultural Heritage & Leadership
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preserving Nupe heritage while fostering unity and cultural pride across communities
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-royal-navy mb-6">Preservation of Nupe Heritage</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As Sarkin Dawakin Nupe, Alhaji Mustapha plays a crucial role in preserving and promoting 
              the rich cultural heritage of the Nupe people, ensuring traditions are passed down to future generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-royal-navy mb-4">Cultural Initiatives</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <span className="text-gray-600">Traditional festivals and ceremonies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <span className="text-gray-600">Youth cultural education programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <span className="text-gray-600">Heritage documentation projects</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-royal-navy mb-4">Community Unity</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <span className="text-gray-600">Inter-community dialogue initiatives</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <span className="text-gray-600">Collaboration with Etsu Nupe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <span className="text-gray-600">Peace and reconciliation efforts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CulturalPage
