import type {ReactNode} from 'react'


interface ILinkButton {
    text?: string
    href?: string
}


export function LinkButton({text, href}: ILinkButton): ReactNode {
    return <a className='Button MediamTransition GradientBase' href={href}>
        {text}
    </a>
}