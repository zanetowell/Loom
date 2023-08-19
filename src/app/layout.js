import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Loom',
  description: 'Creative Hub',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className='container'>
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
