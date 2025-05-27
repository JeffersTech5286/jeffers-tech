import {GradientButton} from '@/components/widgets/GradientButton.tsx'

interface HiringModelCardProps {
    title: string
    subtitle: string
    description: string
    benefits: string[]
    buttonText: string
    buttonTargetURL: string
}

export default function HiringModelCard(props: HiringModelCardProps) {
    return <article className='OutlinedCardBase w-full md:w-95 text-left backdrop-blur-sm'>
        <h3 className='text-3xl font-semibold mb-4'>{props.title}</h3>
        <h4 className='opacity-45 mb-4'>{props.subtitle}</h4>
        <p className='opacity-80 mb-4'>{props.description}</p>
        <div>
            {props.benefits.map((item, index) => {
                return <div key={index} className='text-xs my-2 bg-[rgba(150,150,170,.15)] p-3 rounded-md text-left opacity-75'>
                    {item}
                </div>
            })}
        </div>
        <GradientButton
            href={props.buttonTargetURL}
            text={props.buttonText}
            className='w-full md:w-auto mt-6'
        />
    </article>
}