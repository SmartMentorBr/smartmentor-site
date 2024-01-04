import Image from "next/image"

export default ({img ,name, role, tags, description}) => (
    <div className="bg-white flex flex-col items-center p-8 gap-1 rounded-xl">
        <Image className="w-32 h-32 rounded-full" src={"/images/mentors/" + img}  alt="" width={260} height={260} /> 
        <div className="flex flex-col gap-0.5 text-center">
            <h4 className="text-lg font-bold">{name}</h4>
            <h5 className="text-lg">{role}</h5>
        </div>
        <div className="flex gap-1 justify-center flex-wrap">
           {
            tags.map(title => <span className="px-1 py-0.5 bg-emerald-400 rounded-3xl text-white font-semibold">
                {title}
            </span>)    
           } 
        </div>
        <p className="max-w-xs text-gray">
            {description}
        </p>
    </div>
)