import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { TrophyIcon, BuildingOfficeIcon, HeartIcon, AcademicCapIcon } from '@heroicons/react/24/outline'

const AchievementsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const achievements = [
    {
      icon: TrophyIcon,
      title: 'Horse Racing Excellence',
      description: 'Led S.D. Stable to victory in prestigious races including Al-Makthoum and Dan Donai championships',
      highlights: ['International Derby Participation', 'Anti-Doping Initiatives', 'Grade-One Derby Planning']
    },
    {
      icon: BuildingOfficeIcon,
      title: 'Infrastructure Development',
      description: 'Spearheading the 82km Minna-Katayeregi-Bida Road project and other critical infrastructure',
      highlights: ['₦50B+ Road Projects', 'Economic Growth Catalyst', 'Job Creation Initiatives']
    },
    {
      icon: HeartIcon,
      title: 'Cultural Preservation',
      description: 'Championing Nupe heritage and traditions while fostering unity and cultural pride',
      highlights: ['Traditional Festivals', 'Youth Engagement', 'Heritage Documentation']
    },
    {
      icon: AcademicCapIcon,
      title: 'Leadership & Governance',
      description: 'Serving with distinction in traditional and modern leadership roles across Niger State',
      highlights: ['Emirate Council Member', 'NNDP Chairman', 'Community Development']
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-royal-navy text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Key Achievements & 
            <span className="text-royal-gold block">Impact Areas</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of the transformative work and lasting impact 
            across multiple sectors and communities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-royal-gold p-3 rounded-xl">
                  <achievement.icon className="h-8 w-8 text-royal-navy" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-royal-gold">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {achievement.description}
                  </p>
                  <ul className="space-y-2">
                    {achievement.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-royal-gold rounded-full"></div>
                        <span className="text-sm text-gray-200">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-royal-gold/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-royal-gold">
              Building a Legacy of Excellence
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Through dedication, vision, and unwavering commitment to progress, 
              these achievements represent just the beginning of a transformative journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/development"
                className="btn-primary"
              >
                View Development Projects
              </a>
              <a
                href="/horse-racing"
                className="btn-outline border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-navy"
              >
                Explore Horse Racing
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AchievementsSection
