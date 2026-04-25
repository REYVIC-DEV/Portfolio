import { Link } from "react-router-dom"
export const NavBar = () => {
    return (
        <nav className="w-full h-[50px] flex flex-row items-center justify-between py-[32px]">
            <h1 className="leading-[28px] tracking-[-1px] font-headline font-bold text-[20px]">Reydev</h1>
            <div className="hidden md:flex flex-row gap-4">
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/page2">
                    <h2>Page 2</h2>
                </Link>
            </div>
            <button className="border border-solid border-primary px-[32px] py-[10px] cursor-pointer rounded-full font-bold !text-primary hover:bg-primary hover:!text-white transition-all ease-in-out duration-300">HIRE ME</button>
        </nav>
    )
}