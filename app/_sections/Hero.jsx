const link = "https://tally.so/r/mRMxGJ"

import CTAButton from "./componentes/buttons/CTAButton"
import Image from "next/image"

export default () => (
    <>
    <header className="grid lg:grid-cols-2 items-center">
      <div className="lg:order-last flex justify-center">
        <Image src="/mentores.svg" alt="" width="600" height="600"/>
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-bold">Transforme sua idéia, Valide o seu negócio e Atraia investimento</h1>
        <p>
        Listamos as necessidades do seu negócio, gerando um relatório personalizado, que apresenta o nível atual dele, desde a fase conceitual até a validação, tudo isso com o acompanhamento constante de mentores especializados. Quanto mais validação seu negócio receber, mais chances de atrair financiamentos em nossa plataforma de educação empreendedora
        </p>
        <CTAButton/>
        <div>
          <p className="font-bold">
            Nossos parceiros
          </p>
          <div className="grid grid-cols-3">
            <Image src="/agridecision.webp" alt="" width={600} height={300} />
            <Image src="/monyu.webp" alt="" width={600} height={300} />
          </div>
        </div>
      </div>
    </header>
  </>
)