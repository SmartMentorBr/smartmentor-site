import Image from "next/image"

export default ({img ,name, role, tags, description}) => (
    <div className="text-center bg-white flex flex-col items-center p-8 gap-4 rounded-xl">
        <Image className="w-32 h-32 rounded-full" src={img} alt="" width={60} height={60} /> 
        <div>
            <h4 className="text-2xl font-bold">{name}</h4>
            <h5 className="text-xl">{role}</h5>
        </div>
        <div className="flex gap-2 justify-center">
           {
            tags.map(title => <span className="px-4 py-1 bg-emerald-400 rounded-3xl text-white font-semibold">
                {title}
            </span>)
           } 
        </div>
        <p>
            {description}
        </p>
    </div>
)