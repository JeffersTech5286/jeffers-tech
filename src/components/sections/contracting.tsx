'use client'

import {useIntersectionObserver} from '@/hooks/useIntersectionObserver'
import siteConfig from '@/siteconfig'


interface Model {
    title: string;
    description: string;
    price: string;
    benefits: string[];
    recommended: boolean;
    buttonText: string;
    highlight: string;
}

interface ContractingCardProps {
    model: Model;
    index: number;
    onButtonClick: (title: string) => void;
}

function ContractingCard({ model, index, onButtonClick }: ContractingCardProps) {
    const {elementRef, isVisible} = useIntersectionObserver({
        threshold: 0.2,
        triggerOnce: true,
    });

    return (
        <div
            ref={elementRef}
            className={`relative p-8 flex flex-col justify-between h-full rounded-3xl shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${
                model.recommended ? 'gradient-primary text-white scale-105' : 'bg-gray-800 border border-gray-700 hover:shadow-2xl'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            {model.recommended ? (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-bold">
            {model.highlight}
          </span>
                </div>
            ) : (
                <div className="absolute -top-3 right-6">
          <span className="gradient-primary text-white px-3 py-1 rounded-full text-sm font-medium">
            {model.highlight}
          </span>
                </div>
            )}

            <div className="flex flex-col flex-grow">
                <div className="mb-8">
                    <h3 className={`text-2xl font-bold mb-4 ${model.recommended ? 'text-white' : 'text-gray-100'}`}>
                        {model.title}
                    </h3>
                    <p className={`mb-6 ${model.recommended ? 'text-cyan-100' : 'text-gray-300'}`}>{model.description}</p>
                    <div className={`text-3xl font-bold ${model.recommended ? 'text-white' : 'gradient-text'}`}>
                        {model.price}
                    </div>
                </div>

                <div className="mb-8">
                    <h4 className={`font-semibold mb-4 ${model.recommended ? 'text-white' : 'text-gray-100'}`}>
                        Benefícios inclusos:
                    </h4>
                    <ul className="space-y-3">
                        {model.benefits.map((benefit, benefitIndex) => (
                            <li
                                key={benefitIndex}
                                className={`flex items-center space-x-3 transition-all duration-500 ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                                }`}
                                style={{ transitionDelay: `${index * 200 + benefitIndex * 100 + 300}ms` }}
                            >
                                <div className={`w-2 h-2 rounded-full ${model.recommended ? 'bg-white' : 'gradient-primary'}`} />
                                <span className={model.recommended ? 'text-cyan-100' : 'text-gray-300'}>{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <button
                onClick={() => onButtonClick(model.title)}
                className={`mt-auto w-full py-4 rounded-full font-semibold transition-all duration-500 transform ${
                    model.recommended
                        ? 'bg-white text-[var(--cls-gradient-via)] hover:bg-cyan-50'
                        : 'gradient-primary text-white hover:shadow-xl'
                } ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
                style={{transitionDelay: `${index * 200 + 600}ms`}}
            >
                {model.buttonText}
            </button>
        </div>
    );
}

export default function Contracting() {
    const contractingModels = [
        {
            title: 'Projeto Único',
            description:
                'Ideal para quem precisa de uma solução específica — seja um site institucional, chatbot, landing page ou outro projeto isolado. Sem complicação, com entrega garantida e transparente.',
            price: 'Sob consulta',
            benefits: [
                'Entrega personalizada e no prazo',
                'Custo fixo, sem surpresas',
                'Processo simples e direto',
            ],
            recommended: false,
            buttonText: 'Solicitar Projeto',
            highlight: 'Solução rápida',
        }
        // {
        //     title: 'Por mensalidade',
        //     description:
        //         'Ideal para empresas que já possuem um sistema ou site e desejam manter, melhorar e evoluir continuamente. Contamos com três planos disponíveis, cada um com benefícios exclusivos de acordo com o nível de suporte.',
        //     price: 'A partir de R$ 8.000/mês',
        //     benefits: [
        //         'Atualizações e melhorias mensais',
        //         'Suporte técnico prioritário',
        //         'Consultoria contínua para inovação',
        //     ],
        //     recommended: true,
        //     buttonText: 'Conhecer Planos',
        //     highlight: 'Mais Popular',
        // },
        // {
        //     title: 'Parceria Estratégica',
        //     description:
        //         'Uma parceria para empresas que precisam de um time de tecnologia completo, sem pagar adiantado. Cuidamos de todo o desenvolvimento e inovação tecnológica em troca de uma porcentagem dos lucros, com contrato transparente e duradouro.',
        //     price: 'Sob consulta',
        //     benefits: [
        //         'Desenvolvimento completo sob demanda',
        //         'Pagamento baseado no sucesso',
        //         'Contrato claro e alinhado com o crescimento',
        //     ],
        //     recommended: false,
        //     buttonText: 'Propor Parceria',
        //     highlight: 'Você + Tech',
        // },
    ];

    const openWhatsApp = (modelTitle: string) => {
        const message = `Olá! Gostaria de saber mais sobre o modelo de contratação: ${modelTitle}`;
        window.open(`https://wa.me/${siteConfig.contact.phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    const { elementRef: headerRef, isVisible: headerVisible } = useIntersectionObserver({
        threshold: 0.3,
        triggerOnce: true,
    });

    // Remova a chamada do hook dentro do .map
    // const cardsObservers = contractingModels.map(() => ...); // <- LINHA REMOVIDA

    return (
        <section id="contratação" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <div
                        ref={headerRef}
                        className={`text-center mb-16 transition-all duration-700 ${
                            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">Modelos de Contratação</h2>
                        <div className="w-24 h-1 gradient-primary mx-auto mb-8" />
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Escolha o modelo que melhor se adapta às necessidades do seu projeto
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center">
                        {/* Mapeie os modelos para o novo componente ContractingCard */}
                        {contractingModels.map((model, index) => (
                            <ContractingCard
                                key={index}
                                model={model}
                                index={index}
                                onButtonClick={openWhatsApp}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
