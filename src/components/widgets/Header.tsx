'use client'

import Image from '@/components/widgets/Image.tsx'

interface IHeader {
    scrolled: boolean;
}

export default function Header({ scrolled }: IHeader) {
    return (
        <header className={
            `SlowTransition fixed z-50 w-full 
            ${scrolled
                ? 'HeaderBackdrop py-5 md:rounded-b-2xl'
                : 'bg-transparent py-10'
            }
            max-md:HeaderBackdrop max-md:py-4 max-md:w-[96%] max-md:m-[2%] max-md:rounded-xl` // Overrides para telas menores que md
        }>
            <div className='WidthRestrict DefaultPaddingX'>
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
                <nav></nav>
            </div>
        </header>
    )
}