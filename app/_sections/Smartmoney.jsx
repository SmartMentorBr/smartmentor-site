import SecondaryButton from "./componentes/buttons/SecondaryButton"
import CheckList from "./componentes/CheckList"
import Image from "next/image"

export default () => (
    <div className="grid lg:grid-cols-2 gap-4 items-center">
        <Image src="/sample-img.svg" alt="" width={300} height={300}/>
        <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-6xl font-bold">Conheça a Smartmoney</h2>
            <p className="text-xl font-semibold lg:text-2xl">
                Com a Smartmoney você consegue descobrir empresas de capital fechado e monitorar as que voce ja investe. 
            </p>
            <CheckList items={[
                "Consulte de forma intuitiva as informações das empresas",
                "Gerencie o risco dos seus investimentos",
                "Ganho de autoridade e Credibilidade"
            ]}/>
            <SecondaryButton>
                Quero conhecer a Smartmoney
            </SecondaryButton>
        </div>
    </div>
)