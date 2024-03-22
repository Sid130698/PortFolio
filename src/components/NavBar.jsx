import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  // Check if the current route matches the "About" page
  const isHomePage = location.pathname === '/';
  const outerDivStyles = {
    opacity: isHomePage ? 0.8 : 1,
    position: 'fixed',
    backgroundColor : isHomePage ?'transparent':'rgba(255, 255, 255, 1)',
    width: '100%',
    height: '8vh',
    zIndex:12,
  };
  return (
    <div style={outerDivStyles}>
      <header className="fixed header top-0 left-0 w-full bg-white z-10" >
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">SS</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header> 
    </div>
    
  );
};

export default NavBar;
