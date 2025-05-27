'use client'

import {List, ListItemIcon} from '@/components/widgets/List.tsx'
import {type IconName, DynamicIcon} from 'lucide-react/dynamic'
import {TextGradient} from '@/components/utils.tsx'
import {GradientButton} from '@/components/widgets/GradientButton.tsx'

interface PlanCardProps {
    icon: IconName // lucide
    title: string
    price: number
    description: string
    benefits: string[]
    buttonText: string
    buttonTargetURL: string
}


export default function PlanCard(props: PlanCardProps) {
    return <article className='OutlinedCardBase w-90 bg-[rgb(150,150,170,.15)] flex flex-col'>
        <h2 className='text-3xl font-semibold'>
            <DynamicIcon name={props.icon} size={30} className='inline mr-3'/>
            {props.title}
        </h2>
        <p className='text-4xl font-extrabold my-5'>
            <TextGradient>R$ {props.price}</TextGradient> <span className='text-xl font-normal opacity-75'>/mês</span>
        </p>
        <p className='mb-5 mt-5 opacity-75 border-[rgba(255,255,255,.2)] border-b-1 pb-5'>{props.description}</p>
        <List>
            {props.benefits.map((item, index) => {
                return <ListItemIcon
                    className='text-sm border-[rgba(255,255,255,.05)] border-b-1 pb-3'
                    key={index}
                    text={item}
                />
            })}
        </List>
        <div className='block flex-1'></div>
        <GradientButton
            href={props.buttonTargetURL}
            className='w-full my-3'
            text={props.buttonText}
        />
    </article>
}