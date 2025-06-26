import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Valuecontext } from "../Root/Root";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Fade } from "react-awesome-reveal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { handlesignout, users, setTheme, theme } = useContext(Valuecontext);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const navLinks = (
    <>
      {[
        { to: "/", label: "Home" },
        { to: "/Allgroups", label: "All Groups" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
        { to: "/support", label: "Support" },
      ].map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-orange-600 font-semibold" : undefined
          }
        >
          {label}
        </NavLink>
      ))}

      {users && (
        <>
          <NavLink
            to="/createGroup"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-semibold" : undefined
            }
          >
            Create Group
          </NavLink>
          <NavLink
            to="/myGroups"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-orange-600 font-semibold" : undefined
            }
          >
            My Groups
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#0D1128] dark:text-white shadow-md px-6 md:px-12 py-4">
      <Fade direction="down" triggerOnce={true}>
        <div className="flex justify-between items-center">
          {/* Left - Logo & Mobile Menu */}
          <div className="flex items-center gap-3">
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
              className="flex items-center gap-2 font-bold text-lg md:text-2xl"
              onClick={() => setMenuOpen(false)}
            >
              <img
                className="w-8 h-8"
                src="https://i.ibb.co/39WLdycb/image.png"
                alt="HobbyHub Logo"
              />
              HobbyHub
            </NavLink>
          </div>

          {/* Center - Nav Links (Desktop) */}
          <div className="hidden md:flex gap-6">{navLinks}</div>

          {/* Right - Theme Toggle & Auth */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="btn btn-circle btn-ghost hidden md:grid"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <MdOutlineLightMode
                  size={20}
                  className="transition duration-300 hover:rotate-180"
                />
              ) : (
                <MdOutlineDarkMode
                  size={20}
                  className="transition duration-300 hover:rotate-180"
                />
              )}
            </button>

            {/* Auth Buttons */}
            {users ? (
              <>
                <div
                  className="tooltip tooltip-bottom"
                  data-tip={users.displayName}
                >
                  <img
                    src={users.photoURL || "/default-avatar.png"}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                </div>
                <button
                  onClick={handlesignout}
                  className="btn btn-outline btn-secondary btn-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="btn btn-outline btn-secondary btn-sm"
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="btn btn-outline btn-error btn-sm"
                >
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </Fade>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-white dark:bg-[#1c1f3b] shadow-lg p-5 z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:hidden space-y-4`}
      >
        <ul className="flex flex-col space-y-3">{navLinks}</ul>

        {/* Theme Toggle (Mobile) */}
        <button
          onClick={toggleTheme}
          className="btn btn-circle btn-ghost w-max"
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? (
            <MdOutlineLightMode size={20} />
          ) : (
            <MdOutlineDarkMode size={20} />
          )}
        </button>

        {/* Auth (Mobile) */}
        <div className="pt-4 border-t border-gray-300 dark:border-gray-600 space-y-2">
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
                className="btn btn-outline btn-secondary btn-sm"
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
