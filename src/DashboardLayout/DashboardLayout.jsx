import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./DashPages/Sidebar";
// We'll also need a Navbar/Header component, let's assume it's called 'Header'
// import Header from "./DashPages/Header"; // You'll create this later

function DashboardLayout() {


  const [theme, setTheme] = useState(() => {
      if (typeof window !== "undefined") {
        return localStorage.getItem("theme") || "light";
      }
      return "light";
    });
  
    // Apply theme to <html> tag
    useEffect(() => {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    }, [theme]);
  return (
    // Updated background to match Storeshop's darker tone
    // Tailwind's default dark colors might not be exact, so we can define custom ones in tailwind.config.js
    // For now, let's use a very dark existing one or a placeholder if you've configured custom colors.
    // The Storeshop background looks like a very dark #1A1A2E or similar.
    // Let's use a custom color if you define it, or a very dark gray.
    <div className={`flex min-h-screen dark:bg-gray-900 dark:text-white ${theme === 'dark' ? 'bg-[#24243A] text-gray-300' : 'bg-[#F8F8F8] text-black'}`}> {/* Storeshop's main background */}
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto"> {/* Remove p-4 md:p-8 here, let Outlet handle its own padding */}
        {/* We'll add a header/navbar here later if you create one */}
        {/* <Header /> */}
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;