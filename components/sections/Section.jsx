import Container from "../layout/Container"
import SectionTitle from "./SectionTitle"

const classList = "min-h-screen flex flex-col items-center"

export default ({children, className, id, title, subtitle}) => (
    <section className={classList +  " " + className} id={id}>
        <Container>
            {title && <SectionTitle
                title={title}
                subtitle={subtitle}
            />}            
            {children}
        </Container>
    </section>
)