import type {ReactNode} from 'react'
import {useMediaQuery} from 'react-responsive'

interface IHeader {
    scrolled: boolean
}


export default function Header({scrolled}: IHeader): ReactNode {
    const md = useMediaQuery({query: '(min-width: 48rem)'})

    return <header className={
        `SlowTransition fixed z-50 md:w-full ${
            md
                ? scrolled ? 'HeaderBackdrop py-5 rounded-b-2xl' : 'bg-transparent py-10'
                : 'HeaderBackdrop py-4 w-[96%] m-[2%] rounded-xl'
        }`
    }>
        <div className='WidthRestrict DefaultPaddingX'>
            <span>
                <img
                    src='/images/logo-gradient.svg'
                    alt='jefferstech-logo'
                    className={`SlowTransition ${
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