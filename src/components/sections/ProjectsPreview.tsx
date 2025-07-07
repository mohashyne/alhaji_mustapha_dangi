import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRightIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { featuredProjects } from '../../data/projectImages'

const ProjectsPreview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })



  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-navy mb-6">
            Transformative 
            <span className="text-gradient block">Development Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading ambitious infrastructure and development initiatives that are 
            reshaping Niger State and creating lasting positive impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
            >
              <div className="relative h-56">
                <img
                  src={project.mainImage}
                  alt={project.title}
                  className={`w-full h-full object-cover ${
                    index === 0 ? 'object-center' : 'object-top'
                  }`}
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800'
                      : project.status === 'In Progress'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-sm font-semibold text-royal-navy">
                      {project.completion} Complete
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-royal-navy mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MapPinIcon className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CurrencyDollarIcon className="h-4 w-4" />
                    <span>{project.budget}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-royal-navy mb-2">Key Impact:</h4>
                  <ul className="space-y-1">
                    {Object.entries(project.impact).map(([key, value]) => (
                      <li key={key} className="flex items-center space-x-2 text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-royal-gold rounded-full"></div>
                        <span>{value}</span>
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-royal-navy to-royal-navy-dark rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Building Niger State's Future
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent a commitment to sustainable development, 
              economic growth, and improved quality of life for all citizens.
            </p>
            <Link
              to="/development"
              className="inline-flex items-center btn-primary group"
            >
              View All Development Projects
              <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsPreview
