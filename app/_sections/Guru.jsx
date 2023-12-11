import SectionTitle from "./componentes/SectionTitle"
import Image from "next/image"

export default () => (
    <section id="guru" className="py-32">
        <div className="flex flex-col items-center gap-4">
            <Image src="/guru.svg" className="w-40" alt="" width={200} height={200}/>
            <SectionTitle
                title="Conheça o Guru"
            />
            <h3 className="text-center text-xl">
                O guru é o assistente que estará ao seu lado durante toda a sua jornada, pronto pra auxiliar-lo em cada passo
            </h3>
        </div>
    </section>
)