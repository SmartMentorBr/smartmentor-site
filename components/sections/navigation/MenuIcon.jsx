import { motion } from "framer-motion"

const barClass = "w-3 h-[0.2rem] bg-slate-500"

const barsClasses = [
    '',
    '',
    ''
]

const outAnimation = {
}

const barsAnimation = [
    {
        rotate: 45,
        originX: 0,
        x: '15%',
        //width: '110%'
    },
    {
        width: 0,
        opacity: 0
    },
    {
        rotate: -45,
        originX: 0,
        x: '15%',
        //width: '110%'
    }
]

const transition = {type: 'spring', stiffness: 500, damping: 60, mass: 1, delay: 0}

export default ({onClick, state}) => (
    <motion.div className="flex flex-col gap-[0.8rem] items-center 2xl:hidden justify-center relative h-12 m-0.5" 
        animate={state ? outAnimation : {}} onClick={onClick}>
        <motion.div transition={transition} className={barClass + barsClasses[0]} animate={state ? barsAnimation[0] : {}}></motion.div>
        <motion.div transition={transition} className={barClass + barsClasses[1]} animate={state ? barsAnimation[1] : {}}></motion.div>
        <motion.div transition={transition} className={barClass + barsClasses[2]} animate={state ? barsAnimation[2] : {}}></motion.div>
    </motion.div>
)
