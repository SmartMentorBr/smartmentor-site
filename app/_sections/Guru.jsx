import SectionTitle from "./componentes/SectionTitle"

export default () => (
    <div className="flex flex-col items-center gap-8">
        <img src="/guru.svg" className="w-40" alt="" />
        <SectionTitle
            title="Conheça o Guru"
        />
        <h3 className="text-center text-xl">
            O guru é o assistente que estará ao seu lado durante toda a sua jornada, pronto pra auxiliar-lo em cada passo
        </h3>
    </div>
)