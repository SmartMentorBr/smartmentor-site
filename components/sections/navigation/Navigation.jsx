import Container from "../../layout/Container"
import Logo from "../../icons/Logo"
import useData from "@/hooks/useData"
import MenuIcon from "./MenuIcon"
import NavItems from "./NavItems"

export default async () => {
    const { navigation } = await useData()
    const links = navigation

    return (
        <nav className="fixed w-full z-50 p-1">
            <Container>
                <div className="bg-white rounded-lg p-2 flex flex-col 2xl:flex-row justify-between gap-1">
                    <div className="flex w-full 2xl:w-fit justify-between">
                        <Logo/>
                        <MenuIcon/>
                    </div>
                    <NavItems links={links}/>
                </div>
            </Container>
        </nav>
    )
}