import ComoFunciona from "../_sections/ComoFunciona";
import Contato from "../_sections/Contato";

export default () => (
    <div>
    <header>
        <h1>Acompanhe dados de empresas em tempo real</h1>
    </header>
    <main>
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
        <Contato/>
    </main>
    </div>
)