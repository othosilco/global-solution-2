import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600']
 })

export const metadata: Metadata = {
  title: 'VidaConnect',
  description: 'Sistema de internet para melhoria da gestão eficiente de registros médicos.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
