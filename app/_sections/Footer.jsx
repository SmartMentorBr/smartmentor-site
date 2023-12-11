import Image from "next/image"

export default () => (
    <footer className="bg-slate-900 text-white">
        <div className="w-11/12 m-auto p-16 grid lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-4">
                <Image src="/logo-smart.svg" alt="" width={300} height={60}/>
                <div className="flex gap-2">
                    <Image src="/social.svg" alt="" width={60} height={60}/>
                    <Image src="/social.svg" alt="" width={60} height={60}/>
                    <Image src="/social.svg" alt="" width={60} height={60}/>
                </div>
                <div className="border-l-4 border-l-emerald-600 p-4">
                    <h4>Email</h4>
                    <h5>contato@smartmentor.co</h5>
                </div>
            </div>
            <div className="flex flex-col gap-8">
                <ul className="flex flex-col gap-2">
                    <li>
                        <a href="#">Termos de uso</a>
                    </li>
                    <li>
                        <a href="#">Política de Privacidade</a>
                    </li>
                    <li>
                        <a href="#">Suporte</a>
                    </li>
                </ul>
                <p>
                    Smartmentor © Todos os Direitos Reservados - 2023
                </p>
            </div>
        </div>
    </footer>
)