'use client'

import React, {useEffect, useRef, useState} from 'react' // Adicionado useState
import type {ReactNode} from 'react'

interface ParticlePhysics {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    rotation: number
    rotationSpeed: number
}

// Interface para os dados que também serão usados na renderização e estado
interface RenderableParticle extends ParticlePhysics {
    id: string; // Para uma key estável no React
    iconClass: string;
}

type IconClass = string

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

function generateInitialParticles(width: number, height: number): RenderableParticle[] {
    const generatedParticles: RenderableParticle[] = []
    // Usado para verificar sobreposição durante a geração
    const tempPlacedParticles: { x: number, y: number, size: number }[] = [];
    let particleIdCounter = 0;

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

            const tooClose: boolean = tempPlacedParticles.some((p) => {
                const dx: number = x - p.x
                const dy: number = y - p.y
                // Compara quadrados para evitar Math.sqrt aqui se possível (opcional na geração)
                const distSquared: number = dx * dx + dy * dy
                const minSeparation = (p.size + size) * 0.8;
                return distSquared < (minSeparation * minSeparation);
            })

            if (!tooClose) {
                generatedParticles.push({
                    id: `particle-${particleIdCounter++}`,
                    iconClass: cls,
                    x,
                    y,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size,
                    rotation: Math.random() * 360,
                    rotationSpeed: (Math.random() - 0.5) * 0.2,
                });
                tempPlacedParticles.push({ x, y, size });
                placed = true
            }
            attempts++
        }
    }
    return generatedParticles;
}

export default function FloatingIcons(): ReactNode {
    const containerRef = useRef<HTMLDivElement>(null);
    // Estado para as partículas que serão renderizadas (aciona re-renderização do React)
    const [renderableParticles, setRenderableParticles] = useState<RenderableParticle[]>([]);
    // Ref para os dados de física das partículas (atualizados frequentemente sem re-renderizar)
    const physicsParticlesRef = useRef<ParticlePhysics[]>([]);
    // Refs para os elementos DOM <i> individuais
    const iconElementsRef = useRef<(HTMLElement | null)[]>([]);

    const MAX_SPEED = 2;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        if (width === 0 || height === 0) {
            // Evita gerar partículas se o container não tiver dimensões,
            // pode ser necessário um ResizeObserver para lidar com isso de forma mais robusta
            console.warn("FloatingIcons: Container dimensions are zero. No particles generated.");
            return;
        }

        const initialParticlesData = generateInitialParticles(width, height);
        setRenderableParticles(initialParticlesData);

        physicsParticlesRef.current = initialParticlesData.map(p => ({
            x: p.x, y: p.y, vx: p.vx, vy: p.vy,
            size: p.size, rotation: p.rotation, rotationSpeed: p.rotationSpeed
        }));

        // Inicializa o array de refs para os elementos DOM
        iconElementsRef.current = Array(initialParticlesData.length).fill(null);

        function limitVelocity(p: ParticlePhysics): void {
            const speedSquared = p.vx ** 2 + p.vy ** 2; // Trabalha com quadrados primeiro
            const maxSpeedSquared = MAX_SPEED ** 2;
            if (speedSquared > maxSpeedSquared) {
                const speed = Math.sqrt(speedSquared); // Calcula sqrt apenas se necessário
                p.vx = (p.vx / speed) * MAX_SPEED;
                p.vy = (p.vy / speed) * MAX_SPEED;
            }
        }

        function detectAndResolveCollisions(ps: ParticlePhysics[]): void {
            for (let i = 0; i < ps.length; i++) {
                for (let j = i + 1; j < ps.length; j++) {
                    const a = ps[i];
                    const b = ps[j];

                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const distSquared = dx * dx + dy * dy; // Comparar quadrados primeiro

                    const minDist = (a.size + b.size) / 2;
                    const minDistSquared = minDist * minDist;

                    if (distSquared < minDistSquared && distSquared > 0) { // distSquared > 0 para evitar problemas com partículas sobrepostas
                        const dist = Math.sqrt(distSquared); // Calcula sqrt apenas quando há colisão
                        const overlap = minDist - dist;
                        const angle = Math.atan2(dy, dx);

                        const moveX = Math.cos(angle) * overlap / 2;
                        const moveY = Math.sin(angle) * overlap / 2;

                        a.x += moveX;
                        a.y += moveY;
                        b.x -= moveX;
                        b.y -= moveY;

                        // Troca de velocidades (simplificado para conservação de momento aproximada)
                        [a.vx, b.vx] = [b.vx, a.vx];
                        [a.vy, b.vy] = [b.vy, a.vy];
                    }
                }
            }
        }

        let animationFrameId: number;
        function update(): void {
            const currentPhysicsParticles = physicsParticlesRef.current;
            if (!currentPhysicsParticles || currentPhysicsParticles.length === 0) {
                animationFrameId = requestAnimationFrame(update); // Continuar tentando caso as partículas apareçam depois
                return;
            }

            detectAndResolveCollisions(currentPhysicsParticles);

            currentPhysicsParticles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;
                p.rotation += p.rotationSpeed;

                if (p.x < 0 || p.x + p.size > width) {
                    p.vx *= -1;
                    if (p.x < 0) p.x = 0;
                    else if (p.x + p.size > width) p.x = width - p.size;
                }
                if (p.y < 0 || p.y + p.size > height) {
                    p.vy *= -1;
                    if (p.y < 0) p.y = 0;
                    else if (p.y + p.size > height) p.y = height - p.size;
                }

                limitVelocity(p);

                const el = iconElementsRef.current[i];
                if (el) {
                    // Arredondar os valores pode, em alguns casos, ajudar, mas também pode causar "jitter"
                    // Por ora, mantemos os valores como estão para suavidade.
                    el.style.transform = `translate(${p.x}px, ${p.y}px) rotate(${p.rotation}deg)`;
                }
            });

            animationFrameId = requestAnimationFrame(update);
        }

        update();

        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, []); // Dependência vazia para rodar apenas na montagem e desmontagem

    return (
        <div
            ref={containerRef}
            className='absolute inset-0 w-full h-full -z-10 bg-cls-bg mt-[99vh]'
            style={{ overflow: 'hidden', position: 'absolute' }}
        >
            {renderableParticles.map((particle, i) => (
                <i
                    key={particle.id} // Usar ID único para a key
                    ref={el => { iconElementsRef.current[i] = el; }}
                    className={`${particle.iconClass} text-gray-400 pointer-events-none`}
                    style={{
                        fontSize: `${particle.size}px`,
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        willChange: 'transform', // Ajuda o navegador a otimizar animações
                        opacity: 0.05,
                        userSelect: 'none',
                        // A transformação inicial é implicitamente definida pelos dados de partícula
                        // e o primeiro `update` vai posicioná-los.
                    }}
                />
            ))}
        </div>
    );
}