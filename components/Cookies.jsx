'use client'

import { useLayoutEffect, useState } from "react"
import Container from "./layout/Container"

export default function(){
    const [cookies, setCookies] = useState(false)

    function handleClick(){
        localStorage.setItem("cookies", true)
        setCookies(localStorage.getItem("cookies"))
    }

    useLayoutEffect(() => {
        setCookies(localStorage.getItem("cookies"))
    },[])

    return cookies ? <></> : <div className="fixed bottom-0 w-full bg-black text-white">
        <Container>
            <div>
                <div className="">
                    <p className="font-bold">
                        Este Site usa Cookies 
                    </p>
                    <p>
                    Para otimizar a experiência durante a sua navegação em nosso site, fazemos uso de cookies. Ao continuar na nossa plataforma, consideramos que você esteja de acordo com nossa política de cookies.
                    </p>
                    <div className="flex gap-1">
                        <a href="#">Termos de uso</a>
                        <a href="#">Política de privacidade</a>
                    </div>
                </div>
                <button onClick={handleClick} className="bg-primary p-1">
                    Confirmar
                </button>
            </div>
        </Container>
    </div>
}