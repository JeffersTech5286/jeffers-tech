import type {ReactNode} from 'react'


interface LinkProps {
    className?: string
    href?: string
    children?: ReactNode
}


export default function Link(props: LinkProps) {
    return <a href={props.href} className={`underline cursor-pointer ${props.className}`}>
        {props.children}
    </a>
}
