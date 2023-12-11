import Feature from "./componentes/Feature"

export default ({features}) => (
    <section id="features">
        {features.map((feature, index) => <Feature
            index={index}
            title={feature.title} 
            content={feature.content} 
            subtitle={feature.subtitle} 
            img={feature.img}    
        />)}
   </section>
)