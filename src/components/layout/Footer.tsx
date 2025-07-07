import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Horse Racing Federation', href: '/horse-racing' },
    { name: 'Development Projects', href: '/development' },
    { name: 'Cultural Heritage', href: '/cultural' },
  ]

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      text: 'info@alhajimustapha.com',
      href: 'mailto:info@alhajimustapha.com'
    },
    {
      icon: PhoneIcon,
      text: '+234 (0) 803 XXX XXXX',
      href: 'tel:+234803XXXXXXX'
    },
    {
      icon: MapPinIcon,
      text: 'Bida, Niger State, Nigeria',
      href: '#'
    }
  ]

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: '𝕏' },
    { name: 'Facebook', href: '#', icon: '📘' },
    { name: 'Instagram', href: '#', icon: '📷' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
  ]

  return (
    <footer className="bg-royal-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-royal-gold rounded-full flex items-center justify-center">
                <span className="text-royal-navy font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Alhaji Mustapha Abubakar Bida</h3>
                <p className="text-royal-gold">Sarkin Dawakin Nupe</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Championing Nupe Heritage, Horse Racing Excellence, and Niger State Development. 
              Leading with vision, tradition, and commitment to progress.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-royal-gold/20 rounded-full flex items-center justify-center hover:bg-royal-gold hover:text-royal-navy transition-all duration-300"
                  aria-label={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-royal-gold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-royal-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-royal-gold transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-royal-gold transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-royal-gold">Contact Info</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <contact.icon className="h-5 w-5 text-royal-gold mt-0.5 flex-shrink-0" />
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-royal-gold transition-colors duration-200 text-sm"
                  >
                    {contact.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-royal-gold/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {currentYear} Alhaji Mustapha Abubakar Bida. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-300">
              <span>Made with</span>
              <HeartIcon className="h-4 w-4 text-red-500" />
              <span>by</span>
              <a 
                href="#" 
                className="text-royal-gold hover:text-royal-gold-dark transition-colors duration-200"
              >
                Crystal Blue Tech Solutions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
