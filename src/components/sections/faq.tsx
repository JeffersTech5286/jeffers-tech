'use client'

import {useState} from 'react'
import {ChevronDown} from 'lucide-react'

const faqs = [
    {
        question: 'Vocês são uma empresa nova. Como posso confiar na qualidade dos seus serviços?',
        answer:
            'Entendemos totalmente essa preocupação. Embora a JeffersTech seja uma startup, nossa equipe une experiência, estudo contínuo e muita dedicação. Trabalhamos com transparência, excelência técnica e foco total em entregar resultados reais. Nosso objetivo é conquistar sua confiança desde o primeiro projeto.',
    },
    {
        question: 'Qual é o principal foco da JeffersTech?',
        answer:
            'Nosso foco é criar soluções digitais sob medida para negócios que querem crescer com tecnologia. Desenvolvemos sistemas web, APIs, frontends modernos, bots inteligentes, automações e apps Android. Também otimizamos sites para SEO e performance. Nosso objetivo é tornar a tecnologia uma aliada estratégica para o seu negócio.',
    },
    {
        question: 'Como funciona o processo de desenvolvimento de um projeto com a JeffersTech?',
        answer:
            'Começamos entendendo seu negócio e os objetivos do projeto. A partir disso, definimos o escopo e as tecnologias ideais. O desenvolvimento é feito de forma ágil e transparente, com atualizações frequentes. Testamos tudo com cuidado antes da entrega e, se quiser, oferecemos suporte gratuito por um período após o projeto. Você acompanha tudo de perto, com clareza e confiança.',
    },
    {
        question: 'Como são definidos os custos de um projeto?',
        answer:
            'O valor depende do escopo, da complexidade, do tempo necessário e das tecnologias envolvidas. Apresentamos uma proposta clara e personalizada, sem surpresas. O modelo de projeto único tem custo fixo, e futuramente também ofereceremos planos mensais de suporte contínuo.',
    },
    {
        question: 'Qual o diferencial da JeffersTech em relação a outras empresas de desenvolvimento?',
        answer:
            'Nosso diferencial está na proximidade e personalização. Você fala diretamente com quem desenvolve, o que garante mais agilidade e foco nos detalhes. Valorizamos a comunicação clara, a transparência e a entrega de soluções que realmente resolvem problemas do seu negócio.',
    },
    {
        question: 'Quais tecnologias vocês usam nos projetos?',
        answer:
            'Utilizamos tecnologias modernas como React, Next.js, Django, FastAPI, MongoDB, PostgresSQL, e hospedagens como Vercel e HostGator. Para mobile, usamos React Native. Sempre escolhemos as ferramentas mais adequadas para o seu projeto, com foco em performance, segurança e escalabilidade.',
    },
    {
        question: 'Como é feito o suporte após a entrega?',
        answer:
            'Oferecemos suporte gratuito por um período de 1 a 3 meses após a entrega, garantindo estabilidade e ajustes caso necessário. Após isso, podemos oferecer planos de manutenção e evolução contínua, conforme a necessidade do cliente.',
    }
];


export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section id='faq' className='py-20 bg-gray-pattern-plus-soft'>
            <div className='container mx-auto px-4'>
                <div className='max-w-4xl mx-auto'>
                    <div className='text-center mb-16'>
                        <h2 className='text-4xl md:text-5xl font-bold mb-6 text-gray-100'>
                            Perguntas Frequentes
                        </h2>
                        <div className='w-24 h-1 gradient-primary bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-8'></div>
                        <p className='text-xl text-gray-300'>
                            Esclarecemos as principais dúvidas sobre nossos serviços
                        </p>
                    </div>

                    <div className='space-y-4'>
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className='border border-gray-600 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-gray-700'
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className='w-full p-6 text-left flex items-center justify-between hover:bg-gray-600 transition-colors duration-200'
                                >
                  <span className='font-semibold text-gray-100 pr-8'>
                    {faq.question}
                  </span>
                                    <ChevronDown
                                        className={`text-[var(--cls-gradient-via)] transition-transform duration-300 ${
                                            activeIndex === index ? 'rotate-180' : ''
                                        }`}
                                        size={24}
                                    />
                                </button>
                                {activeIndex === index && (
                                    <div className='px-6 pb-6'>
                                        <div className='pt-4 border-t border-gray-600'>
                                            <p className='text-gray-300 leading-relaxed'>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
