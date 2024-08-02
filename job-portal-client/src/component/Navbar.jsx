import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: "/", title: "Start a search" },
    { path: "/my-job", title: "My jobs" },
    { path: "/salary", title: "Salary Estimate" },
    { path: "/post-job", title: "Post a job" },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
            <rect x="8" y="12" width="48" height="44" rx="4" ry="4" fill="#E6E9ED" stroke="#333" strokeWidth="2" />
            <rect x="20" y="6" width="24" height="8" rx="2" ry="2" fill="#F5F7FA" stroke="#333" strokeWidth="2" />
            <polyline points="20,30 28,38 44,22" fill="none" stroke="#5CB85C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="16" y1="40" x2="48" y2="40" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="46" x2="48" y2="46" stroke="#333" strokeWidth="2" strokeLinecap="round" />
            <line x1="16" y1="52" x2="48" y2="52" stroke="#333" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span>JobBoard</span>
        </a>
        {/*nav items for large device*/}
        <ul className="hidden md:flex gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/*signup and login btn*/}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link to="/login" className="py-2 px-5 border rounded">log in</Link>
          <Link to="/sign-up" className="py-2 px-5 border rounded bg-blue-900 text-white">Sign-up</Link>
        </div>
        {/*mobile menu*/}
        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? <FaXmark className="w-5 h-5 text-primary" /> : <FaBarsStaggered className="w-5 h-5 text-primary" />}
          </button>
        </div>
      </nav>
      {/*nav items for mobile */}
      <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-white">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
              >
                {title}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/login">log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;

