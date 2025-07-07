import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const AboutPreview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      number: '20+',
      label: 'Years of Leadership',
      description: 'Dedicated service to Nupe Kingdom'
    },
    {
      number: '50+',
      label: 'Horse Racing Events',
      description: 'Successfully organized nationwide'
    },
    {
      number: '₦100B+',
      label: 'Development Projects',
      description: 'Infrastructure investments in Niger State'
    },
    {
      number: '1M+',
      label: 'Lives Impacted',
      description: 'Through various initiatives'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-royal-navy mb-6">
              A Legacy of 
              <span className="text-gradient block">Leadership & Service</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Alhaji Mustapha Abubakar Bida stands as a beacon of traditional leadership, 
              modern development, and cultural preservation. As the Sarkin Dawakin Nupe, 
              he bridges the gap between heritage and progress, leading with wisdom and vision.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Traditional Title:</strong> Sarkin Dawakin Nupe - Guardian of Nupe equestrian heritage
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>HRFN Leadership:</strong> President of Horse Racing Federation of Nigeria
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-royal-gold rounded-full mt-2"></div>
                <p className="text-gray-700">
                  <strong>Development Role:</strong> Chairman of New Niger Development Project
                </p>
              </div>
            </div>
            
            <Link
              to="/about"
              className="inline-flex items-center btn-primary group"
            >
              Learn More About His Journey
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Portrait Image */}
            <div className="relative mb-8">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/projects/FB_IMG_1751817738415.jpg"
                  alt="Alhaji Mustapha Abubakar Bida - Sarkin Dawakin Nupe"
                  className="w-full h-[500px] object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-royal-gold p-4 rounded-xl shadow-lg">
                <p className="text-royal-navy font-bold text-sm">Sarkin Dawakin Nupe</p>
              </div>
            </div>
            
            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white p-4 rounded-xl shadow-lg text-center"
                >
                  <h3 className="text-2xl font-bold text-royal-gold mb-1">
                    {achievement.number}
                  </h3>
                  <p className="text-sm font-semibold text-royal-navy mb-1">
                    {achievement.label}
                  </p>
                  <p className="text-xs text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
