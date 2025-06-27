import React, { useContext } from 'react';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { Link, NavLink } from 'react-router-dom';
import { Valuecontext } from '../Root/Root';

function Footer() {
  const { users } = useContext(Valuecontext);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/Allgroups", label: "All Groups" },
  ];

  const authLinks = [
    { to: "/createGroup", label: "Create Group" },
    { to: "/myGroups", label: "My Groups" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  return (
    <>
      {/* Top Section */}
      <footer className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-950 dark:to-gray-800 text-gray-800 dark:text-gray-200 px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Navigation Links */}
        <div className="md:text-center">
          <h6 className="text-xl font-semibold mb-4">Hobbies</h6>
          <ul className="space-y-2 flex flex-col items-start md:items-center">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            {users &&
              authLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? "text-orange-600 font-semibold"
                        : "hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition"
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>

        {/* Company Info */}
        <div className="md:text-center">
          <h6 className="text-xl font-semibold mb-4">Company</h6>
          <ul className="space-y-2">
            {["About", "Contact", "Support"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal */}
        <div className="md:text-center">
          <h6 className="text-xl font-semibold mb-4">Legal</h6>
         <ul className="space-y-2">
  <li>
    <NavLink
      to="/terms"
      className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
    >
      Terms of Use
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/privacy"
      className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
    >
      Privacy Policy
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/cookies"
      className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
    >
      Cookie Policy
    </NavLink>
  </li>
</ul>

        </div>
      </footer>

      {/* Bottom Section */}
     {/* Bottom Section */}
      <footer className="flex  flex-col md:flex-row items-center justify-between bg-slate-300 dark:bg-gray-900 px-10 py-6 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-400 dark:border-gray-600">
        {/* Branding */}
        <Link onClick={()=>window.scrollTo(0,0)} to="/" className="flex items-center gap-3 mb-4 md:mb-0">
          <img src="https://i.ibb.co/39WLdycb/image.png" alt="Logo" className="w-10 h-10" />
          <div>
            <p className="text-lg font-bold text-black dark:text-white">HobbyHub</p>
            <p className="text-sm">Connecting hobbyists since 2025</p>
          </div>
        </Link>

        {/* Social Links */}
        <div className="flex gap-5">
          {/* Twitter */}
          <a href="https://twitter.com" className='className="w-6  h-8 hover:text-blue-900 text-blue-500 dark:hover:text-blue-400 transition"' target="_blank" rel="noreferrer">
           
             <FaTwitter size={30}></FaTwitter>
            
          </a>
          {/* YouTube */}
          <a href="https://www.youtube.com" className="w-6 h-6  hover:text-red-800  text-red-600 dark:hover:text-red-400 transition" target="_blank" rel="noreferrer">
          
              <FaYoutube size={30}></FaYoutube>
           
          </a>
          {/* Facebook */}
          <a href="https://www.facebook.com" className="w-full   hover:text-blue-700 dark:hover:text-blue-500 transition" target="_blank" rel="noreferrer">
          
            <FaFacebook size={30}></FaFacebook>
          
          </a>
        </div>
      </footer>
    
    </>
  );
}

export default Footer;
