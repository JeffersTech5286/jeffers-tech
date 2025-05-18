import React, {useEffect, useRef} from 'react'

import type {RefObject, ReactNode} from 'react'

interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    rotation: number
    rotationSpeed: number
}

type IconClass = string

type MouseType = { x: number | null; y: number | null }

// noinspection SpellCheckingInspection
const baseIcons: IconClass[] = [
    'devicon-python-plain',
    'devicon-javascript-plain',
    'devicon-react-original',
    'devicon-nodejs-plain',
    'devicon-docker-plain',
    'devicon-html5-plain',
    'devicon-css3-plain',
    'devicon-typescript-plain',
    'devicon-fastapi-plain',
    'devicon-amazonwebservices-plain-wordmark',
    'devicon-vercel-original',
    'devicon-redis-plain',
    'devicon-postgresql-plain',
    'devicon-mongodb-plain',
    'devicon-vuejs-plain',
    'devicon-django-plain',
    'devicon-djangorest-plain',
    'devicon-pandas-plain',
    'devicon-android-plain',
    'devicon-bash-plain',
    'devicon-tailwindcss-plain',
    'devicon-sass-plain',
    'devicon-vitejs-plain',
    'devicon-npm-original-wordmark',
    'devicon-pypi-plain',
    'devicon-poetry-plain',
    'devicon-sqlite-plain',
    'devicon-firebase-plain',
    'devicon-androidstudio-plain',
    'devicon-anaconda-plain',
    'devicon-pycharm-plain',
    'devicon-webstorm-plain',
    'devicon-openapi-plain',
    'devicon-cloudflare-plain',
    'devicon-materialui-plain',
    'devicon-scikitlearn-plain',
    'devicon-matplotlib-plain',
    'devicon-googlecloud-plain',
    'devicon-json-plain',
    'devicon-java-plain',
]

function generateIcons(width: number, height: number): [IconClass[], Particle[]] {
    const icons: IconClass[] = []
    const particles: Particle[] = []

    const instances: string[] = baseIcons.flatMap((icon: string): string[] => {
        const count: number = Math.floor(Math.random() * 5) + 4
        
        return Array.from({ length: count }, () => icon)
    })

    for (const cls of instances) {
        let attempts: number = 0
        let placed: boolean = false

        while (!placed && attempts < 100) {

            const size: number = 40 + Math.random() * 50

            const x: number = Math.random() * (width - size)
            const y: number = Math.random() * (height - size)

            const tooClose: boolean = particles.some((p: Particle): boolean => {

                const dx: number = x - p.x
                const dy: number = y - p.y

                const dist: number = Math.sqrt(dx * dx + dy * dy)

                return dist < (p.size + size) * 0.8
            })

            if (!tooClose) {
                particles.push({
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 0.2,
                })
                icons.push(cls)
                placed = true
            }

            attempts++
        }
    }

    return [icons, particles]
}

export default function FloatingIcons(): ReactNode {
    const containerRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null)
    const iconsRef: RefObject<RefObject<HTMLElement | null>[]> = useRef<RefObject<HTMLElement | null>[]>([])
    const particles: RefObject<Particle[]> = useRef<Particle[]>([])
    const mouse = useRef<MouseType>({x: null, y: null})

    const REPULSION_RADIUS = 100
    const MAX_SPEED = 3

    useEffect(() => {
        const container = containerRef.current

        if (!container) return

        const width = container.clientWidth
        const height = container.clientHeight

        const [icons, initialParticles] = generateIcons(width, height)
        
        particles.current = initialParticles
        iconsRef.current = icons.map(() => React.createRef<HTMLElement>())

        function onMouseMove(e: MouseEvent) {
            if (container) {
                const rect = container.getBoundingClientRect()
                
                mouse.current.x = e.clientX - rect.left
                mouse.current.y = e.clientY - rect.top
            }
        }

        function onMouseLeave() {
            mouse.current.x = null
            mouse.current.y = null
        }

        container.addEventListener('mousemove', onMouseMove)
        container.addEventListener('mouseleave', onMouseLeave)

        function limitVelocity(p: Particle) {
            const speed = Math.sqrt(p.vx ** 2 + p.vy ** 2)
            
            if (speed > MAX_SPEED) {
                p.vx *= MAX_SPEED / speed
                p.vy *= MAX_SPEED / speed
            }
        }

        function detectAndResolveCollisions(ps: Particle[]): void {
            for (let i: number = 0; i < ps.length; i++) {
                for (let j: number = i + 1; j < ps.length; j++) {
                    const a: Particle = ps[i]
                    const b: Particle = ps[j]
                    
                    const dx: number = a.x - b.x
                    const dy: number = a.y - b.y
                    
                    const dist: number = Math.sqrt(dx * dx + dy * dy)
                    
                    const minDist: number = (a.size + b.size) / 2

                    if (dist < minDist) {
                        const overlap: number = minDist - dist
                        const angle: number = Math.atan2(dy, dx)
                        const ax: number = Math.cos(angle) * overlap / 2
                        const ay: number = Math.sin(angle) * overlap / 2

                        a.x += ax;
                        a.y += ay;
                        b.x -= ax;
                        b.y -= ay;

                        [a.vx, b.vx] = [b.vx, a.vx];
                        [a.vy, b.vy] = [b.vy, a.vy];
                    }
                }
            }
        }

        function update() {
            const ps = particles.current
            detectAndResolveCollisions(ps)

            ps.forEach((p, i) => {
                if (mouse.current.x !== null && mouse.current.y !== null) {
                    
                    const dx = p.x + p.size / 2 - mouse.current.x
                    const dy = p.y + p.size / 2 - mouse.current.y
                    
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < REPULSION_RADIUS) {
                        const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS

                        const angle = Math.atan2(dy, dx)
                        
                        p.vx += Math.cos(angle) * force * 1.2
                        p.vy += Math.sin(angle) * force * 1.2
                        
                        p.rotationSpeed += (Math.random() - 0.5) * 0.5
                    }
                }

                p.x += p.vx
                p.y += p.vy
                
                p.rotation += p.rotationSpeed

                if (p.x < 0 || p.x + p.size > width) p.vx *= -1
                if (p.y < 0 || p.y + p.size > height) p.vy *= -1

                limitVelocity(p)

                const el = iconsRef.current[i]?.current

                if (el) el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`
            })

            requestAnimationFrame(update)
        }

        update()

        return () => {
            container.removeEventListener('mousemove', onMouseMove)
            container.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [])

    return <div
        ref={containerRef}
        className='absolute inset-0 w-full h-full -z-10 bg-cls-bg mt-[99vh]'
        style={{ overflow: 'hidden', position: 'absolute' }}
    >
        {iconsRef.current.map((ref, i) => (
            <i
                key={i}
                ref={ref}
                className={`${baseIcons[i % baseIcons.length]} text-gray-400 pointer-events-none`}
                style={{
                    fontSize: `${particles.current[i]?.size || 40}px`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    willChange: 'transform',
                    opacity: 0.05,
                    userSelect: 'none',
                }}
            />
        ))}
    </div>
}
