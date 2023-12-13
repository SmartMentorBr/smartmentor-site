import { CallToAction } from "../../Buttons"
import Image from "next/image"
import Partners from "./Partners"

export default () => <div className="flex flex-col gap-8 p-1 text-center sm:text-left">
<h1 className="hero-title">Transforme sua idéia, Valide o seu negócio e Atraia investimento</h1>
  <p>
    Listamos as necessidades do seu negócio, gerando um relatório personalizado, que apresenta o nível atual dele, desde a fase conceitual até a validação, tudo isso com o acompanhamento constante de mentores especializados. Quanto mais validação seu negócio receber, mais chances de atrair financiamentos em nossa plataforma de educação empreendedora
  </p>
  <CallToAction/>
  <Partners/>
</div>      
