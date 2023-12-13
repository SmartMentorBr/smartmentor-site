'use server'
import { CallToAction } from "@/components/Buttons"
import useData from "@/hooks/useData"

export default async () => {
    const { navigation } = await useData()
    const links = navigation

    return (
        <div className="flex flex-col items-center justify-between gap-2 2xl:flex-row pt-8 lg:pt-0">
            <ul className="text-center items-center gap-1 flex flex-col 2xl:flex-row">
                {links.map((link, index) => {
                    const [title, href] = Object.entries(link)[0]
                    return (
                        <li key={index}>
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
)}