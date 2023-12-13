'use client'

import CheckList from "../CheckList"
import Image from "next/image"
import Section from "./Section"
import { SecondaryBtn } from "../Buttons"
import { Player } from "@lottiefiles/react-lottie-player"

export default () => <Section id="smartmoney">
    <div className="grid lg:grid-cols-2 gap-4 items-center py-4">
        <Player autoplay loop src={"./lottie/lottie-5.json"}/>
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-bold">Conheça a Smartmoney</h2>
                <p className="text-lg font-semibold">
                    Com a Smartmoney você consegue descobrir empresas de capital fechado e monitorar as que voce ja investe. 
                </p>
            </div>
            <CheckList items={[
                "Consulte de forma intuitiva as informações das empresas",
                "Gerencie o risco dos seus investimentos",
                "Ganho de autoridade e Credibilidade"
            ]}/>
            <div className="py-8">
            <SecondaryBtn href="./smartmoney">
                Quero conhecer a Smartmoney
            </SecondaryBtn>
            </div>
        </div>
    </div>
</Section>