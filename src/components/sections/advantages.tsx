import UserCheck from 'lucide-react/dist/esm/icons/user-check'
import SlidersHorizontal from 'lucide-react/dist/esm/icons/sliders-horizontal'
import Handshake from 'lucide-react/dist/esm/icons/handshake'
import Zap from 'lucide-react/dist/esm/icons/zap'
import Heart from 'lucide-react/dist/esm/icons/heart'

const advantages = [
    {
        title: 'Atendimento direto com quem faz',
        description:
            'Você conversa direto com o desenvolvedor, garantindo agilidade, clareza e mais eficiência no seu projeto.',
        icon: UserCheck,
        color: 'text-blue-500',
    },
    {
        title: 'Soluções sob medida',
        description:
            'Cada negócio é único, por isso entregamos sistemas personalizados que realmente resolvem seus desafios.',
        icon: SlidersHorizontal,
        color: 'text-green-500',
    },
    {
        title: 'Parceria próxima e transparente',
        description:
            'Trabalhamos lado a lado com você, explicando cada passo e mantendo total transparência durante o projeto.',
        icon: Handshake,
        color: 'text-yellow-400',
    },
    {
        title: 'Agilidade com qualidade',
        description:
            'Desenvolvemos rápido, mas sem abrir mão da robustez, escalabilidade e qualidade das entregas.',
        icon: Zap,
        color: 'text-purple-500',
    },
    {
        title: 'Comprometimento real',
        description:
            'Seu sucesso é nossa prioridade. Cuidamos de cada detalhe para superar suas expectativas.',
        icon: Heart,
        color: 'text-pink-500',
    },
]

const AdvantagesSection = () => {
    return (
        <section id="vantagens" className="py-16 bg-gray-pattern-plus-soft">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
                            Por que nos escolher?
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                            Diferenciais que fazem da JeffersTech a melhor opção para o seu projeto
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {advantages.map(({ title, description, icon: Icon, color }, index) => (
                            <div
                                key={index}
                                className="group p-6 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 border border-gray-600"
                            >
                                <div
                                    className={`text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 ${color}`}
                                >
                                    <Icon strokeWidth={1.7} />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-100">{title}</h3>
                                <p className="text-gray-300 leading-snug text-sm">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesSection;
