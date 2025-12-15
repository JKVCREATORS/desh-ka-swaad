import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Desh Ka Swaad - Authentic Indian Recipes',
  description: '1000+ authentic Indian recipes including veg, chicken, and mutton dishes from across India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}