import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MapPinIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ChartBarIcon,
  UsersIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { featuredProjects, projectImages } from '../data/projectImages'

const DevelopmentPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projectStats = [
    {
      icon: CurrencyDollarIcon,
      label: 'Total Investment',
      value: '₦150+ Billion',
      description: 'Across all development projects'
    },
    {
      icon: TruckIcon,
      label: 'Roads Constructed',
      value: '200+ km',
      description: 'Modern road infrastructure'
    },
    {
      icon: UsersIcon,
      label: 'Jobs Created',
      value: '10,000+',
      description: 'Direct and indirect employment'
    },
    {
      icon: HomeIcon,
      label: 'Communities Impacted',
      value: '50+',
      description: 'Across Niger State'
    }
  ]

  const projectTimeline = [
    {
      year: '2020',
      title: 'NNDP Establishment',
      description: 'Formation of New Niger Development Project under Alhaji Mustapha\'s leadership',
      status: 'completed'
    },
    {
      year: '2021',
      title: 'Minna-Bida Road Commencement',
      description: 'Groundbreaking ceremony for the 82km road project',
      status: 'completed'
    },
    {
      year: '2022',
      title: 'Infrastructure Expansion',
      description: 'Launch of multiple bridge and road construction projects',
      status: 'completed'
    },
    {
      year: '2023',
      title: 'Tourism Development',
      description: 'Initiation of heritage sites and tourism infrastructure development',
      status: 'in-progress'
    },
    {
      year: '2024',
      title: 'Economic Zones',
      description: 'Development of special economic zones and industrial parks',
      status: 'planned'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('${projectImages.roadProjects[0]}')`
          }}
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold mb-6 text-shadow"
          >
            New Niger Development Project
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl max-w-3xl mx-auto"
          >
            Transforming Niger State through strategic infrastructure and economic development initiatives
          </motion.p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-padding bg-royal-navy text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Development Impact by the Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Measurable progress in infrastructure development and economic growth across Niger State
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-royal-gold p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-royal-navy" />
                </div>
                <h3 className="text-3xl font-bold text-royal-gold mb-2">{stat.value}</h3>
                <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section ref={ref} className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-royal-navy mb-6">
              Major Development Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flagship infrastructure projects that are reshaping Niger State's economic landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                  selectedProject === index ? 'ring-4 ring-royal-gold' : 'hover:shadow-2xl'
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative h-72">
                  <img
                    src={project.mainImage}
                    alt={project.title}
                    className={`w-full h-full object-cover ${
                      index === 0 ? 'object-center' : 'object-top'
                    }`}
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      project.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : project.status === 'Ongoing'
                        ? 'bg-green-100 text-green-800'
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

          {/* Project Gallery */}
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12 bg-white rounded-2xl shadow-xl p-8"
            >
              <h3 className="text-2xl font-bold text-royal-navy mb-6">
                {featuredProjects[selectedProject].title} - Project Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {featuredProjects[selectedProject].images.map((image, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={image}
                      alt={`${featuredProjects[selectedProject].title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-royal-navy mb-6">
              Development Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in Niger State's transformation journey
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-royal-gold"></div>
            <div className="space-y-12">
              {projectTimeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.status === 'completed'
                            ? 'bg-green-100 text-green-800'
                            : item.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.status.replace('-', ' ').toUpperCase()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-royal-navy mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-royal-gold rounded-full border-4 border-white shadow-lg">
                    <span className="text-royal-navy font-bold text-sm">{item.year}</span>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DevelopmentPage
