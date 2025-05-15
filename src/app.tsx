import {type ReactNode} from 'react'
import {useRef, useState} from 'react'
import {useScroll} from './core/hooks.ts'
import {useMediaQuery} from 'react-responsive'


interface IHeader {
    scrolled: boolean
}


function Header({scrolled}: IHeader): ReactNode {
    const md = useMediaQuery({query: '(min-width: 48rem)'})

    return <header className={
            `TransitionBase fixed z-50 md:w-full ${
                md 
                    ? scrolled ? 'bg-cls-bg py-5' : 'bg-transparent py-10' 
                    : 'bg-[rgba(0,0,0,.5)] py-4 w-[96%] m-[2%] rounded-xl backdrop-blur-sm'
            }`
        }>
        <div className='WidthRestrict DefaultPaddingX'>
            <span>
                <img
                    src='/images/logo-gradient.svg'
                    alt='jefferstech-logo'
                    className={`TransitionBase ${
                        md 
                            ? scrolled ? 'md:w-40' : 'w-60' 
                            : 'w-30'
                    }`}
                />
            </span>
            <nav></nav>
        </div>
    </header>
}


export default function App(): ReactNode {
    const heroRef = useRef<HTMLElement>(null)
    const scrolled = useScroll(heroRef, .99)

    return <>
        <Header scrolled={scrolled}/>
        <main className='w-full'>
            <section ref={heroRef} className='h-screen relative'>
                <img
                    src={`/images/bg-hero-section.jpg`}
                    alt='background-image'
                    className='object-cover w-screen h-screen'
                />
                <div className='bg-[rgba(0,0,0,.7)] w-full h-full absolute left-0 top-0 backdrop-blur-[.09rem]'>
                    <div className='WidthRestrict flex justify-center flex-col text-white DefaultPaddingX gap-10 h-full'>
                        <h1 className='text-5xl font-semibold md:text-7xl md:max-w-2xl'>
                            Soluções digitais acessíveis <span className='GradientBase TextGradient'>para seu negócio</span>
                        </h1>
                        <p className='max-w-2xl text-xl md:text-3xl font-extralight'>
                            Desenvolvemos soluções e softwares sob medida para acelerar o crescimento da sua empresa.
                        </p>
                        <a className='py-4 px-6 rounded-xl font-semibold GradientBase w-max transition-all duration-200 ease-in-out hover:brightness-110 hover:scale-[1.02] active:scale-95 cursor-pointer select-none'>
                            Vamos conversar sobre sua ideia?
                        </a>
                    </div>
                </div>
            </section>
            <section className='h-screen'>

            </section>
        </main>
    </>
}
