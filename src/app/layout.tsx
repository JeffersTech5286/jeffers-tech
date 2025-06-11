import type {ReactNode} from 'react'
import type {Metadata} from "next"
import {Geist, Geist_Mono} from "next/font/google"
import "./globals.css"
import Header from '@/components/elements/header'
import Footer from '@/components/elements/footer'
import Head from 'next/head'
import {MessageCircle} from 'lucide-react'

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Desenvolvedor de Sites e Sistemas | JeffersTech",
    description: "A Jeffers Tech desenvolve sites modernos, sistemas personalizados e soluções em desenvolvimento web sob medida para empresas e startups. Transforme sua ideia em software com performance, segurança e tecnologia de ponta.",
}

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
    return <html lang="en">
        <Head>
            <link rel='canonical' href='https://jeffers-tech.vercel.app/'/>
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Header/>{children}<Footer/>
            <a
                href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações"
                className="gradient-primary fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contato via WhatsApp"
            >
                <MessageCircle size={24} className="text-white"/>
            </a>
        </body>
    </html>
}
