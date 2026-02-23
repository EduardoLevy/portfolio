import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('pt') ? 'en' : 'pt'
        i18n.changeLanguage(newLang)
    }

    const currentLang = i18n.language.startsWith('pt') ? 'PT' : 'EN'

    return (
        <div className="language-switcher">
            <button onClick={toggleLanguage} className="lang-btn">
                <span>{currentLang}</span>
                <i className="fas fa-globe"></i>
            </button>
        </div>
    )
}

export default LanguageSwitcher
