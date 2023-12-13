import { CallToAction } from "@/components/Buttons"

export default ({links}) => (
        <div className="flex flex-col items-center justify-between gap-2 2xl:flex-row">
            <ul className="text-center items-center text-lg gap-1 flex flex-col 2xl:text-base 2xl:flex-row">
                {links.map(link => {
                    const [title, href] = Object.entries(link)[0]
                    return (
                        <li>
                            <a 
                            className="text-gray hover:text-primary transition font-semibold" 
                            href={href}>
                                {title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <CallToAction/>
        </div>
)