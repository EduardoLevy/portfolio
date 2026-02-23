import React from 'react'
import { useTranslation } from 'react-i18next'

const ProfileCard = () => {
    const { t } = useTranslation()

    return (
        <div className="profile-card" data-aos="fade-right">
            <div className="profile-pic">
                <img src="/Perfil.jpg" alt="Eduardo Levy" />
            </div>

            <div className="profile-details">
                <div className="intro">
                    <h2>Eduardo Levy</h2>
                    <h4>{t('profile.role')}</h4>
                    <div className="social">
                        <a href="https://github.com/EduardoLevy" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:eduardolevy070906@gmail.com">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        <a href="https://wa.me/5585992032340" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-levy-415b48275/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="contact-info">
                    <div className="row">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="content">
                            <span>{t('profile.phone')}</span>
                            <h5>+55 (85) 99203-2340</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="icon">
                            <i className="fa fa-envelope-open"></i>
                        </div>
                        <div className="content">
                            <span>{t('profile.email')}</span>
                            <h5>eduardolevy070906@gmail.com</h5>
                        </div>
                    </div>

                    <div className="row">
                        <div className="icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="content">
                            <span>{t('profile.location')}</span>
                            <h5>{t('profile.city')}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard
