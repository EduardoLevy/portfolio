import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProfileCard from './components/ProfileCard'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import LanguageSwitcher from './components/LanguageSwitcher'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        })
    }, [])

    return (
        <div className="container">
            <LanguageSwitcher />
            <ProfileCard />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
            </div>
        </div>
    )
}

export default App
