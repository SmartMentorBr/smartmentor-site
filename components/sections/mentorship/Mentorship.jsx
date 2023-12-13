'use client'

import { SecondaryBtn } from "../../Buttons";
import CheckList from "../../CheckList";
import Image from "next/image";
import Section from "../Section";
import { Player } from "@lottiefiles/react-lottie-player";

export default () => <Section id="mentoria">
<div className="grid lg:grid-cols-2 items-center py-4">
    <Player autoplay loop src={"./lottie/lottie-4.json"}/>

    <div className="flex gap-1 flex-col">
        <h2 className="subtitle">Seja um mentor</h2>
        <h3 className="title">Seja um mentor</h3>
        <p>
            Ajude empresas em sua jornada de validação de mercado transmitindo conhecimento.
        </p>
                
        <CheckList items={[
            'Aumente sua autoridade no mercado',
            'Potencialize oportunidades de negócio',
            'Acesse leads qualificados'
        ]}/>
        <SecondaryBtn href="https://www.app.smartmentor.co/">
            Quero ser mentor
        </SecondaryBtn>
        </div>
    </div>    
</Section>