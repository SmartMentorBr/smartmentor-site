import useData from "@/hooks/useData"
import Container from "../../layout/Container"
import Table from "../../Table"
import Section from "../Section"

export default async () => {
  const { benchMarking } = await useData()
  const head = benchMarking.head
  const items = benchMarking.items

  return (
    <Section id="diferenciais">
      <div className="p-8">
        <h2 className="title text-center pb-2">Confira os nossos diferenciais</h2>
      </div>
      <div className="flex justify-center">
        <Table head={head} items={items}/>
      </div>
    </Section>
  )
}
