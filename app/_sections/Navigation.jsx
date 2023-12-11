import Image from "next/image"
import Button from "./componentes/Button"
import CTAButton from "./componentes/buttons/CTAButton"

export default () => (
    <nav className="flex justify-between items-center py-2 px-4 bg-white max-w-screen-2xl m-auto mt-4 shadow-md rounded-lg mb-8">
        <div>
            <Image src="/logo-smart.svg" alt="" width={160} height={120}/>
        </div>        
        <div className="flex items-center gap-2">
            <div className="hidden lg:flex items-center gap-4">
            <ul className="flex gap-4 whitespace-nowrap flex-wrap">
                <li>
                    <a href="#">Benefícios</a>
                </li>
                <li>
                    <a href="#">Como funciona</a>
                </li>
                <li>
                    <a href="#">Depoimentos</a>
                </li>
                <li>
                    <a href="#">Mentoria</a>
                </li>
                <li>
                    <a href="#">Smartmoney</a>
                </li>
                <li>
                    <a href="#">Contato</a>
                </li>
            </ul>
            <CTAButton/>
            </div>
            <div className="flex flex-col gap-1 lg:hidden">
                <div className="w-6 h-1 bg-slate-900"></div>
                <div className="w-6 h-1 bg-slate-900"></div>
                <div className="w-6 h-1 bg-slate-900"></div>
            </div>
        </div>
    </nav>
)