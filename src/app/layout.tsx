//Metadata
import type { Metadata } from 'next'

//Components
import Navbar from '@/components/ui/Navbar'
import { Footer } from '@/components/ui/Footer'

//Fonts
import { comic_neue } from '@/components/ui/fonts'

//Styles
import './globals.css'

export const metadata: Metadata = {
  title: 'Manga Deliver',
  description: 'A manga reading web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${comic_neue.className}`}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
