import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from './_sections/Navigation'
import Footer from './_sections/Footer'

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
      </body>
    </html>
  )
}
