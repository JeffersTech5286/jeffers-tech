interface ILinkButton {
    text?: string
    href?: string
    className?: string
    onClick?: () => void
}


export function GradientButton({text, href, className, onClick}: ILinkButton) {
    const classNames = `
        py-3 px-8 rounded-xl font-semibold cursor-pointer select-none text-cls-bg
        hover:brightness-110 hover:scale-[1.02]
        active:scale-95
        MediamTransition GradientBase ${className}
    `

    function handleClick() {if (onClick) onClick()}

    if (href) {
        return <a className={`block text-center ${classNames}`} href={href}>
            {text}
        </a>
    }

    return <button className={classNames} onClick={handleClick}>
        {text}
    </button>
}