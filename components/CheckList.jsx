import Image from "next/image"
import Check from "./icons/Check"

export default ({items}) => (
    <ul className="flex flex-col gap-1">
        {
            items.map((item) => <li className="flex items-center gap-2">
                <Check width={30} height={30} color="#1DE4B4"/>
                {item}
            </li>)
        }
    </ul>
)