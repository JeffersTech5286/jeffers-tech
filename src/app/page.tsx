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
import HiringModelCard from '@/components/widgets/HiringModelCard.tsx'
import AdvantageCard from '@/components/widgets/AdvantageCard.tsx'


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
                        size='1080px, 720px'
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

            <section className='BaseSection flex flex-col gap-5 lg:flex-row'>
                <Image
                    src='/images/thumbnails/software-plan.webp'
                    alt='Equipe de desenvolvimento de software colaborando no planejamento de um sistema personalizado'
                    className='max-w-screen w-full lg:flex-none lg:w-[45%] aspect-[16/9] rounded-2xl'
                    size='1080px, 720px'
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

            <section className='BaseSection'>
                <h2 className='BaseTitle text-center mx-auto pb-15'>Por que nos escolher</h2>
                <div className='flex justify-center flex-wrap gap-10 md:gap-17'>
                    <AdvantageCard
                        icon='user-check'
                        title="Atendimento direto com quem faz"
                        description="Você fala diretamente com quem desenvolve. Isso garante mais agilidade, clareza e eficiência no seu projeto."
                    />

                    <AdvantageCard
                        icon="sliders-horizontal"
                        title="Soluções sob medida para o seu negócio"
                        description="Cada cliente é único — e suas soluções também. Criamos sistemas personalizados para resolver os desafios reais do seu negócio."
                    />

                    <AdvantageCard
                        icon="handshake"
                        title="Parceria próxima e transparente"
                        description="Trabalhamos lado a lado com você, explicando cada etapa e mantendo total transparência em todas as decisões do projeto."
                    />

                    <AdvantageCard
                        icon="zap"
                        title="Agilidade sem perder qualidade"
                        description="Com uma estrutura leve e eficiente, desenvolvemos rápido sem abrir mão da robustez, escalabilidade e qualidade das entregas."
                    />

                    <AdvantageCard
                        icon="heart"
                        title="Comprometimento de verdade"
                        description="Seu sucesso é a nossa missão. Cuidamos de cada detalhe para que o resultado final supere as expectativas."
                    />
                </div>
            </section>

            <section className='BaseSection text-center'>
                <h2 className='BaseTitle w-full mx-auto'>
                    Veja qual <TextGradient>modelo de contratação</TextGradient> se adapta melhor ao seu negócio
                </h2>
                <div className='flex w-full justify-center flex-col gap-10 items-center md:flex-row md:items-start pt-10'>
                    <HiringModelCard
                        benefits={[
                            'Entrega pontual e personalizada',
                            'Custo fixo, sem surpresas',
                            'Processo direto e eficiente'
                        ]}
                        buttonText='Solicitar Projeto'
                        description='Perfeito para clientes que desejam resolver uma demanda específica, como a criação de um site institucional, um chatbot, uma landing page ou qualquer outro projeto individual. Sem burocracia e com entrega garantida.'
                        subtitle='Para quem quer uma solução rápida e sob medida'
                        title='Projeto Único'
                    />

                    <HiringModelCard
                        benefits={[
                            'Atualizações e melhorias mensais',
                            'Suporte técnico prioritário',
                            'Consultoria contínua para inovação'
                        ]}
                        buttonText='Conhecer Planos'
                        description='Ideal para empresas que já possuem um sistema ou site e desejam manter, melhorar e evoluir continuamente. Contamos com três planos disponíveis, cada um com benefícios exclusivos de acordo com o nível de suporte.'
                        subtitle='Manutenção e evolução contínua com planos mensais'
                        title='Por mensalidade'
                    />

                    {/*<HiringModelCard*/}
                    {/*    benefits={[*/}
                    {/*        'Desenvolvimento completo sob demanda',*/}
                    {/*        'Pagamento baseado no sucesso',*/}
                    {/*        'Contrato claro e alinhado com o crescimento'*/}
                    {/*    ]}*/}
                    {/*    buttonText='Propor Parceria'*/}
                    {/*    description='Uma parceria para empresas que precisam de um time de tecnologia completo, sem pagar adiantado. Cuidamos de |corrigir|<t>odo o desenvolvimento e inovação tecnológica em troca de uma porcentagem dos lucros, com contrato transparente e duradouro.'*/}
                    {/*    subtitle='Você cuida do negócio, nós da tecnologia'*/}
                    {/*    title='Parceria Estratégica'*/}
                    {/*/>*/}
                </div>
            </section>

            <section className='BaseSection'>
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
                            src: '/images/thumbnails/software-plan.webp'
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
                            src: '/images/thumbnails/seo-opmizations.webp'
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
                            src: '/images/thumbnails/automation.webp'
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
                            src: '/images/thumbnails/android-app.webp'
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
                            src: '/images/thumbnails/automation.webp'
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
                            src: '/images/thumbnails/android-app.webp'
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