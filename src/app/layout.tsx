import './layout.scss'
import { Navbar, NavbarMovile } from '@/components';
import localFont from '@next/font/local';

const myfont = localFont({
  src: './secondary.woff2',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`fondo ${myfont.className}`}>
        <Navbar />
        {children}
        <NavbarMovile />
      </body>
    </html>
  )
}
