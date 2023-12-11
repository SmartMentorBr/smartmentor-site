export default ({index, title, content, subtitle, img}) => (
    <div className="grid lg:grid-cols-2 items-center">
      <div className={index % 2 !== 0 ? "lg:order-last" : ""}>
        <img src={img} alt="" />
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-emerald-600 font-bold uppercase text-xl">{title}</h2>
          <h3 className="text-4xl font-bold">
            {subtitle}
          </h3>
          <div className="h-1 bg-emerald-500 w-52 mb-8"></div>
          <p>
            {content}
          </p>  
        </div>
      </div>
</div>
)