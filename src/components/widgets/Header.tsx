'use client'

import Image from '@/components/widgets/Image.tsx'
import Link from '@/components/widgets/Link.tsx'

interface IHeader {
    scrolled: boolean;
}

export default function Header({scrolled}: IHeader) {
    return <header className={`
        SlowTransition fixed z-50 w-full 
        ${scrolled
            ? 'HeaderBackdrop py-5 md:rounded-b-2xl'
            : 'bg-transparent py-10'
        }
        max-md:HeaderBackdrop max-md:py-4 max-md:w-[96%] max-md:m-[2%] max-md:rounded-xl
    `}>
        <div className='WidthRestrict DefaultPaddingX flex justify-between items-center'>
            <span>
                <Image
                    src='/images/logo-gradient.svg'
                    alt='Logo'
                    className={`SlowTransition w-30 h-6 ${scrolled
                        ? 'md:w-40 md:h-8'
                        : 'md:w-60 md:h-11'
                    }`}
                    size='590px, 120px'
                />
            </span>
            <nav className='flex gap-4'>
                <Link>Pedir projeto</Link>
                <Link>Planos</Link>
                <Link>Modelos de contrato</Link>
                <Link>Soluções</Link>
                <Link>FAQ</Link>
            </nav>
        </div>
    </header>
}