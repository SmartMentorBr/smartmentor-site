import Depoimento from "./componentes/Depoimento"
import SectionTitle from "./componentes/SectionTitle"

const depoimentos = [
    {
        img: '/foto.webp',
        name: 'Fabrizio Gambarini',
        role: 'Founder Agridecision',
        content: "A Smartmentor guiando junto aos seus mentores, está sendo um parceiro essencial pra o nosso desenvolvimento e validação de negócio no Brasil"
    },
    {
        img: '/foto.webp',
        name: 'Matheus Vane',
        role: 'Médico Anestesiologista',
        content: "A Smartmentor me possibilitou perceber de forma segura e prática como colocar um conteito viável no mercado de anestesia, desenvolvendo autonomia nas tecnologias"
    },
]

export default () => (
    <section id="depoimentos">
        <SectionTitle
            title="Depoimentos"
            subtitle="Veja o que os clientes falam sobre nós"
        />
        <div className="flex gap-4 flex-col lg:flex-row">
            {depoimentos.map(depoimento => 
            <Depoimento
                img={depoimento.img}
                name={depoimento.name}
                role={depoimento.role}
                content={depoimento.content}
            />)}
        </div>
   </section>

)