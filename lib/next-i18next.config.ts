import path from 'path'

const i18nConfig = {
  i18n: {
    locales: ['es', 'en', 'fr', 'de', 'zh-TW', 'ja'],
    defaultLocale: 'es',
  },
  localePath: typeof window === 'undefined'
    ? path.resolve('./public/locales')
    : '/locales',
}

export default i18nConfig
