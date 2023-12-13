import Image from "next/image"

export default ({img, name, content, role}) => (
    <div className="bg-white rounded-lg p-2 flex gap-2">
        <Image className="w-32 h-32 rounded-full" src={"/images/testimonials/" + img} alt="" width={240} height={240}/>
        <div className="flex flex-col gap-1 justify-between"> 
            <p className="text-gray italic">
                " {content} "
            </p>
            <div>
                <h4 className="text-emerald-400 font-bold">{name}</h4>
                <h5 className="font-bold">{role}</h5>
            </div>
        </div>
    </div>
)