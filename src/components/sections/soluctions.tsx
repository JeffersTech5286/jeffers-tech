'use client'

import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {
    Globe,
    Cpu,
    Smartphone,
    Puzzle,
    Megaphone,
    Server,
} from 'lucide-react'

const DEFAULT_TIME = 5000
const DEFAULT_PERSISTENT = 15000

export default function Solutions() {
    const [activeTab, setActiveTab] = useState(0)
    const [timer, setTimer] = useState(DEFAULT_TIME)

    const solutions = [
        {
            title: 'Sistemas Web',
            icon: Globe,
            description: 'Desenvolvimento de aplicações web robustas e escaláveis',
            benefits: [
                'Interface moderna e intuitiva',
                'Arquitetura escalável',
                'Segurança avançada',
                'Integração com APIs',
                'Dashboard administrativo',
                'Relatórios em tempo real'
            ],
            image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6'
       },
        {
            title: 'Bots Inteligentes',
            icon: Cpu,
            description: 'Automação de processos com inteligência artificial',
            benefits: [
                'Atendimento 24/7',
                'Redução de custos',
                'Integração WhatsApp/Telegram',
                'IA conversacional',
                'Analytics detalhados',
                'Personalização completa'
            ],
            image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7'
       },
        {
            title: 'Apps Mobile',
            icon: Smartphone,
            description: 'Aplicativos nativos para iOS e Android',
            benefits: [
                'Design responsivo',
                'Performance otimizada',
                'Offline first',
                'Push notifications',
                'Sincronização em nuvem',
                'Analytics integrado'
            ],
            image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c'
       },
        {
            title: 'Integrações',
            icon: Puzzle,
            description: 'Conectamos seus sistemas e automatizamos workflows',
            benefits: [
                'APIs RESTful',
                'Webhooks em tempo real',
                'Sincronização de dados',
                'ERP/CRM integration',
                'Pagamentos online',
                'Monitoramento ativo'
            ],
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31'
       },
        {
            title: 'SEO & Marketing',
            icon: Megaphone,
            description: 'Otimização para mecanismos de busca e marketing digital',
            benefits: [
                'Auditoria técnica completa',
                'Otimização on-page',
                'Link building estratégico',
                'Analytics e relatórios',
                'Campanhas Google Ads',
                'Social media management'
            ],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
       },
        {
            title: 'Infraestrutura',
            icon: Server,
            description: 'Cloud computing e DevOps para máxima performance',
            benefits: [
                'AWS/Azure/GCP',
                'Auto-scaling',
                'Backup automatizado',
                'Monitoramento 24/7',
                'CI/CD pipelines',
                'Segurança avançada'
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
