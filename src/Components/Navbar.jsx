import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Valuecontext } from "../Root/Root";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handlesignout, users,setTheme,theme } = useContext(Valuecontext);

  

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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
          isActive ? "text-orange-700 font-semibold" : undefined
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
          isActive ? "text-orange-700 font-semibold" : undefined
        }
      >
        All Groups
      </NavLink>
 <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost ml-28 md:hidden"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
        </button>
      {users && (
        <>
          <NavLink
            to="/createGroup"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-700 font-semibold" : undefined
            }
          >
            Create Group
          </NavLink>
          <NavLink
            to="/myGroups"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-700 font-semibold" : undefined
            }
          >
            My Groups
          </NavLink>
        </>
      )}
    </>
  );

  return (
   
     <nav className="bg-gradient-to-br navbar bg-base-100 shadow-md  justify-between shadow-blue-200 dark:shadow-blue-600  dark:from-gray-950 dark:to-gray-800  mb-4 px-4 py-5 dark:bg-gray-900 dark:text-white">
      {/* Left side */}
      <Fade   direction='down' triggerOnce={true}>
         <div className="flex items-center  justify-start ml-[-20px]">
        <button
          className="btn btn-ghost md:hidden"
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

        <NavLink
          to="/"
          className=" border-0  hover:text-white    font-bold text-xl flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="w-8 h-8 ml-[-10Px] md:ml-5"
            src="https://i.ibb.co/39WLdycb/image.png"
            alt="HobbyHub Logo"
          />
          <span className="text-sm md:text-2xl">HobbyHub</span>
        </NavLink>
      </div>

      {/* Center Links */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="menu menu-horizontal px-1 gap-6">{links}</ul>
      </div>

      {/* Right side: Theme Toggle & Auth */}
      <div className="flex items-center ml-12  space-x-2 ">
        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost   hidden md:grid"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
        </button>

        {users ? (
          <>
            <div className="tooltip tooltip-bottom" data-tip={users.displayName}>
              <img
                src={users.photoURL || "/default-avatar.png"}
                alt="User"
                className="w-8 h-8 rounded-full object-cover"
              />
            </div>
            <button onClick={handlesignout} className="btn btn-outline btn-secondary hover:bg-secondary btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="btn btn-outline btn-secondary btn-sm"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline btn-error btn-sm"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </NavLink>
          </>
        )}
      </div>
      </Fade>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 backdrop-blur  bg-opacity-30 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Menu */}
     
      <div
        className={`fixed top-0     left-0 h-full w-52 bg-base-100 shadow-lg p-4 space-y-4 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 lg:hidden dark:bg-gray-900`}
      >
        <ul className="flex  flex-col space-y-3">{links}</ul>

        {/* Mobile Auth */}
        <div className="pt-6 border-t  border-gray-300 dark:border-gray-600  flex flex-col  space-y-2">
          {users ? (
            <>
              <div className="tooltip tooltip-bottom" data-tip={users.displayName}>
                <img
                  src={users.photoURL || "/default-avatar.png"}
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
              </div>
              <button
                onClick={handlesignout}
                className="btn btn-outline btn-secondary hover:bg-secondary btn-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="btn btn-outline btn-secondary btn-sm"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn btn-outline btn-error btn-sm"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
 
  );
}

export default Navbar;
