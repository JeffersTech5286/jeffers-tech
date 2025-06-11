'use client'

import React from 'react';
import {Button} from '@/components/ui/button'
import {Award, CheckCircle, Rocket} from 'lucide-react';

export default function CTA() {
    const openWhatsApp = () => {
        const message = 'Olá! Vi o site da JeffersTech e gostaria de solicitar um orçamento gratuito para meu projeto.';
        window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <section className="py-20 bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] bg-cover bg-center opacity-25"/>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Pronto para <span className='gradient-text'>tirar sua ideia do papel</span> e transformar em realidade?
                    </h2>


                    <p className="text-xl md:text-2xl text-cyan-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Solicite um orçamento gratuito e veja como podemos acelerar o crescimento do seu negócio com soluções digitais sob medida, sem complicação.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button onClick={openWhatsApp}>
                            Solicitar Orçamento via WhatsApp
                        </Button>

                        <div className="text-white text-center">
                            <div className="text-sm text-cyan-100 mb-1">Resposta em até</div>
                            <div className="text-2xl font-bold">2 horas</div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center font-extrabold">
                        <div className="text-white">
                            <CheckCircle className="mx-auto" size={48} />
                            <div className="mt-2 font-medium">Sem compromisso, 100% gratuito</div>
                        </div>
                        <div className="text-white">
                            <Rocket className="mx-auto" size={48} />
                            <div className="mt-2 font-medium">Início rápido, sem burocracia</div>
                        </div>
                        <div className="text-white">
                            <Award className="mx-auto" size={48} />
                            <div className="mt-2 font-medium">Foco total na qualidade e no resultado</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}