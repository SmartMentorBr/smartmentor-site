'use server'

import HowItWorks from "../_sections/HowItWorks";
import Contact from "../_sections/Contact";
import Image from "next/image";

export default async () => (
    <div>
    <header className="flex justify-center items-center">
        <div className="flex flex-col gap-8">
            <h1 className="text-6xl max-w-2xl">Acompanhe dados de empresas em tempo real</h1>
            <h2 className="text-xl max-w-2xl">
                Ajude empresas em sua jornada de validação de 
                mercado transmitindo conhecimento.
            </h2>
        </div>
        <div className="order-first">
            <Image src="/sample-img.svg" alt="" width={600} height={300}/>
        </div>
    </header>
    <main>
        <HowItWorks items={[
            {
                title: "Diagnóstico",
                content: "Faça um diagnostico de 3 passos pra saber o nivel de maturidade da sua empresa"
            },
            {
                title: "Diagnóstico",
                content: "Faça um diagnostico de 3 passos pra saber o nivel de maturidade da sua empresa"
            },
            {
                title: "Diagnóstico",
                content: "Faça um diagnostico de 3 passos pra saber o nivel de maturidade da sua empresa"
            },
        ]}/>
        <Contact/>
    </main>
    </div>
)