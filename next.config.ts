// next.config.js
module.exports = {
  i18n: {
    locales: ['es', 'en', 'fr', 'de', 'zh-TW', 'ja'],
    defaultLocale: 'es',
  },
}
// next.config.ts
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <--- desactiva ESLint solo en build de producción
  },
  // ...tu config ya existente (como i18n)
}

export default nextConfig
