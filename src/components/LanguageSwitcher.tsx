'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const locales = ['es', 'en', 'fr', 'de', 'zh-TW', 'ja']
  const currentLocale = pathname.split('/')[1] || 'es'

  function changeLocale(newLocale: string) {
    const segments = pathname.split('/')
    segments[1] = newLocale
    const newPathname = segments.join('/')
    const search = searchParams.toString()
    router.push(newPathname + (search ? `?${search}` : ''))
  }

  return (
    <div className="flex space-x-2 p-2">
      {locales.map(locale => (
        <button
          key={locale}
          onClick={() => changeLocale(locale)}
          disabled={locale === currentLocale}
          className={`px-3 py-1 rounded ${
            locale === currentLocale ? 'bg-gray-400 cursor-default' : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
