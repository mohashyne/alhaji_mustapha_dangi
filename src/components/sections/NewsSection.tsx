import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CalendarIcon, ArrowRightIcon, NewspaperIcon, ArrowPathIcon } from '@heroicons/react/24/outline'
import { useNews } from '../../hooks/useNews'

const NewsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { news: latestNews, loading, error, refreshNews } = useNews()

  const upcomingEvents = [
    {
      title: 'Bida International Horse Racing Derby',
      date: '2024-03-15',
      location: 'Bida Racing Complex'
    },
    {
      title: 'Niger State Development Summit',
      date: '2024-04-20',
      location: 'Minna Convention Center'
    },
    {
      title: 'Nupe Heritage Documentation Launch',
      date: '2024-05-10',
      location: 'Bida Emirate Palace'
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-royal-navy mb-6">
            Latest News & 
            <span className="text-gradient block">Upcoming Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, achievements, and upcoming events 
            in horse racing, development projects, and cultural initiatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Latest News */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-royal-navy flex items-center">
                  <NewspaperIcon className="h-6 w-6 mr-2 text-royal-gold" />
                  Recent News
                </h3>
                <button
                  onClick={refreshNews}
                  disabled={loading}
                  className="flex items-center space-x-2 text-royal-gold hover:text-royal-gold-dark transition-colors disabled:opacity-50"
                >
                  <ArrowPathIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                  <span className="text-sm font-medium">Refresh</span>
                </button>
              </div>
              {error && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <p className="text-yellow-800 text-sm">{error}</p>
                </div>
              )}
            </motion.div>

            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                    <div className="md:flex">
                      <div className="md:w-1/3 bg-gray-200 h-48 md:h-32"></div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="bg-gray-200 h-6 w-20 rounded-full"></div>
                          <div className="bg-gray-200 h-4 w-24 rounded"></div>
                        </div>
                        <div className="bg-gray-200 h-6 w-3/4 rounded mb-3"></div>
                        <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
                        <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6">
                {latestNews.slice(0, 3).map((news, index) => (
                  <motion.article
                    key={news.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
                  >
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={news.featuredImage}
                          alt={news.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-royal-gold/20 text-royal-gold px-3 py-1 rounded-full text-sm font-semibold">
                            {news.category}
                          </span>
                          <div className="flex items-center text-sm text-gray-500">
                            <CalendarIcon className="h-4 w-4 mr-1" />
                            {new Date(news.publishDate).toLocaleDateString()}
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-royal-navy mb-3 hover:text-royal-gold transition-colors">
                          {news.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {news.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Source: {news.source}
                          </span>
                          <a
                            href={news.externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-royal-gold hover:text-royal-gold-dark font-semibold text-sm flex items-center"
                          >
                            Read More
                            <ArrowRightIcon className="h-4 w-4 ml-1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>

          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold text-royal-navy mb-6 flex items-center">
              <CalendarIcon className="h-6 w-6 mr-2 text-royal-gold" />
              Upcoming Events
            </h3>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="border-l-4 border-royal-gold pl-4"
                  >
                    <h4 className="font-semibold text-royal-navy mb-2">
                      {event.title}
                    </h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="flex items-center">
                        <span className="w-4 h-4 mr-2">📍</span>
                        {event.location}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t">
                <Link
                  to="/media"
                  className="w-full btn-secondary text-center block"
                >
                  View All News & Events
                </Link>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-royal-navy text-white rounded-xl p-6 mt-6"
            >
              <h4 className="text-xl font-bold mb-3">Stay Updated</h4>
              <p className="text-gray-300 mb-4 text-sm">
                Subscribe to receive the latest news and updates directly in your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-royal-gold"
                />
                <button
                  type="submit"
                  className="w-full bg-royal-gold text-royal-navy font-semibold py-2 rounded-lg hover:bg-royal-gold-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
