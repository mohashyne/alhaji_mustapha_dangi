import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRightIcon, HandRaisedIcon, HeartIcon } from '@heroicons/react/24/outline'

const CallToAction: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const actionItems = [
    {
      icon: HandRaisedIcon,
      title: 'Partner With Us',
      description: 'Join our mission to develop Niger State and preserve Nupe heritage',
      action: 'Explore Partnerships',
      href: '/contact',
      color: 'bg-royal-gold'
    },
    {
      icon: HeartIcon,
      title: 'Support Our Initiatives',
      description: 'Contribute to horse racing development and cultural preservation',
      action: 'Learn How to Help',
      href: '/contact',
      color: 'bg-royal-navy'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-royal-navy via-royal-navy-dark to-royal-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-royal-gold rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal-gold rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Join the Journey of
            <span className="text-royal-gold block">Progress & Heritage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Be part of a transformative movement that bridges tradition with modernity, 
            creating lasting impact for generations to come. Together, we can build a 
            brighter future for Niger State and preserve our rich cultural heritage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {actionItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-6">
                <div className={`${item.color} p-4 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-royal-gold">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <Link
                    to={item.href}
                    className="inline-flex items-center text-royal-gold hover:text-white font-semibold group-hover:translate-x-2 transition-all duration-300"
                  >
                    {item.action}
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-royal-gold/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-royal-gold">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Whether you're interested in horse racing, development projects, cultural preservation, 
              or simply want to learn more about our initiatives, we welcome your involvement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary text-lg px-8 py-4"
              >
                Get in Touch
              </Link>
              <Link
                to="/about"
                className="btn-outline border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-navy text-lg px-8 py-4"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: '20+', label: 'Years of Service' },
            { number: '₦100B+', label: 'Projects Value' },
            { number: '1M+', label: 'Lives Impacted' },
            { number: '50+', label: 'Racing Events' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-royal-gold mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
