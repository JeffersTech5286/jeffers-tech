'use client'

import React from 'react'
import {ArrowDown} from 'lucide-react'
import {Button} from '@/components/ui/button'


export default function Hero() {
    const scrollToNext = () => {
        const element = document.getElementById('quem-somos')
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')] bg-cover bg-center opacity-10"/>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
                        Transformamos ideias em
                        <span className="block">soluções digitais</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
                        Somos especialistas em desenvolvimento de sistemas web, aplicativos mobile, bots inteligentes e infraestrutura em nuvem. Sua empresa merece tecnologia de ponta.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
                        <Button>Modelos de contratação</Button>
                        <Button onClick={scrollToNext} variant='outline'>Conhecer a Empresa</Button>
                    </div>

                    {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">*/}
                    {/*    <div className="text-center">*/}
                    {/*        <div className="text-3xl font-bold text-[var(--cls-gradient-from)] mb-2">50+</div>*/}
                    {/*        <div className="text-gray-400">Projetos Entregues</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center">*/}
                    {/*        <div className="text-3xl font-bold text-[var(--cls-gradient-via)] mb-2">5+</div>*/}
                    {/*        <div className="text-gray-400">Anos de Experiência</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="text-center">*/}
                    {/*        <div className="text-3xl font-bold text-[var(--cls-gradient-to)] mb-2">100%</div>*/}
                    {/*        <div className="text-gray-400">Satisfação do Cliente</div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

            <button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-[var(--cls-gradient-via)]" size={32}/>
            </button>
        </section>
    )
}