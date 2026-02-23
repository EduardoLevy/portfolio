import React from 'react'
import { useTranslation } from 'react-i18next'

const skills = [
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'JavaScript', icon: 'fab fa-js-square' },
    { name: 'Vue.js', icon: 'fab fa-vuejs' },
    { name: 'SQL', icon: 'fas fa-database' },
    { name: 'HTML', icon: 'fab fa-html5' },
    { name: 'CSS', icon: 'fab fa-css3-alt' },
    { name: 'Git', icon: 'fab fa-git-alt' },
    { name: 'Docker', icon: 'fab fa-docker' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'AWS', icon: 'fab fa-aws' },
    { name: 'Vite', icon: 'fas fa-bolt' }
]

const SkillsSection = () => {
    const { t } = useTranslation()

    return (
        <div className="skills" data-aos="fade-up">
            <h1>{t('skills.title')}</h1>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <i className={skill.icon}></i>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
