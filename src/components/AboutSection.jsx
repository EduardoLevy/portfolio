import React from 'react'
import { useTranslation } from 'react-i18next'

const AboutSection = () => {
    const { t } = useTranslation()

    return (
        <div className="about" data-aos="fade-up">
            <h1>{t('about.title')}</h1>

            <p>{t('about.bio1')}</p>
            <p>{t('about.bio2')}</p>

            <h1>{t('about.what_i_do')}</h1>
            <div className="work">
                <div className="workbox">
                    <div className="desc">
                        <i className="fas fa-code icon" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}></i>
                        <h3>{t('about.backend')}</h3>
                        <p>{t('about.backend_desc')}</p>
                    </div>
                </div>

                <div className="workbox">
                    <div className="desc">
                        <i className="fas fa-desktop icon" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}></i>
                        <h3>{t('about.frontend')}</h3>
                        <p>{t('about.frontend_desc')}</p>
                    </div>
                </div>

                <div className="workbox">
                    <div className="desc">
                        <i className="fas fa-link icon" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}></i>
                        <h3>{t('about.apis')}</h3>
                        <p>{t('about.apis_desc')}</p>
                    </div>
                </div>

                <div className="workbox">
                    <div className="desc">
                        <i className="fas fa-database icon" style={{ fontSize: '1.5rem', color: 'var(--accent)' }}></i>
                        <h3>{t('about.data')}</h3>
                        <p>{t('about.data_desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
