import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/sections/navigation/Navigation'
import Footer from '@/components/sections/Footer'
import useData from '@/hooks/useData'
import SmoothScroll from '@/components/effects/SmoothScroll'

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Smartmentor',
  description: 'Descrição do site para fins de SEO aqui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={font.className}>
        <Navigation/>
        {children}
        <Footer/>
        <SmoothScroll/>
      </body>
    </html>
  )
}
