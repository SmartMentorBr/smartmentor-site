import Image from "next/image"

export default () => {
    return (<div>  
        <p className="font-bold">
          Nossos parceiros
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3">
          <Image src="/agridecision.webp" alt="" width={600} height={300} />
          <Image src="/monyu.webp" alt="" width={600} height={300} />
        </div>
      </div>
    )
}