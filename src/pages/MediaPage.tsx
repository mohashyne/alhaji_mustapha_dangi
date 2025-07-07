import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  CalendarIcon,
  ArrowRightIcon,
  NewspaperIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { useNews } from '../hooks/useNews'

const MediaPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const { news, loading, error, refreshNews, searchNews } = useNews()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // Get unique categories from news
  const categories = ['All', ...Array.from(new Set(news.map(article => article.category)))]

  // Filter news by category
  const filteredNews = selectedCategory === 'All'
    ? news
    : news.filter(article => article.category === selectedCategory)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      await searchNews(searchQuery)
    }
  }

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
              Media & News
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest news, press coverage, and media appearances from major Nigerian newspapers
            </p>
          </div>

          {/* Search and Refresh Controls */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-royal-navy flex items-center">
                <NewspaperIcon className="h-8 w-8 mr-3 text-royal-gold" />
                Recent Media Coverage
              </h2>
              <button
                onClick={refreshNews}
                disabled={loading}
                className="flex items-center space-x-2 btn-secondary disabled:opacity-50"
              >
                <ArrowPathIcon className={`h-5 w-5 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh News</span>
              </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news about Alhaji Mustapha and Niger State..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-royal-gold focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-50"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Category Filter */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-royal-navy mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-royal-gold text-royal-navy'
                        : 'bg-gray-100 text-gray-600 hover:bg-royal-gold/20 hover:text-royal-navy'
                    }`}
                  >
                    {category} {category !== 'All' && `(${news.filter(a => a.category === category).length})`}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800">{error}</p>
              </div>
            )}

            {/* News Articles */}
            {loading ? (
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-6 animate-pulse">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gray-200 h-6 w-24 rounded-full"></div>
                      <div className="bg-gray-200 h-4 w-32 rounded"></div>
                    </div>
                    <div className="bg-gray-200 h-6 w-3/4 rounded mb-3"></div>
                    <div className="bg-gray-200 h-4 w-full rounded mb-2"></div>
                    <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
                  </div>
                ))}
              </div>
            ) : filteredNews.length > 0 ? (
              <div className="space-y-6">
                {filteredNews.map((article, index) => (
                  <motion.article
                    key={article.id}
                    ref={index === 0 ? ref : undefined}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-royal-gold/20 text-royal-gold px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        {new Date(article.publishDate).toLocaleDateString()}
                      </div>
                      <span className="text-sm text-gray-500">
                        {article.source}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-royal-navy mb-3 hover:text-royal-gold transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={article.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-royal-gold hover:text-royal-gold-dark font-semibold text-sm flex items-center"
                      >
                        Read Full Article
                        <ArrowRightIcon className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <NewspaperIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">No News Found</h3>
                <p className="text-gray-500">
                  {searchQuery
                    ? `No articles found for "${searchQuery}". Try a different search term.`
                    : selectedCategory !== 'All'
                    ? `No articles found in "${selectedCategory}" category. Try selecting a different category.`
                    : 'No recent news articles available. Please try refreshing or check back later.'
                  }
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default MediaPage
