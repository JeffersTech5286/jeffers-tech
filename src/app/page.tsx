import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Solutions from '@/components/sections/soluctions'
import Advantages from '@/components/sections/advantages'
import Contracting from '@/components/sections/contracting'
import Faq from '@/components/sections/faq'
import CTA from '@/components/sections/cta'

export default function Page() {
    return <main>
        <Hero/>
        <About/>
        <Solutions/>
        <Advantages/>
        <Contracting/>
        <Faq/>
        <CTA/>
    </main>
}