import Logo from "@/components/icons/Logo"
import MenuIcon from "./MenuIcon"
import NavItems from "./NavItems"

export default ({links}) => {
    return (
        <div className="bg-white rounded-lg p-1 flex flex-col 2xl:flex-row justify-between gap-1">
            <div className="flex w-full 2xl:w-fit justify-between">
                <Logo/>
                <MenuIcon/>
            </div>
            <div className="hidden 2xl:block">
                <NavItems links={links}/>
            </div>
        </div>
    )
}