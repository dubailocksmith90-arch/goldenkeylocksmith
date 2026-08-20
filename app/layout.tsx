import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingPhone from '@/components/FloatingPhone'
import { SITE_URL, BUSINESS_NAME, PHONE } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1a2744',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${BUSINESS_NAME}`,
    default: `Locksmith Dallas TX | 24/7 Emergency | ${BUSINESS_NAME}`,
  },
  description: `${BUSINESS_NAME} — licensed, bonded & insured locksmith in Dallas TX. 24/7 emergency lockout service, rekeying, car keys & more. Fast 15–45 min response.`,
  keywords: 'locksmith dallas tx, emergency locksmith dallas, 24/7 locksmith dallas, casa linda locksmith, lockout service dallas',
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  publisher: BUSINESS_NAME,
  category: 'Locksmith Services',
  openGraph: {
    siteName: BUSINESS_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    site: '@goldenscasalindakeys',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  verification: {
    google: 'aBP3p3UlraHZZzx2-2-fKJQ77EMz3ns0lkYp96x6yMs',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#f5a623' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <meta name="msapplication-TileColor" content="#1a2744" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="theme-color" content="#1a2744" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingPhone />
      </body>
    </html>
  )
}
