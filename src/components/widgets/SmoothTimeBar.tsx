// SmoothTimeBar.tsx
'use client'

import { useState, useEffect, useRef } from 'react'

interface SmoothTimeBarProps {
    time: number; // Duração total em milissegundos
    activeKey: string | number; // Uma chave que muda quando a aba ativa muda
    className?: string;
}

export default function SmoothTimeBar(props: SmoothTimeBarProps) {
    const [progress, setProgress] = useState(100)
    const startTimeRef = useRef(Date.now())
    // props.time já é a duração em milissegundos

    useEffect(() => {
        const durationMs = props.time

        // Se a duração for inválida, define o progresso para 0 ou 100 e para.
        if (durationMs <= 0) {
            setProgress(0) // Ou 100, dependendo do comportamento desejado para durações inválidas
            return
        }

        // Reinicia o tempo de início e o progresso sempre que
        // a duração (props.time) ou a aba ativa (props.activeKey) mudar.
        startTimeRef.current = Date.now()
        setProgress(100)

        let frameId: number

        const update = () => {
            const elapsed = Date.now() - startTimeRef.current
            let percent = 100 - (elapsed / durationMs) * 100
            percent = Math.max(0, percent) // Garante que não seja menor que 0

            setProgress(percent)

            if (percent > 0) {
                frameId = requestAnimationFrame(update)
            }
        }

        frameId = requestAnimationFrame(update)

        return () => {
            cancelAnimationFrame(frameId)
        }
    }, [props.time, props.activeKey]) // Dependências: reinicia se o tempo ou a activeKey mudar

    return (
        <div className="w-full h-[.1rem] rounded">
            <div
                className={`h-full GradientBase rounded ${props?.className}`} // CSS transition para suavidade visual
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}