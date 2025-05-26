import NextImage from 'next/image'


interface ImageProps {
    src: string
    alt: string
    className?: string
    objectFit?: 'contain' | 'cover'
    size: string
}


export default function Image({src, alt, className, objectFit='cover', size}: ImageProps) {
    return <figure className={`relative overflow-hidden ${className}`}>
        <NextImage
            src={src}
            fill
            alt={alt}
            sizes={size}
            style={{objectFit: objectFit}}
        />
    </figure>
}