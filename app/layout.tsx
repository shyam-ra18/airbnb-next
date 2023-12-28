import './globals.css'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './(components)/navbar/Navbar'
import RegisterModal from './(components)/modals/RegisterModal'
import ClientOnly from './(components)/ClientOnly'
import ToasterProvider from './(provider)/ToasterProvider'
import LoginModal from './(components)/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './(components)/modals/RentModal'
import SearchModal from './(components)/modals/SearchModal'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Airbnb.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
        </ClientOnly>
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <div className='pb-20 pt-28'>
          {children}
        </div>
      </body>
    </html>
  )
}
