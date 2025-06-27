import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  ListOrdered,
  UserCircle,
  LogOut,
  Home,
  X,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Overview", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "All Groups", path: "/dashboard/all-items", icon: <ListOrdered size={20} /> },
    { name: "Add Group", path: "/dashboard/add-item", icon: <PlusCircle size={20} /> },
    { name: "My Group", path: "/dashboard/my-items", icon: <UserCircle size={20} /> },
    { name: "Home", path: "/", icon: <Home size={20} /> },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium ${
      isActive ? "bg-[#7B68EE] text-white shadow-md" : "hover:bg-[#2e2e4d]"
    }`;

  return (
    <>
      {/* Sticky Floating Toggle Button for Mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-6 z-40 md:hidden bg-[#7B68EE] text-white p-4 rounded-full shadow-xl hover:scale-105 transition-all"
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0  bg-opacity-100 z-30 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
      />

      {/* Mobile Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 z-50 dark:bg-gray-900 dark:text-white bg-gray-200  shadow-lg transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-700">
          <h2 className="text-lg font-bold">HobbyHub</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <div className="p-5 flex flex-col h-full">
          <nav className="flex flex-col gap-2 flex-grow">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                 end={link.path === '/dashboard'} // 👈 Only apply exact matching to '/dashboard'
                className={linkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="pt-6 mt-auto">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-600 hover:bg-[#2e2e4d] transition text-sm font-medium">
              <LogOut size={20} /> Logout
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 min-h-screen p-5 flex-col border-r bg-gray-100 dark:bg-gray-900 dark:text-white">
        <div className="mb-10">
          <h2 className="text-xl font-bold">HobbyHub</h2>
        </div>
        <nav className="flex flex-col gap-2 flex-grow">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/dashboard"}
              className={linkClass}
            >
              {link.icon}
              {link.name}
            </NavLink>
          ))}
        </nav>
        <div className="pt-10 mt-auto">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg border border-gray-700 hover:bg-[#2e2e4d] transition text-sm font-medium">
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
