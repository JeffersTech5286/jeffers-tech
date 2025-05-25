import type {ReactNode} from 'react'

interface ITextGradient {
    children?: ReactNode
}

export function TextGradient({children}: ITextGradient): ReactNode {
    return <span className='GradientBase TextGradient'>{children}</span>
}