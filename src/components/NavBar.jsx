import { NavLink } from "react-router-dom"

const NavLinks = ({path, title}) =>{
    return(
        <NavLink
            to={path}
            className={({ isActive }) => isActive ? "text-primary" : "text-white"}
        >
            <h2>{title}</h2>
        </NavLink>
    )
}

export const NavBar = () => {
    return (
        <nav className="w-full flex flex-row items-center justify-between py-[32px]">
            <h2 className="leading-[28px] tracking-[-1px] text-white font-headline font-bold text-[20px]">REYDEV</h2>
            <div className="hidden md:flex flex-row gap-4">
                <NavLinks path="/" title="Home" />
                <NavLinks path="/page2" title="Page 2" />
            </div>
            <button className="border border-solid border-primary px-[32px] py-[10px] cursor-pointer rounded-full font-bold text-primary hover:bg-primary hover:text-white transition-all ease-in-out duration-300">HIRE ME</button>
        </nav>
    )
}