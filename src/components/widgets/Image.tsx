import NextImage from 'next/image'


interface ImageProps {
    src: string
    alt: string
    className?: string
    objectFit?: 'contain' | 'cover'
}


export default function Image({src, alt, className, objectFit='cover'}: ImageProps) {
    return <figure className={`relative overflow-hidden ${className}`}>
        <NextImage
            src={src}
            fill
            objectFit={objectFit}
            alt={alt}
        />
    </figure>
}