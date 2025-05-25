'use client'

import type {ReactNode, RefObject} from 'react'
import {useRef, useState, useEffect} from 'react'
import {useScroll} from '@/core/hooks.ts'
import Header from '@/components/widgets/Header.tsx'
import {GradientButton} from '@/components/widgets/GradientButton.tsx'
import {TextGradient} from '@/components/utils.tsx'
import {useMediaQuery} from 'react-responsive'
import Image from '@/components/widgets/Image'
import {List, ListItemIcon} from '@/components/widgets/List.tsx'
import {TabSystem} from '@/components/widgets/TabArticle.tsx'


export default function App(): ReactNode {
    const heroRef: RefObject<HTMLElement | null> = useRef<HTMLElement>(null)
    const scrolled: boolean = useScroll(heroRef, .99)
    const [background, setBackground] = useState<ReactNode>(null)

    const md = useMediaQuery({query: '(min-width: 48rem)'})

    useEffect(() => {
        setBackground(true)
    }, []);

    return <>
        {/*{background && (<FloatingIcons/>)}*/}

        <Header scrolled={scrolled}/>

        <main className='w-full'>
            <section ref={heroRef} className='h-screen relative'>
                {background && (
                    <Image
                        src={md ? `/images/bg-hero-section.webp` : '/images/bg-hero-section-mobile.webp'}
                        alt=''
                        className='w-full h-full'
                    />
                )}
                <div className='flex absolute inset-0 w-full h-full backdrop-blur-[0.09rem] HeroBgGradient'>

                    <div className=' text-white DefaultPaddingX WidthRestrict w-370'>
                        <div className='flex w-full items-center justify-between h-screen'>
                            <div className='flex-1'/>
                            <div className='flex w-full md:items-end flex-col gap-10 md:text-right h-min'>
                                <h1 className='text-5xl font-semibold md:text-7xl md:max-w-2xl'>
                                    Soluções digitais acessíveis <TextGradient>para seu negócio</TextGradient>
                                </h1>
                                <p className='max-w-2xl text-xl md:text-3xl font-extralight'>
                                    Desenvolvemos soluções e softwares sob medida para acelerar o crescimento da sua empresa.
                                </p>
                                <GradientButton text='Vamos conversar sobre sua ideia?'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='DefaultPaddingX WidthRestrict flex flex-col gap-5 lg:flex-row'>
                <Image
                    src='/images/thumbnails/software-plan.jpg'
                    alt='Equipe de desenvolvimento de software colaborando no planejamento de um sistema personalizado'
                    className='max-w-screen w-full lg:flex-none lg:w-[45%] aspect-[16/9] rounded-2xl'
                />
                <article className='flex justify-center flex-col flex-1 gap-5 '>
                    <h2 className='BaseTitle'>Quem Somos</h2>
                    <p className='BaseParagraph'>
                        Somos uma startup de tecnologia comprometida em entregar sistemas
                        personalizados, eficientes e prontos para crescer com o seu negócio.
                        Atuamos de ponta a ponta: da ideia inicial ao produto final, com agilidade,
                        clareza e foco nos seus resultados.
                    </p>
                    <List>
                        <ListItemIcon text='Foco claro em resultados reais'/>
                        <ListItemIcon text='Software sob medida, do início à entrega'/>
                        <ListItemIcon text='Sites e lojas otimizados para SEO e performance'/>
                        <ListItemIcon text='Bots e automações que economizam seu tempo e dinheiro'/>
                        <ListItemIcon text='Apps Android nativos publicados na PlayStore'/>
                        <ListItemIcon text='Atendimento próximo e centrado na solução'/>
                    </List>
                    <GradientButton className='' text='Saiba mais sobre nós'/>
                </article>
            </section>
            <section className='DefaultPaddingX WidthRestrict my-20'>
                <h2 className='BaseTitle'>Explore as <TextGradient>Soluções</TextGradient> da JeffersTech</h2>
                <p className='BaseParagraph my-5'>
                    Desenvolvemos sistemas robustos e inteligentes sob medida — desde bots até aplicações completas — com performance, automação e escalabilidade como prioridade.
                </p>
                <TabSystem tabs={[
                    {
                        title: 'Backends e Frontends Personalizados',
                        label: 'Sistemas web',
                        thumbnail: {
                            alt: 'Ilustração de sistema web completo com API e painel administrativo',
                            src: '/images/thumbnails/software-plan.jpg'
                        },
                        description: 'Criamos APIs escaláveis, painéis administrativos e interfaces otimizadas com as melhores práticas de performance e usabilidade.',
                        list: [
                            'REST e GraphQL com autenticação JWT',
                            'Landing pages de alta conversão',
                            'Aplicações Web completas (WebApps ou SPAs) com performance e escalabilidade',
                            'Sites completos com otimização técnica para SEO'
                        ]
                    },
                    {
                        title: 'Bots e Automações Inteligentes',
                        label: 'Bots e automações',
                        thumbnail: {
                            alt: 'Bots se comunicando entre plataformas',
                            src: '/images/thumbnails/seo-opmizations.jpg'
                        },
                        description: 'Desenvolvemos bots para diversas plataformas com lógica personalizada, integração com CRMs e backends e fluxos de automação.',
                        list: [
                            'Bots para WhatsApp, Telegram, Discord e Instagram',
                            'Respostas inteligentes e personalizadas',
                            'Integração com sistemas existentes (ERPs, CRMs)',
                            'Hospedagem em nuvem com alta disponibilidade'
                        ]
                    },
                    {
                        title: 'Aplicativos Mobile e Desktop',
                        label: 'Apps nativos',
                        thumbnail: {
                            alt: 'Tela de app Android nativo e desktop lado a lado',
                            src: '/images/thumbnails/automation.jpg'
                        },
                        description: 'Aplicativos completos, com publicação incluída na PlayStore, integração com backends, design responsivo e experiência nativa.',
                        list: [
                            'Apps Android com publicação na PlayStore',
                            'Aplicativos desktop com Electron ou nativos',
                            'Autenticação, notificações e integração com APIs',
                            'Apps com lógica offline-first e sincronização'
                        ]
                    },
                    {
                        title: 'Integrações e Conectividade',
                        label: 'Integrações',
                        thumbnail: {
                            alt: 'API conectando múltiplos sistemas',
                            src: '/images/thumbnails/android-app.jpg'
                        },
                        description: 'Conectamos sistemas, CRMs, bancos de dados e serviços externos com APIs REST, webhooks e autenticação segura.',
                        list: [
                            'Integração com CRMs (ex: Brevo, RD Station)',
                            'Webhooks e fluxos automatizados',
                            'APIs externas com autenticação segura',
                            'Consultas e atualizações em tempo real'
                        ]
                    },
                    {
                        title: 'SEO Técnico e Visibilidade Local',
                        label: 'SEO e visibilidade',
                        thumbnail: {
                            alt: 'Gráfico de SEO com destaque para localização no Google Maps',
                            src: '/images/thumbnails/automation.jpg'
                        },
                        description: 'Melhoramos a visibilidade digital do seu negócio com otimizações técnicas, SEO on-page e integração com o Google Maps.',
                        list: [
                            'Otimização de performance e acessibilidade',
                            'Sitemaps, Open Graph e estrutura semântica',
                            'Localização com Google Maps e Google Search',
                            'Preparação para indexação em buscadores'
                        ]
                    },
                    {
                        title: 'Banco de Dados e Infraestrutura',
                        label: 'Infraestrutura',
                        thumbnail: {
                            alt: 'Banco de dados conectado a serviços na nuvem',
                            src: '/images/thumbnails/android-app.jpg'
                        },
                        description: 'Modelagem, otimização e integração de bancos de dados relacionais e NoSQL com serviços modernos de hospedagem.',
                        list: [
                            'Modelagem relacional (PostgreSQL, MySQL) e NoSQL (MongoDB, Firebase)',
                            'Integração com APIs e sistemas legados',
                            'Hospedagem em serviços escaláveis (Render, Vercel, Railway)',
                            'Segurança e backup de dados automatizado'
                        ]
                    }
                ]}/>
            </section>
        </main>
    </>
}