import { NavLink, Outlet } from "react-router-dom";
import { menuRoutes } from "../router/router";
import SideBarMenuItem from "../components/SideBarMenuItem";

export const DashboardLayout = () => {
  return (
    <main className="flex flex-row mt-7">
      <nav className="hidden sm:flex flex-col ml-5 w-[370px] min-h-[calc(100vh-3.0rem)] bg-white bg-opacity-10 p-5 rounded-3xl">
        <h1 className="font-bold text-lg lg:text-3xl text-white bg-clip-text text-transparent">
          Chat<span className="text-indigo-500">Bot</span>
        </h1>

        {/* Opciones del menú */}
        {menuRoutes.map((option) => (
          <SideBarMenuItem
            key={option.to} 
            to={option.to}
            icon={option.icon} 
            title={option.title} 
            description={option.description} 
          />
        ))}
      </nav>

      <section className="mx-3 sm:mx-5 flex flex-col w-full h-[calc(100vh-50px)]  bg-white bg-opacity-10 p-5 rounded-3xl">
        <div className="flex flex-row h-full">
          <div className="flex flex-col flex-auto h-full p-1 md:mx-60">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};
