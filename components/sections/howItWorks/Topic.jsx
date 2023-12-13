'use client'

import Arrow from "./Arrow"
import Zigzag from "@/components/layout/Zigzag"
import { Player } from '@lottiefiles/react-lottie-player';

const Card = ({title, content, index, className}) => (
    <div className={"bg-white rounded-lg p-2 flex flex-col gap-1 h-fit " + className}>
        <div>
            <h2 className="flex gap-2 items-center font-semibold"> 
                <div className="text-xl text-emerald-400">{index + 1}.</div>
                <div className="text-xl">{title}</div>
            </h2>
        </div>
        <h3>
            {content}
        </h3>
    </div>
  )
  
export default ({title, content, index, lottie}) => {
    return (  
        <div className="relative">
            <Zigzag index={index + 1} className="items-center gap-4">
                <div>
                <Player
                    autoplay
                    loop
                    src={"./lottie/" + lottie}
                />
                </div>
                <Card title={title} content={content} index={index} className={index % 2 !== 0 ? "order-first" : ""}/>
            </Zigzag>
            <Arrow index={index}/>
        </div>
    )
}