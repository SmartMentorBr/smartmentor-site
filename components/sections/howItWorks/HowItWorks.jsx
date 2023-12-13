import Section from "../Section"
import useData from "@/hooks/useData"
import Item from "./Topic"

export default async () => {

  const {howItWorks} = await useData()
  const items = await howItWorks

  return (
    <Section id="como-funciona" title="Como funciona" subtitle="Conheça a nossa metodologia">
        <div>
          {items.map((item, index) => 
            <Item
              title={item.title}
              content={item.content}
              index={index}
              lottie={item.lottie}
          />)}
        </div>
    </Section>
  )
}