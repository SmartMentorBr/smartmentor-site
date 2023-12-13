import Container from "../../layout/Container"
import useData from "@/hooks/useData"
import NavMenu from "./NavMenu"

export default async () => {
    const { navigation } = await useData()
    const links = navigation

    return (
        <nav className="fixed w-full z-50 p-1">
            <Container>
                <NavMenu links={links} />
            </Container>
        </nav>
    )
}