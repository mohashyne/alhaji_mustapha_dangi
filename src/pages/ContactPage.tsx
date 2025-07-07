import React from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const ContactPage: React.FC = () => {
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
              Contact & Support
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch for partnerships, collaborations, or general inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-royal-navy mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent"
                    placeholder="Enter subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-royal-navy mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <EnvelopeIcon className="h-6 w-6 text-royal-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-navy">Email</h4>
                      <p className="text-gray-600">info@alhajimustapha.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <PhoneIcon className="h-6 w-6 text-royal-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-navy">Phone</h4>
                      <p className="text-gray-600">+234 (0) 803 XXX XXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPinIcon className="h-6 w-6 text-royal-gold mt-1" />
                    <div>
                      <h4 className="font-semibold text-royal-navy">Address</h4>
                      <p className="text-gray-600">Bida, Niger State, Nigeria</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-royal-navy text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Partnership Opportunities</h3>
                <p className="text-gray-300 mb-6">
                  Interested in partnering with us on development projects, horse racing events, 
                  or cultural preservation initiatives? We welcome collaborations that align with our mission.
                </p>
                <button className="btn-primary">
                  Explore Partnerships
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ContactPage
