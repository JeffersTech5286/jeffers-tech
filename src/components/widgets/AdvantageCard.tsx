import {DynamicIcon, IconName} from 'lucide-react/dynamic'


export default function AdvantageCard(props: {icon: IconName, title: string, description: string}) {
    return <div className='
        flex flex-col items-center text-center gap-3 w-70 border-b-1 border-[rgba(255,255,255,.30)] pb-6 rounded-xs
        md:w-50 md:gap-5 md:border-none
    '>
        <DynamicIcon className='text-cls-fg opacity-75 box-content' size={24} name={props.icon}/>
        <h3 className='text-xl'>
            {props.title}
        </h3>
        <p className='text-sm opacity-75'>
            {props.description}
        </p>
    </div>
}