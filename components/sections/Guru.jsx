import Image from "next/image"
import Section from "./Section"

export default () => <Section>
    <div className="flex flex-col items-center gap-1">
        <Image src="/guru.svg" className="w-40" alt="" width={200} height={200}/>
        <h2 className="title">Conheça o GURU</h2>
        <h3 className="text-center text-lg max-w-2xl">
            O guru é o assistente que estará ao seu lado durante toda a sua jornada, pronto pra auxiliar-lo em cada passo
        </h3>
    </div>
</Section>





(
    <section id="guru" className="py-32">
        <div className="flex flex-col items-center gap-1">
            <Image src="/guru.svg" className="w-40" alt="" width={200} height={200}/>
            <h2 className="title">Conheça o GURU</h2>
            <h3 className="text-center text-lg max-w-2xl">
                O guru é o assistente que estará ao seu lado durante toda a sua jornada, pronto pra auxiliar-lo em cada passo
            </h3>
        </div>
    </section>
)