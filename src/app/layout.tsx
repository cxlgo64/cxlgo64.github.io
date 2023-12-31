
import './globals.css'
import type { Metadata } from 'next'
import Footer from './footer';
import Navbar from "./Navbar";
import { Inter } from 'next/font/google';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";


config.autoAddCss = false;
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Xueliang Chen',
  description: 'A personal portfolio for Xueliang Chen project',
}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">     
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />       
      </body>      
    </html>
  )
}
