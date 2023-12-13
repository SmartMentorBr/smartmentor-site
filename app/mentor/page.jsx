import Heading from "./_sections/Heading"
import HowItWorks from "../_sections/HowItWorks"
import Mentors from "../_sections/Mentors"
import Smartmoney from "../_sections/Smartmoney"

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