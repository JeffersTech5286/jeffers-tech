import type {RefObject} from 'react'
import {useEffect, useState} from 'react'


export function useScroll(ref: RefObject<HTMLElement | null>, threshold: number = 0.1) {
    const [scrolled, setScrolled] = useState<boolean>(false)

    useEffect(() => {
        const current = ref.current

        const observer = new IntersectionObserver(
            ([entry]) => setScrolled(!entry.isIntersecting),
            {root: null, threshold: threshold}
        )

        if (current) observer.observe(current)

        return () => {
            if (current) observer.unobserve(current)
        }
    }, [ref, threshold])

    return scrolled
}
