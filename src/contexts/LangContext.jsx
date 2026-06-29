import { createContext, useContext, useState, useEffect } from 'react'
import es from '../i18n/es'
import en from '../i18n/en'

const LangContext = createContext(null)

const translations = { es, en }

export function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('sfa-lang')
    if (saved) return saved
    return navigator.language?.startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('sfa-lang', lang)
    document.documentElement.setAttribute('lang', lang)
  }, [lang])

  const toggle = () => setLang(l => l === 'es' ? 'en' : 'es')
  const t = translations[lang]

  return (
    <LangContext.Provider value={{ lang, toggle, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
