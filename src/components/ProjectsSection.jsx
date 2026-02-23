import React from 'react'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

const ProjectsSection = () => {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language.split('-')[0] // handle 'pt-BR' etc

    return (
        <div className="projects" data-aos="fade-up">
            <h1>{t('projects.title')}</h1>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" data-aos="fade-up" data-aos-delay={project.delay}>
                        <div className="project-header"></div>
                        <div className="project-body">
                            <h3>{project.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                {project.description[currentLang] || project.description['pt']}
                            </p>
                            <div className="project-tags">
                                {project.tags.map((tag, i) => (
                                    <span key={i}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer">
                                    {t('projects.view_repo')} <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection
