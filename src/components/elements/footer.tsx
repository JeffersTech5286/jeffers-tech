'use client'

import Link from "next/link"

import Facebook from 'lucide-react/dist/esm/icons/facebook'
import Instagram from 'lucide-react/dist/esm/icons/instagram'
import Linkedin from 'lucide-react/dist/esm/icons/linkedin'
import Mail from 'lucide-react/dist/esm/icons/mail'
import Phone from 'lucide-react/dist/esm/icons/phone'
import Twitter from 'lucide-react/dist/esm/icons/twitter'
import Github from 'lucide-react/dist/esm/icons/github'

import siteConfig from '@/siteconfig'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)

        if (element) element.scrollIntoView({ behavior: 'smooth' })
    }

    // noinspection HtmlUnknownAnchorTarget
    return (
        <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-4">JeffersTech</h3>
                        <p className="mb-4 text-sm md:text-base">
                            Soluções tecnológicas inovadoras para impulsionar o crescimento do seu negócio.
                        </p>
                        <div className="flex space-x-4">
                            <Link href={siteConfig.social.facebook} aria-label="Facebook" className="hover:text-cls-gradient-via transition-colors" target="_blank" rel="noopener noreferrer">
                                <Facebook size={18} />
                            </Link>
                            <Link href={siteConfig.social.instagram} aria-label="Instagram" className="hover:text-cls-gradient-via transition-colors" target="_blank" rel="noopener noreferrer">
                                <Instagram size={18} />
                            </Link>
                            <Link href={siteConfig.social.twitter} aria-label="Twitter" className="hover:text-cls-gradient-via transition-colors" target="_blank" rel="noopener noreferrer">
                                <Twitter size={18} />
                            </Link>
                            <Link href={siteConfig.social.linkedin} aria-label="LinkedIn" className="hover:text-cls-gradient-via transition-colors" target="_blank" rel="noopener noreferrer">
                                <Linkedin size={18} />
                            </Link>
                            <Link href={siteConfig.social.github} aria-label="LinkedIn" className="hover:text-cls-gradient-via transition-colors" target="_blank" rel="noopener noreferrer">
                                <Github size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-md md:text-lg font-semibold text-white mb-3 md:mb-4">Links Rápidos</h3>
                        <ul className="space-y-1 md:space-y-2 text-sm md:text-base">
                            {['Início', 'Quem Somos', 'Soluções', 'Vantagens', 'Contratação', 'FAQ'].map((item, index) => (
                                <li key={index}>
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(index === 0 ? 'hero' : item.toLowerCase().replace(' ', '-'))}
                                        className="hover:text-cls-gradient-via transition-colors"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="sm:col-span-2 md:col-span-1">
                        <h3 className="text-md md:text-lg font-semibold text-white mb-3 md:mb-4">Serviços</h3>
                        <ul className="grid grid-cols-2 sm:grid-cols-1 gap-1 text-sm md:text-base">
                            <li>
                                <Link href="#soluções" className="hover:text-cls-gradient-via transition-colors">
                                    Sistemas Web
                                </Link>
                            </li>
                            <li>
                                <Link href="#soluções" className="hover:text-cls-gradient-via transition-colors">
                                    Bots e Automação
                                </Link>
                            </li>
                            <li>
                                <Link href="#soluções" className="hover:text-cls-gradient-via transition-colors">
                                    Aplicativos Mobile
                                </Link>
                            </li>
                            <li>
                                <Link href="#soluções" className="hover:text-cls-gradient-via transition-colors">
                                    Integrações
                                </Link>
                            </li>
                            <li>
                                <Link href="#soluções" className="hover:text-cls-gradient-via transition-colors">
                                    SEO e Marketing
                                </Link>
                            </li>
                            <li>
                                <Link href="#soluções" className="hover:text-cls-gradient-via transition-colors">
                                    Infraestrutura
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-md md:text-lg font-semibold text-white mb-3 md:mb-4">Contato</h3>
                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base">
                            {/*<li className="flex items-start">*/}
                            {/*    <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />*/}
                            {/*    <span>Av. Paulista, 1000, São Paulo - SP</span>*/}
                            {/*</li>*/}
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2 flex-shrink-0" />
                                <span>{siteConfig.contact.phoneFormated}</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2 flex-shrink-0" />
                                <span>{siteConfig.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm">
                    <p>&copy; {currentYear} JeffersTech. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
