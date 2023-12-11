import Item from "./componentes/ComoFuncionaItem"

export default ({items}) => (
  <section id="como-funciona">
    <div className="flex gap-8 flex-col lg:flex-row p-2">
      {items.map((item, index) => 
        <Item
          title={item.title}
          content={item.content}
          index={index}
        />)}
    </div>
  </section>
)