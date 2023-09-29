import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Onesim - купить лучшие eSIM для путешествий',
  description: 'Onesim с наилучшим покрытием. Одноразовый предоплаченный пакет. Никаких автопродлений, никаких контрактов. Лучший выбор локальной сети.',
  icons: 'images/onesim.png',
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='font/TildaSans.css' />
      </head>
      <body>{children}</body>
    </html>
  )
}
