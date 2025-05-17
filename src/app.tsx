import {type ReactNode} from 'react'
import {useRef} from 'react'
import {useScroll} from './core/hooks.ts'
import Header from './components/Header.tsx'
import {LinkButton} from './components/Button.tsx'


export default function App(): ReactNode {
    const heroRef = useRef<HTMLElement>(null)
    const scrolled = useScroll(heroRef, .99)

    return <div>
        <Header scrolled={scrolled}/>
        <main className='w-full'>
            <section ref={heroRef} className='h-screen relative'>
                <img
                    src={`/images/bg-hero-section.jpg`}
                    alt='background-image'
                    className='object-cover w-screen h-screen'
                />
                <div className='absolute inset-0 w-full h-full backdrop-blur-[0.09rem] HeroBgGradient'>
                    <div className='WidthRestrict flex justify-center flex-col text-white DefaultPaddingX gap-10 h-full'>
                        <h1 className='text-5xl font-semibold md:text-7xl md:max-w-2xl'>
                            Soluções digitais acessíveis <span className='GradientBase TextGradient'>para seu negócio</span>
                        </h1>
                        <p className='max-w-2xl text-xl md:text-3xl font-extralight'>
                            Desenvolvemos soluções e softwares sob medida para acelerar o crescimento da sua empresa.
                        </p>
                        <LinkButton text='Vamos conversar sobre sua ideia?'/>
                    </div>
                </div>
            </section>
            <section className='bg-cls-bg h-screen'>

            </section>
        </main>
    </div>
}
