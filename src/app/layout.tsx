import type {ReactNode} from 'react'
import type {Metadata} from 'next'
import {Geist, Geist_Mono} from 'next/font/google'
import './globals.css'
import Header from '@/components/elements/header'
import Footer from '@/components/elements/footer'
import Head from 'next/head'
import {MessageCircle} from 'lucide-react'
import siteconfig from '@/siteconfig'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: '',
    description: '',
    icons: {
        icon: '/favicon.svg'
    }
}

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
    return <html lang='pt-br'>
        <Head>
            <title>JeffersTech – Criação de Sites, Sistemas Personalizados e Automação</title>
            <meta name="description" content="Crie seu site profissional, landing page ou sistema sob medida com a JeffersTech. Soluções digitais acessíveis, rápidas e eficientes para o seu negócio crescer."/>

            <meta name="keywords" content="criação de site profissional, site para empresa, sistema sob medida, automação para empresas, site personalizado, soluções digitais, desenvolvimento de site, site barato, sistema online, página de vendas, site para negócios, sistema de pedidos, site para serviços, atendimento automatizado, site rápido e leve"/>

            <meta name="robots" content="index, follow"/>

            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://jefferstech.com.br/"/>
            <meta property="og:title" content="JeffersTech – Sites e Sistemas para Seu Negócio"/>
            <meta property="og:description" content="Soluções acessíveis em sites, sistemas personalizados e automações que ajudam você a economizar tempo e vender mais."/>
            <meta property="og:image" content="https://jefferstech.com.br/og-image.png"/>
            <meta property="og:site_name" content="JeffersTech"/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="JeffersTech – Sites e Sistemas para Seu Negócio"/>
            <meta name="twitter:description" content="Criação de sites e sistemas sob medida com foco em resultado. Simples, eficiente e com baixo custo." />
            <meta name="twitter:image" content="https://jefferstech.com.br/twitter-card.png"/>

            <link rel="icon" href="/favicon.svg"/>
            <link rel="canonical" href="https://jefferstech.com.br/"/>

            <link rel="me" href={siteconfig.social.instagram}/>
            <link rel="me" href={siteconfig.social.linkedin}/>
            <link rel="me" href={siteconfig.social.facebook}/>
            <link rel="me" href={siteconfig.social.github}/>
            <link rel="me" href={siteconfig.social.twitter}/>
        </Head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Header/>{children}<Footer/>
            <a
                href={`https://wa.me/${siteconfig.contact.phone}?text=Olá,%20gostaria%20de%20mais%20informações`}
                className='gradient-primary fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full gradient-bg flex items-center justify-center shadow-lg hover:scale-110 transition-transform'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Contato via WhatsApp'
            >
                <MessageCircle size={24} className='text-white'/>
            </a>
        </body>
    </html>
}
