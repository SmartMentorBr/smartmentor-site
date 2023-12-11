import Mentor from "./componentes/Mentor"
import SectionTitle from "./componentes/SectionTitle"

const mentores = [
    {
        img: '/foto.webp',
        name: "Evandro Temperini",
        role: "Estrategista em Inovação",
        tags: [
            'Inovação',
            'Estratégia',
            'Produto'
        ],
        description: "Executivo, Empreendedor, Advisor e Mentor de Negócios.+25 anos de experiência com mais de 270 produtos digitais lançados. Certificado pelo MIT e na ISO 56.002. Top 5 Mentores Nacionais / 1º lugar no Whow! Innovation Awards em Saúde.Fundador da Impulse Inovação de Alto Impacto e Co-fundador da MonyU e da Tech Lemonade"
    },
    {
        img: '/foto.webp',
        name: "Leandro Mazzetto",
        role: "Branding e Comunicação",
        tags: [
            'Marketing',
            'Branding'
        ],
        description: "Executivo, Empreendedor, Advisor e Mentor de Negócios.+25 anos de experiência com mais de 270 produtos digitais lançados. Certificado pelo MIT e na ISO 56.002. Top 5 Mentores Nacionais / 1º lugar no Whow! Innovation Awards em Saúde.Fundador da Impulse Inovação de Alto Impacto e Co-fundador da MonyU e da Tech Lemonade"
    },
]

export default () => (
    <div>
        <SectionTitle
            title="Mentores"
            subtitle="Conheça alguns dos nossos melhores mentores"
        />
        <div className="flex justify-center gap-8 flex-col lg:flex-row">
            {mentores.map(mentor => <Mentor
                img={mentor.img}
                name={mentor.name}
                role={mentor.role}
                tags={mentor.tags}
                description={mentor.description}
            />)}            
        </div>
    </div>
)