interface ILinkButton {
    text?: string
    href?: string
    className?: string
    onClick?: () => void
}


export function GradientButton({text, href, className, onClick}: ILinkButton) {
    const classNames = `Button MediamTransition GradientBase ${className}`

    if (href) {
        return <a className={classNames} href={href}>
            {text}
        </a>
    }
    return <button className={classNames} onClick={function() {if (onClick) onClick()}}>
        {text}
    </button>
}