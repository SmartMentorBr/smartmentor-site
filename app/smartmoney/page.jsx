'use server'
import Contact from "@/components/sections/Contact";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Features from "@/components/sections/smartmoney/Features";

export default async () => (
    <>
    <header className="flex justify-center items-center pt-[15vh]">
        <Container>
            <div className="flex flex-col gap-8 h-[10vh] lg:h-[50vh] items-center justify-center">
                <h1 className="font-bold text-lg lg:text-xl text-center">
                    Acompanhe dados de suas empresas e descubra novos negócios em tempo real.
                </h1>
            </div>
        </Container>
    </header>
    <main>
        <Features/>
        <Contact/>
    </main>
    </>
)