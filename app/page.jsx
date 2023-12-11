import Image from 'next/image'
import styles from './page.module.css'

/* sections import */
import Hero from './_sections/Hero'
import Features from './_sections/Features'
import ComoFunciona from './_sections/ComoFunciona'
import Diferenciais from './_sections/Diferenciais'
import Depoimentos from './_sections/Depoimentos'
import Mentores from './_sections/Mentores'
import Guru from './_sections/Guru'
import SejaMentor from './_sections/SejaMentor'
import Smartmoney from './_sections/Smartmoney'

const features = [
  {
    img: '/sample-img.svg',
    title: 'Diagnóstico',
    subtitle: 'Tenha a orientação certa para o seu momento',
    content: "A partir da análise das suas informações vamos identificar suas necessidades e direcionar para o mentor que irá te auxiliar a atingir o próximo nível do seu negócio."
  },
  {
    img: '/sample-img.svg',
    title: 'Mentoria',
    subtitle: 'Mentoria especializada para o seu negócio',
    content: "Receba recomendações de mentores selecionados que têm experiência real de mercado e passam por uma avaliação contínua pra garantir a excelência das mentorias."
  },
  {
    img: '/sample-img.svg',
    title: 'Acompanhamento',
    subtitle: 'Saiba o que precisa pra ir do ponto A ao B',
    content: "Receba recomendações de melhorias para as necessidades mapeadas do seu estágio"
  },
]

const comoFunciona = [
  {
      title: "Diagnóstico",
      content: "Faça um diagnostico de 3 passos pra saber o nivel de maturidade da sua empresa"
  },
  {
      title: "Recomendação",
      content: "Faça um diagnostico de 3 passos pra saber o nivel de maturidade da sua empresa"
  },
  {
      title: "Orientação",
      content: "Faça um diagnostico de 3 passos pra saber o nivel de maturidade da sua empresa"
  },
]

export default function Home() {
  return (
    <div className='lg:w-8/12 w-11/12 m-auto'>
      <Hero/>
      <main>
        <Features features={features}/>
        <ComoFunciona items={comoFunciona}/>
        <Diferenciais/>
        <Depoimentos/>
        <Mentores/>
        <SejaMentor/>
        <Guru/>
        <Smartmoney/>
      </main>
    </div>
  )
}
