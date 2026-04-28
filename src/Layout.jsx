import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
export const Layout = () => {
  return (
    <div className="bg-main flex items-center justify-center w-full">
      <div className="px-[32px] lg:px-[128px] max-w-[1440px] w-full">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
