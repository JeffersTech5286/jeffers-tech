'use client'

import { useState, useEffect, useRef } from 'react'

interface SmoothTimeBarProps {
    time: number
    activeKey: string | number
    className?: string
}

export default function SmoothTimeBar(props: SmoothTimeBarProps) {
    const [progress, setProgress] = useState(100)
    const startTimeRef = useRef(Date.now())

    useEffect(() => {
        const durationMs = props.time

        if (durationMs <= 0) {
            setProgress(0)
            return
        }
        startTimeRef.current = Date.now()
        setProgress(100)

        let frameId: number

        const update = () => {
            const elapsed = Date.now() - startTimeRef.current
            let percent = 100 - (elapsed / durationMs) * 100
            percent = Math.max(0, percent)

            setProgress(percent)

            if (percent > 0) {
                frameId = requestAnimationFrame(update)
            }
        }

        frameId = requestAnimationFrame(update)

        return () => {
            cancelAnimationFrame(frameId)
        }
    }, [props.time, props.activeKey])

    return (
        <div className="w-full h-[.1rem] rounded">
            <div
                className={`h-full GradientBase rounded ${props?.className}`}
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}