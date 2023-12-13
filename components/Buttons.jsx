import useData from "@/hooks/useData"

export const Button = ({href = "", children, classes}) => (
    <a href={href} className={`
        text-center p-1 rounded w-fit font-semibold ${classes} 
        whitespace-nowrap
        shadow-sm
        hover:shadow-lg
        hover:translate-y-[-10%]
        hover:brightness-110 
        transition-all
        duration-300
    `}>
        {children}
    </a>
)

export const PrimaryBtn = ({children, href}) => (
    <Button href={href} classes={`
        bg-primary text-dark 
    `}>
        {children}
    </Button>
)

export const CallToAction = async () => {
    const { ctaLink } = await useData()

    return (
        <PrimaryBtn href={ctaLink}>
            Faça seu diagnóstico gratuíto
        </PrimaryBtn>
    )
}

export const SecondaryBtn = ({children}) => <Button classes={`
    bg-black text-white 
`}>
    {children}
</Button>