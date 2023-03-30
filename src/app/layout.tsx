import { Inter } from 'next/font/google';
import './globals.css';

export const metadata = {
  title: 'Parsimoney',
  description: 'Another personal finance app',
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
