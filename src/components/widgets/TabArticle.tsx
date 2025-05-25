import {useState, useEffect} from 'react'
import Image from '@/components/widgets/Image.tsx'
import {List, ListItemIcon} from '@/components/widgets/List.tsx'
import {GradientButton} from '@/components/widgets/GradientButton.tsx'
import SmoothTimeBar from '@/components/widgets/SmoothTimeBar.tsx'


interface TabpProps {
    thumbnail: {
        alt: string,
        src: string,
    }
    list?: string[]
    title: string
    description: string
    isVisile?: boolean
}

interface TabLinkProps {
    label: string
    onRelease?: () => void
    isActive: boolean
}

export interface TabSystemProps {
    tabs: {
        label: string
        title: string
        thumbnail: {
            alt: string,
            src: string,
        }
        list?: string[]
        description: string
    }[]
}

export function Tab({title, list, description, thumbnail, isVisile=true}: TabpProps) {

    return <div className={`
        SlowTransition
        ${isVisile ? 'flex' : 'hidden'}
        w-full flex-col-reverse gap-5 p-5 border-1 rounded-2xl border-[rgba(255,255,255,.2)]
        md:flex-row
    `}>
        <article className='flex flex-col gap-5'>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='opacity-75'>{description}</p>
            <List>
                {list?.map((item, index) => {
                    return <ListItemIcon key={index} text={item}/>
                })}
            </List>
            <GradientButton text='Saiba mais!' className='w-full md:max-w-60'/>
        </article>

        {/* representa um Image de "next/image" num <figure/> já com responsividade configurada*/}
        <Image
            alt={thumbnail.alt}
            src={thumbnail.src}
            className='max-w-screen w-full lg:flex-none lg:w-[40%] aspect-[16/8] rounded-2xl'
        />
    </div>
}


export function TabLink(props: TabLinkProps) {
    return <button
        onMouseUp={props?.onRelease}
        className={`
            rounded-sm p-1 SlowTransition text-sm md:text-base
            ${props.isActive ? 'bg-[rgba(0,0,0,.4)]' : 'opacity-65 underline'}
        `}
    >
        {props.label}
    </button>
}

export function TabSystem(props: TabSystemProps) {
    const DEFAULT_TIME = 5000
    const DEFAULT_PERSISTENT = 18000
    const [activeTab, setActiveTab] = useState(0)
    const [timer, setTimer] = useState(DEFAULT_TIME)

    useEffect(() => {
        if (props.tabs.length === 0) return;

        const interval = setInterval(() => {
            setActiveTab(prev => (prev + 1) % props.tabs.length)

            if (timer !== DEFAULT_TIME) setTimer(DEFAULT_TIME)
        }, timer)

        return () => clearInterval(interval)
    }, [props.tabs.length, timer])

    const handleTabClick = (index: number) => {
        setActiveTab(index)
        setTimer(DEFAULT_PERSISTENT)
    }

    return (
        <div>
            <div className='w-full rounded-lg overflow-hidden mb-5 bg-[rgb(255,255,255,.15)]'>
                <div className='
                w-full p-1 grid grid-cols-3 grid-rows-2
                md:grid-cols-6 md:grid-rows-1'
                >
                    {props.tabs.map((item, index) => {
                        return <TabLink
                            key={`${index}-${item.label.replace(' ', '-')}`}
                            label={item.label}
                            isActive={index === activeTab}
                            onRelease={() => handleTabClick(index)}
                        />
                    })}
                </div>
                <SmoothTimeBar className='opacity-50' time={timer} activeKey={activeTab} />
            </div>

            <div className='flex w-full'>
                {props.tabs.map((item, index) => {
                    return <Tab
                        key={index}
                        description={item.description}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        list={item?.list}
                        isVisile={index === activeTab}
                    />
                })}
            </div>
        </div>
    )
}