import Heading from "@/components/sections/Heading"
import HowItWorks from "@/components/sections/howItWorks/HowItWorks"
import Mentors from "@/components/sections/mentors/Mentors"
import Smartmoney from "@/components/sections/Smartmoney"

export default () => (
    <main>
        <Heading/>
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
        <Mentors/>
        <Smartmoney/>
    </main>
)