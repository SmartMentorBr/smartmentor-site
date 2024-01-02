import { Montserrat } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/sections/navigation/Navigation'
import Footer from '@/components/sections/Footer'
import useData from '@/hooks/useData'
import SmoothScroll from '@/components/effects/SmoothScroll'
import Head from 'next/head'

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
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `<!-- Google Tag Manager -->
            <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5HR6W9Q');</script>
            <!-- End Google Tag Manager -->`,
          }}
        />
      </Head>
      <body className={font.className}>
        <script dangerouslySetInnerHTML={{
          __html: `<!-- Google Tag Manager (noscript) -->
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5HR6W9Q"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <!-- End Google Tag Manager (noscript) -->`
        }}/>
        <Navigation/>
        {children}
        <Footer/>
        <SmoothScroll/>
      </body>
    </html>
  )
}
