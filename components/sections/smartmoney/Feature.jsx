import Image from "next/image"
import ZigZag from "../../layout/Zigzag"

export default ({index, title, description, subtitle, img}) => 
  <ZigZag index={index} className="gap-4 py-16 items-center">
      <Image src={img} width={600} height={600}/>
      <div className="flex flex-col gap-2">
        <h2 className="subtitle">{title}</h2>
        <h3 className="title">
          {subtitle}
        </h3>
        <div className="h-0.5 bg-emerald-500 w-52 mb-8"></div>
        <p>
          {description}
        </p>  
      </div>
  </ZigZag>