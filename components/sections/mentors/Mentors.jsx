import Mentor from "./Mentor"
import Section from "../Section"
import useData from "@/hooks/useData"

export default async () => {
    const { mentors } = await useData()
    return (
    <Section 
        id="mentores"
        title="Mentores"
        subtitle="Conheça alguns dos nossos melhores mentores"
    >
        <div className="flex justify-center gap-2 flex-col lg:flex-row">
            {mentors.map(mentor => <Mentor
                img={mentor.img}
                name={mentor.name}
                role={mentor.role}
                tags={mentor.tags}
                description={mentor.description}
            />)}            
        </div>
    </Section>
)
}
