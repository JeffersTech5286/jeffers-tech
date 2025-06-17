'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'

import Globe from 'lucide-react/dist/esm/icons/globe'
import Cpu from 'lucide-react/dist/esm/icons/cpu'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone'
import Puzzle from 'lucide-react/dist/esm/icons/puzzle'
import Megaphone from 'lucide-react/dist/esm/icons/megaphone'
import Server from 'lucide-react/dist/esm/icons/server'

const DEFAULT_TIME = 5000
const DEFAULT_PERSISTENT = 15000

export default function Solutions() {
    const [activeTab, setActiveTab] = useState(0)
    const [timer, setTimer] = useState(DEFAULT_TIME)

    const solutions = [
        {
            title: 'Sistemas Web',
            icon: Globe,
            description: 'Desenvolvemos sistemas web personalizados, robustos e fáceis de usar, para melhorar o controle e a gestão do seu negócio.',
            benefits: [
                'Interface moderna e intuitiva',
                'Arquitetura escalável e segura',
                'Integração com APIs e sistemas externos',
                'Painel administrativo prático',
                'Relatórios em tempo real para decisões rápidas'
            ],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
        },
        {
            title: 'Bots Inteligentes',
            icon: Cpu,
            description: 'Automatizamos atendimentos e processos com bots para WhatsApp, Telegram, Instagram e Discord, usando inteligência artificial para melhorar a experiência do cliente.',
            benefits: [
                'Atendimento 24/7 sem pausas',
                'Redução de custos operacionais',
                'Integração com principais plataformas de mensagem',
                'Respostas automatizadas e personalizadas',
                'Relatórios e análise de dados de atendimento'
            ],
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
        },
        {
            title: 'Apps Mobile',
            icon: Smartphone,
            description: 'Criamos aplicativos móveis para Android (e iOS, conforme demanda), com foco em performance, usabilidade e integração com seus sistemas.',
            benefits: [
                'Design responsivo e amigável',
                'Alta performance e estabilidade',
                'Funcionalidades offline quando necessárias',
                'Notificações push para engajamento',
                'Sincronização segura com a nuvem'
            ],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
        },
        {
            title: 'Integrações',
            icon: Puzzle,
            description: 'Conectamos seus sistemas e automatizamos processos, integrando CRMs, ERPs, APIs e plataformas de ecommerce para facilitar sua operação.',
            benefits: [
                'APIs RESTFull e Webhooks em tempo real',
                'Sincronização automática de dados',
                'Integração com CRM (como Brevo)',
                'Automação de workflows e processos',
                'Pagamentos online e monitoramento ativo'
            ],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
        },
        {
            title: 'SEO & Marketing Digital',
            icon: Megaphone,
            description: 'Melhoramos a visibilidade da sua empresa online com otimização SEO e estratégias de marketing digital alinhadas ao seu negócio.',
            benefits: [
                'Análise e auditoria técnica completa',
                'Otimização on-page para motores de busca',
                'Link building e autoridade digital',
                'Monitoramento e relatórios detalhados',
                'Campanhas de Google Ads e redes sociais'
            ],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
        },
        {
            title: 'Infraestrutura e Cloud',
            icon: Server,
            description: 'Gerenciamos a infraestrutura na nuvem para garantir alta performance, segurança e disponibilidade dos seus sistemas e apps.',
            benefits: [
                'Hospedagem em provedores confiáveis',
                'Escalabilidade automática conforme demanda',
                'Backups automatizados e segurança avançada',
                'Monitoramento 24/7 e suporte técnico',
                'Processos automatizados de deploy (CI/CD)'
            ],
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
        }
    ]

    useEffect(() => {
        if (solutions.length === 0) return

        const interval = setInterval(() => {
            setActiveTab(prev => (prev + 1) % solutions.length)

            // Se o timer está em modo persistente, volta para o padrão
            if (timer !== DEFAULT_TIME) setTimer(DEFAULT_TIME)
       }, timer)

        return () => clearInterval(interval)
   }, [solutions.length, timer])

    const handleTabClick = (index: number) => {
        setActiveTab(index)
        setTimer(DEFAULT_PERSISTENT)
   }

    return (
        <section id='soluções' className='py-20 bg-gray-900'>
            <div className='container mx-auto px-4'>
                <div className='max-w-6xl mx-auto'>
                    {/* Título principal e descrição */}
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-100'>
                            Explore as Soluções
                        </h2>
                        <div className='w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8'></div>
                        <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                            Oferecemos um portfólio completo de soluções tecnológicas para impulsionar seu negócio
                        </p>
                    </div>

                    {/* Tabs com ícones Lucide */}
                    <div className='flex flex-wrap justify-center mb-12 gap-3'>
                        {solutions.map((solution, index) => {
                            const Icon = solution.icon
                            return (
                                <button
                                    key={index}
                                    onClick={() => handleTabClick(index)}
                                    className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 ${
                                        activeTab === index
                                            ? 'gradient-primary'
                                            : 'bg-gray-800 text-gray-300 hover:text-blue-400 hover:shadow-md border border-gray-700'
                                   }`}
                                    aria-current={activeTab === index ? 'true' : undefined}
                                >
                                    <Icon
                                        size={18}
                                        strokeWidth={2}
                                        className={activeTab === index ? 'text-white' : 'gradient-text'}
                                    />
                                    <span>{solution.title}</span>
                                </button>
                            )
                       })}
                    </div>

                    {/* Conteúdo da aba ativa */}
                    <div className='bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-700'>
                        <div className='grid grid-cols-1 lg:grid-cols-2'>
                            <div className='p-8 lg:p-12'>
                                <h3 className='text-3xl font-bold mb-4 text-gray-100'>
                                    {solutions[activeTab].title}
                                </h3>
                                <p className='text-gray-300 mb-8 text-lg'>
                                    {solutions[activeTab].description}
                                </p>

                                <h4 className='text-xl font-semibold mb-6 text-gray-100'>Benefícios:</h4>
                                <ul className='flex flex-col space-y-3 max-w-md'>
                                    {solutions[activeTab].benefits.map((benefit, index) => (
                                        <li key={index} className='flex items-center space-x-3 text-gray-300 text-base'>
                                            <div className='w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex-shrink-0'></div>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='relative h-64 lg:h-auto w-full'>
                                <Image
                                    src={solutions[activeTab].image}
                                    alt={solutions[activeTab].title}
                                    fill
                                    className='object-cover'
                                    sizes='(max-width: 1024px) 100vw, 50vw'
                                    priority
                                />
                                <div className='absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
