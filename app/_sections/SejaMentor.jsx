import SectionTitle from "./componentes/SectionTitle";
import SecondaryButton from "./componentes/buttons/SecondaryButton";
import CheckList from "./componentes/CheckList";
import Image from "next/image";


export default () => (
    <div className="grid grid-cols-2 items-center">
        <Image src="/sample-img.svg" alt="" width={300} height={300}/>
        <div className="flex gap-4 flex-col">
            <SectionTitle
                align={'left'}
                title="Seja um mentor"
                subtitle="Seja um mentor"
            />
            <p>
                Ajude empresas em sua jornada de validação de mercado transmitindo conhecimento.
            </p>
            
            <CheckList items={[
                'Aumente sua autoridade no mercado',
                'Potencialize oportunidades de negócio',
                'Acesse leads qualificados'
            ]}/>
            <SecondaryButton>
                Quero ser mentor
            </SecondaryButton>
        </div>
    </div>
)