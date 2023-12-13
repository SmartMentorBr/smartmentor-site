import Container from "../../layout/Container"
import NavMenu from "./NavBar"
import NavItems from "./NavItems"   

export default () => {
    return (
        <nav className="fixed w-screen z-50 pt-1">
            <Container>
                <NavMenu>
                    <NavItems/>
                </NavMenu>
            </Container>
        </nav>
    )
}