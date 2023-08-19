import { createI18n } from 'vue-i18n'
import en from '@/locales/en'
import fr from '@/locales/fr'

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  },
  numberFormats: {
    en: {
      currency: {
        style: 'currency',
        currency: 'USD'
      }
    },
    fr: {
      currency: {
        style: 'currency',
        currency: 'EUR'
      }
    }
  }
})
