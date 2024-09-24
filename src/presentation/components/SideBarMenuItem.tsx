import { NavLink } from "react-router-dom";

interface SideBarMenuItemProps {
  to: string;
  icon: string;
  title: string;
  description: string;
}

const SideBarMenuItem = ({
  to,
  icon,
  title,
  description,
}: SideBarMenuItemProps) => {
  return (
    <NavLink
      to={to}
      key={to}
      className={({ isActive }) =>
        isActive
          ? "my-2 flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "my-2 flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
      }
    >
      <i className={`${icon} text-2xl text-white mr-4`}></i>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-bold">{title}</span>
        <span className="text-gray-400 text-sm font-light">{description}</span>
      </div>
    </NavLink>
  );
};

export default SideBarMenuItem;
