import Image from "next/image"
import Container from "../layout/Container"
import Logo from "../icons/Logo"

export default () => (
    <footer className="bg-dark text-white" id="contato">
        <Container>
        <div className="w-11/12 m-auto py-16 grid lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-1">
                <Logo fill="#fff"/>
                <div className="flex gap-2">
                    <Image src="images/social/instagram.svg" alt="" width={60} height={60}/>
                    <Image src="images/social/whatsapp.svg" alt="" width={60} height={60}/>
                    <Image src="images/social/linkedin.svg" alt="" width={60} height={60}/>
                </div>
                <div className="border-l-4 border-l-primary p-1">
                    <h4>Email</h4>
                    <h5>contato@smartmentor.co</h5>
                </div>
            </div>
            <div className="flex flex-col gap-3 ">
                <ul className="flex flex-col gap-1 border-l-4 border-l-secondary p-1">
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
    </Container>
   </footer>
)