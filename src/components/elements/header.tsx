'use client'

import {useState, useEffect} from 'react'

import Image from '@/components/ui/image'

import X from 'lucide-react/dist/esm/icons/x'
import AlignJustify from 'lucide-react/dist/esm/icons/align-justify'


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {setIsScrolled(window.scrollY > 50)}
        
        window.addEventListener('scroll', handleScroll)
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMenuOpen(false)
        }
    }

    return (
        <header className={`
            fixed top-0 w-full z-50 transition-all duration-300 
            ${isScrolled || isMenuOpen
                ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' 
                : 'bg-transparent'
        }`}>
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold gradient-text">
                        <Image
                            src='/images/logo-gradient.svg'
                            alt='Logo'
                            className={'w-40 h-8'}
                            size='590px, 120px'
                        />
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {['Início', 'Quem Somos', 'Soluções', 'Vantagens', 'Contratação', 'FAQ'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace(' ', '-'))}
                                className="text-gray-300 hover:text-[var(--cls-gradient-via)] transition-colors duration-200 font-medium"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    <button
                        className="md:hidden text-gray-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X/> : <AlignJustify/>}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
                        {['Início', 'Quem Somos', 'Soluções', 'Vantagens', 'Contratação', 'FAQ'].map((item, index) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace(' ', '-'))}
                                className="block w-full text-left py-2 text-gray-300 hover:text-[var(--cls-gradient-via)] transition-colors duration-200"
                            >
                                {item}
                            </button>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    )
}
