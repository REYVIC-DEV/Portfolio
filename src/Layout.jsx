import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar"
export const Layout = () => {
    return (
        <div className="bg-main h-screen w-full px-[32px]">
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}