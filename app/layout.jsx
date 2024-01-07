import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/sections/navigation/Navigation'
import Footer from '@/components/sections/Footer'
import SmoothScroll from '@/components/effects/SmoothScroll'
import { GoogleTagManager } from '@next/third-parties/google'

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  charset: 'utf-8',
  title: 'Smartmentor',
  description: 'Descrição do site para fins de SEO aqui',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <Navigation/>
        {children}
        <Footer/>
        <SmoothScroll/>
        <GoogleTagManager gtmId="GTM-5HR6W9Q" />
      </body>
    </html>
  )
}
