import React from 'react'
import { motion } from 'framer-motion'

const AboutPage: React.FC = () => {
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
              About Sarkin Dawakin Nupe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn about the life, achievements, and vision of Alhaji Mustapha Abubakar Bida
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/projects/FB_IMG_1751817738415.jpg"
                  alt="Alhaji Mustapha Abubakar Bida - Sarkin Dawakin Nupe"
                  className="w-full h-[658px] object-cover object-center rounded-xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-royal-navy mb-6">
                  Early Life & Background
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Born into the prestigious Bida Emirate, Alhaji Mustapha Abubakar Bida has 
                  dedicated his life to serving his people and preserving the rich heritage 
                  of the Nupe Kingdom while championing modern development initiatives.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  His journey from traditional leadership to modern development advocacy 
                  represents a unique blend of cultural preservation and progressive vision 
                  that has made him a respected figure across Niger State and beyond.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-royal-navy">Traditional Title</h3>
                      <p className="text-gray-600">Sarkin Dawakin Nupe - Guardian of Nupe equestrian heritage</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-royal-navy">Leadership Role</h3>
                      <p className="text-gray-600">President of Horse Racing Federation of Nigeria</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-royal-navy">Development Position</h3>
                      <p className="text-gray-600">Chairman of New Niger Development Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AboutPage
