'use client'

import Logo from "@/components/icons/Logo"
import MenuIcon from "./MenuIcon"
import { useEffect, useState } from "react"
import { animate, motion } from "framer-motion"

const initial = {
    height: '5.5rem'
}

const animateOnClick = {
    height: '50vh'
}

export default ({children}) => {
    const [open, setOpen] = useState(false)
    
    return (
        <motion.div 
            className="bg-white rounded-lg p-1 flex flex-col 2xl:flex-row justify-between gap-1 overflow-hidden"
            initial={initial}
            animate={open ? animateOnClick : {}}
        >
            <div className="flex w-full 2xl:w-fit justify-between items-center">
                <Logo/>
                <MenuIcon onClick={() => setOpen(!open)} state={open}/>
            </div>
            <div className={!open ? "hidden 2xl:block" : ""}>
                {children}
            </div>
        </motion.div>
    )
}