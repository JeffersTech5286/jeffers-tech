'use client' // se estiver usando App Router (Next 13+)

import React from 'react';
import Image from 'next/image';
import { CheckIcon } from 'lucide-react';

const About = () => {
    const differentials = [
        'Metas claras e foco constante',
        'Dedicados na sua solução',
        'Tecnologias modernas e seguras',
        'Suporte gratuito no pós-entrega',
        'Compromisso com prazos reais',
        'Transparência total no projeto'
    ]

    return (
        <section id="quem-somos" className="py-20 bg-gray-pattern-plus-soft">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
                            Quem Somos
                        </h2>
                        <div className="w-24 h-1 gradient-primary mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            A JeffersTech é uma empresa de tecnologia focada em transformar desafios empresariais em soluções digitais inovadoras e eficientes.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-gray-100">Nossa Missão</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                Democratizar o acesso à tecnologia de qualidade, oferecendo soluções personalizadas que impulsionam o crescimento e a eficiência dos nossos clientes. Acreditamos que toda empresa, independente do tamanho, merece ter acesso às melhores ferramentas digitais.
                            </p>

                            <h3 className="text-2xl font-bold mb-6 text-gray-100">Nossos Diferenciais</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {differentials.map((differential, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-5 h-5 gradient-primary rounded-full flex items-center justify-center">
                                            <CheckIcon className="text-white" size={12} />
                                        </div>
                                        <span className="text-gray-300">{differential}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                                    alt="Equipe trabalhando"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
