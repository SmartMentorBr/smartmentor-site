import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/sections/navigation/Navigation'
import Footer from '@/components/sections/Footer'
import useData from '@/hooks/useData'
import SmoothScroll from '@/components/effects/SmoothScroll'

const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  charset: 'utf-8',
  title: 'Smartmentor',
  description: 'Descrição do site para fins de SEO aqui',
  viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1',  
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="images/favicon.png"/>
      </head>
      <body className={font.className}>
        <Navigation/>
        {children}
        <Footer/>
        <SmoothScroll/>
      </body>
    </html>
  )
}
