import useData from "@/hooks/useData"
import Testimonial from "./Testimonial"
import Section from "../Section"

export default async () => {
    const { testimonials } = await useData()

    return (<Section
        id="depoimentos"
        title="Depoimentos"
        subtitle="Veja o que os clientes falam sobre nós"
    >
        <div className="flex gap-4 flex-col lg:flex-row">
            {testimonials.map(testimonial => 
                <Testimonial
                    img={testimonial.img}
                    name={testimonial.name}
                    role={testimonial.role}
                    content={testimonial.content}
                />)}
        </div>
    </Section>)
}