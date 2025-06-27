import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  PlusCircle,
  ListOrdered,
  UserCircle,
  LogOut,
  Home,
} from 'lucide-react';

const Sidebar = () => {
  const links = [
    { name: 'Overview', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'All Groups', path: '/dashboard/all-items', icon: <ListOrdered size={18} /> },
    { name: 'Add Group', path: '/dashboard/add-item', icon: <PlusCircle size={18} /> },
    { name: 'My Group', path: '/dashboard/my-items', icon: <UserCircle size={18} /> },
    { name: 'Home', path: '/', icon: <Home size={18} /> },
  ];

  return (
    // Storeshop sidebar background is a distinct, slightly lighter dark grey/purple
    <aside className="bg-[#24243A] text-gray-300 w-64 min-h-screen p-5 hidden md:flex flex-col"> {/* Added flex flex-col for proper logout alignment */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-white">HobbyHub</h2> {/* Logo/Brand name */}
      </div>
      <nav className="flex flex-col gap-2 flex-grow"> {/* flex-grow to push logout to bottom */}
        {links.map((link) => (
         <NavLink
  key={link.name}
  to={link.path}
  end={link.path === '/dashboard'} // 👈 Only apply exact matching to '/dashboard'
  className={({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-sm font-medium
     ${isActive ? 'bg-[#7B68EE] text-white shadow-lg' : 'text-gray-300 hover:bg-[#3A3A5A]'}`
  }
>
  {link.icon}
  {link.name}
</NavLink>

        ))}
      </nav>

      {/* Logout button styled like Storeshop's sidebar items or simple */}
      <div className="mt-auto pt-10"> {/* mt-auto pushes it to the bottom */}
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-transparent border border-gray-700 text-gray-300 hover:bg-[#3A3A5A] transition text-sm font-medium"
        >
          <LogOut size={18} /> Logout
        </button>
        {/* Dark mode toggle would go here eventually if implemented */}
        {/* Example placeholder for dark mode toggle */}
        {/* <div className="mt-4 text-center">
            <span className="text-sm text-gray-400">Dark Mode</span>
            <input type="checkbox" className="ml-2 toggle" />
        </div> */}
      </div>
    </aside>
  );
};

export default Sidebar;