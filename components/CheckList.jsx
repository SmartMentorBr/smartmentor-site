import Image from "next/image"

export default ({items}) => (
    <ul>
        {
            items.map((item) => <li className="flex items-center gap-2">
                <Image className="w-12" src="/check.svg" alt="" srcset="" width={30} height={30} />
                {item}
            </li>)
        }
    </ul>
)