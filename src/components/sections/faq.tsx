"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        question: "Vocês são uma empresa nova. Como posso confiar na qualidade dos seus serviços?",
        answer:
            "Entendemos totalmente essa preocupação. Embora a JeffersTech seja uma startup, nossa equipe reúne profissionais experientes e apaixonados por tecnologia. Trabalhamos com total transparência, excelência técnica e dedicação em cada projeto. Nosso compromisso é construir confiança por meio de resultados reais, entregando soluções de alto impacto desde o primeiro cliente.",
    },
    {
        question: "Qual é o principal foco da JeffersTech?",
        answer:
            "Nosso foco é criar soluções digitais sob medida para negócios que querem crescer com tecnologia. Desenvolvemos sistemas web completos, APIs robustas, frontends modernos, bots inteligentes, automações e apps Android. Também otimizamos sites para SEO e performance. Tudo isso com o objetivo de acelerar resultados e tornar a tecnologia uma aliada estratégica dos nossos clientes.",
    },
    {
        question: "Como funciona o processo de desenvolvimento de um projeto com a JeffersTech?",
        answer:
            "Trabalhamos de forma colaborativa e transparente, guiando cada projeto por etapas bem definidas. Começamos entendendo a fundo seu negócio e objetivos, depois planejamos o escopo e as tecnologias ideais para a solução. A partir daí, iniciamos o desenvolvimento de forma ágil, com atualizações constantes. Todo o sistema passa por testes rigorosos de qualidade antes da entrega e implantação. E, se desejar, oferecemos suporte contínuo para garantir a evolução e estabilidade da solução. Nosso objetivo é que você acompanhe cada fase com clareza e confiança.",
    },
    {
        question: "Como são definidos os custos de um projeto?",
        answer:
            "O valor de um projeto é calculado com base no escopo, complexidade das funcionalidades, tecnologias envolvidas e tempo estimado de desenvolvimento. Trabalhamos com propostas claras e personalizadas, sempre buscando o melhor equilíbrio entre investimento e valor entregue. Também oferecemos planos mensais para suporte e evolução contínua, se for o seu caso.",
    },
    {
        question: "Qual o diferencial da JeffersTech em relação a outras empresas de desenvolvimento?",
        answer:
            "Nosso maior diferencial é a proximidade. Você fala diretamente com quem desenvolve. Isso nos permite criar soluções realmente personalizadas, com agilidade e foco total em resolver os problemas do seu negócio. Mais do que entregar código, queremos ser parceiros do seu crescimento — com soluções inteligentes, atendimento humano e resultados concretos.",
    },
]

export default function Faq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <section id="faq" className="py-20 bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100">
                            Perguntas Frequentes
                        </h2>
                        <div className="w-24 h-1 gradient-primary bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300">
                            Esclarecemos as principais dúvidas sobre nossos serviços
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-600 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-gray-700"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-600 transition-colors duration-200"
                                >
                  <span className="font-semibold text-gray-100 pr-8">
                    {faq.question}
                  </span>
                                    <ChevronDown
                                        className={`text-[var(--cls-gradient-via)] transition-transform duration-300 ${
                                            activeIndex === index ? "rotate-180" : ""
                                        }`}
                                        size={24}
                                    />
                                </button>
                                {activeIndex === index && (
                                    <div className="px-6 pb-6">
                                        <div className="pt-4 border-t border-gray-600">
                                            <p className="text-gray-300 leading-relaxed">
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
