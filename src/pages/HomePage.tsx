import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutPreview from '../components/sections/AboutPreview'
import AchievementsSection from '../components/sections/AchievementsSection'
import ProjectsPreview from '../components/sections/ProjectsPreview'
import NewsSection from '../components/sections/NewsSection'
import CallToAction from '../components/sections/CallToAction'

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutPreview />
      <AchievementsSection />
      <ProjectsPreview />
      <NewsSection />
      <CallToAction />
    </div>
  )
}

export default HomePage
