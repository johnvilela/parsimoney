import './globals.css'

export const metadata = {
  title: 'Parsimoney',
  description: 'Another personal finance app',
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
