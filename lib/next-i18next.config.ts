module.exports = {
  i18n: {
    locales: ['es', 'en', 'fr', 'de', 'zh-TW', 'ja'],
    defaultLocale: 'es',
  },
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
}
