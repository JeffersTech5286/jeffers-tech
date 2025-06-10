import React from 'react'
import clsx from 'clsx'

type ButtonProps = {
    children: React.ReactNode
    variant?: 'filled' | 'outline'
    onClick?: () => void
    className?: string
}

export function Button({children, variant='filled', onClick, className=''}: ButtonProps) {
    const baseStyles = 'px-8 py-4 font-semibold rounded-full transition-all duration-300'
    const filledStyles = 'gradient-primary text-white shadow-lg hover:shadow-xl transform hover:scale-105'
    const outlineStyles = 'border gradient-text border-[var(--cls-gradient-via)] bg-transparent shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-[var(--cls-gradient-via)] hover:text-white'


    const combinedClassName = clsx(
        baseStyles,
        variant === 'filled' ? filledStyles : outlineStyles,
        className
    )

    return <button onClick={onClick} className={combinedClassName}>
        {children}
    </button>
}

