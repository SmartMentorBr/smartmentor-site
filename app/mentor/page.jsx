import Heading from "./sections/Heading"
import ComoFunciona from "../_sections/ComoFunciona"
import Mentores from "../_sections/Mentores"
import Smartmoney from "../_sections/Smartmoney"

export default () => (
    <main>
        <Heading/>
        <ComoFunciona items={[
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
        <Mentores/>
        <Smartmoney/>
    </main>
)