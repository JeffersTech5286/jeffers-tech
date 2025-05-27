import {CircleCheckBig} from 'lucide-react'
import {ReactNode} from 'react'

interface ListItemIconProps {
    text: string
    className?: string
}

export function ListItemIcon(props: ListItemIconProps) {
    return <li className={props.className ? props.className : 'text-sm'}>
        <CircleCheckBig className='text-green-300 inline mr-2' size={15}/>
        {props.text}
    </li>
}


export function List({children}: {children: ReactNode}) {
    return <ul className='flex flex-col gap-3'>
        {children}
    </ul>
}