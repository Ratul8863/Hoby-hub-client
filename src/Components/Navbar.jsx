import React, { useContext, useState } from "react";

import { NavLink } from "react-router-dom";

// import { AuthContext } from '../contexts/AuthProvider'; // Uncomment and adjust path

function Navbar() {
  // const { user, logout, toggleTheme, theme } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    // logout();
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const links = (
    <>
      <NavLink
        to="/"
        onClick={() => {
          window.scrollTo(0, 0);
          setMenuOpen(false);
        }}
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : undefined
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/Allgroups"
        onClick={() => {
          window.scrollTo(0, 0);
          setMenuOpen(false);
        }}
        className={({ isActive }) =>
          isActive ? "text-primary font-semibold" : undefined
        }
      >
        All Groups
      </NavLink>
      {/* {user && ( */}
      <>
        <NavLink
          to="/createGroup"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : undefined
          }
        >
          Create Group
        </NavLink>
        <NavLink
          to="/myGroups"
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-primary font-semibold" : undefined
          }
        >
          My Groups
        </NavLink>
      </>
      {/* )} */}
    </>
  );

  return (
    <nav className="navbar bg-base-100 shadow-md px-4 py-3">
      {/* Left side */}
      <div className="flex items-center justify-start space-x-2">
        {/* Mobile Hamburger */}
        <button
          className="btn btn-ghost lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo */}
        <NavLink
          to="/"
          className="btn btn-ghost font-bold text-xl flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="w-8 h-8"
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
            alt="HobbyHub Logo"
          />
          <span className="text-sm md:text-2xl">HobbyHub</span>
        </NavLink>
      </div>

      {/* Center: Desktop Menu */}
      <div className="hidden lg:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
      </div>

      {/* Right side: Auth & Theme */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle (uncomment when ready) */}
        {/* {toggleTheme && (
          <button
            onClick={toggleTheme}
            className="btn btn-sm btn-outline"
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        )} */}

        {/* Auth Buttons */}
        {/* {!user ? ( */}
        <>
          <NavLink
            to="/login"
            className="btn btn-outline btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="btn btn-outline btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Register
          </NavLink>
        </>
        {/* ) : (
          <>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error text-white"
            >
              Logout
            </button>
          </>
        )} */}
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={toggleMenu} />
      )}
      <div
        className={`fixed top-0 left-0 h-full w-52 bg-base-100 shadow-lg p-4 space-y-4 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden`}
      >
        <ul className="flex flex-col space-y-3">{links}</ul>

        {/* Mobile Auth Buttons */}
        <div className="pt-6 border-t border-gray-300 dark:border-gray-600 flex flex-col space-y-2">
          {/* {!user ? ( */}
          <>
            <NavLink
              to="/login"
              className="btn btn-outline btn-sm"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline btn-sm"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </NavLink>
          </>
          {/* ) : (
            <>
              <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-error text-white"
              >
                Logout
              </button>
            </>
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




{/* <div className="navbar-end space-x-4">
        {users ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={users.displayName}>
              <Link to="/UserProfile">
                <img
                  src={users.photoURL}
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                />
              </Link>
            </div>
            <button
              onClick={handlesignout}
              className="btn btn-sm bg-[#176AE5] text-white hover:bg-blue-700 rounded-xl"
            >
              Logout
            </button>
          </>
        ) : (
          <div className='flex gap-2'>  
           <NavLink
          to="/Login"
        >
          <FaUserCircle size={30}/>
        </NavLink>
            <Link
          to="/Login"
          className="flex items-center gap-1 btn btn-sm bg-[#176AE5] text-white hover:bg-blue-700 rounded-xl"
        >
          
          Login/Register
        </Link></div>
         
        )}
      </div> */}