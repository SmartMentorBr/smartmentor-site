import { CallToAction } from "../../Buttons"
import Image from "next/image"

export default () => <div className="flex flex-col gap-8">
<h1 className="hero-title">Transforme sua idéia, Valide o seu negócio e Atraia investimento</h1>
  <p>
    Listamos as necessidades do seu negócio, gerando um relatório personalizado, que apresenta o nível atual dele, desde a fase conceitual até a validação, tudo isso com o acompanhamento constante de mentores especializados. Quanto mais validação seu negócio receber, mais chances de atrair financiamentos em nossa plataforma de educação empreendedora
  </p>
  <CallToAction/>
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
