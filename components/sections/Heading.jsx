import Image from "next/image"
import Container from "../layout/Container"

export default () => (
    <header className="flex justify-center items-center">
        <Container>
            <div>
                <h1 className="text-xl">Seja um mentor</h1>
                <h2 className="text-xl">
                    Ajude empresas em sua jornada de validação de 
                    mercado transmitindo conhecimento.
                </h2>
            </div>
            <div className="order-first">
                <Image src="/sample-img.svg" alt="" width={600} height={300}/>
            </div>
        </Container>
    </header>
)