'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react' // Importando os ícones

export default function FAQWidget(props: { question: string, answer: string }) {
    const [expanded, setExpanded] = useState<boolean>(false)

    const toggleExpanded = () => {
        setExpanded(!expanded)
    }

    return (
        <div className='border-b OutlinedCardBase py-4 my-5'>
            <div
                className={`flex justify-between items-center cursor-pointer border-[rgba(255,255,255,.2)] ${expanded && 'border-b-1 pb-4'}`}
                onClick={toggleExpanded}
                aria-expanded={expanded}
                aria-controls={`faq-answer-${props.question.replace(/\s+/g, '-')}`} // ID único para acessibilidade
            >
                <h3 className='text-base md:text-xl font-semibold text-cls-fg opacity-85 w-[90%]'>
                    {props.question}
                </h3>
                {expanded ? <ChevronUp size={30} /> : <ChevronDown size={30}/>}
            </div>
            <div
                id={`faq-answer-${props.question.replace(/\s+/g, '-')}`} // ID correspondente para acessibilidade
                className={`overflow-hidden MediamTransition ${
                    expanded ? 'max-h-screen opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
            >
                <p className='text-cls-fg pt-2 opacity-75'>
                    {props.answer}
                </p>
            </div>
        </div>
    )
}