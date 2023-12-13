import Feature from "./Feature"
import Container from "../../layout/Container"
import useData from "@/hooks/useData"

export default async () => {
    const { features } = await useData()

    return (
        <section id="beneficios">
            <Container>
            {features.map((feature, index) => <Feature
                index={index}
                title={feature.title} 
                description={feature.description} 
                subtitle={feature.subtitle} 
                img={"images/features/"+ feature.img}
            />)}
            </Container>
       </section>
    )
}

