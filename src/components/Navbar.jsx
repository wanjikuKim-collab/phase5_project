import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NavLink } from "react-router-dom";
import close from '../assets/211651_close_round_icon.svg';
import menu from '../assets/7124209_menu_icon.svg';


const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    const links =[
        {name: "Home", link:"/"},
        {name: "About", link:"/about"},
        {name: "Blogs", link:"/blog"},
        {name: "Videos", link:"/videos"},
        {name: "Audios", link:"/audios"}
      ]
      
  return (
    <nav className="w-full -z-50 flex py-6 justify-between items-center navbar">
      
      {/* DESKTOP NAVBAR */}
      <div className='flex'>
        <img src={logo} alt="Tech Motisha Logo" className="w-[54px] h-[54px]" />
        <h1 className='font-bold text-center text-white text-xl'>                 
          Tech <span className={`block text-orange-600 text-xl`}>Motisha</span>
        </h1>

      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {links.map((nav, index) => (
          <li
            key={nav.name}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.name ? "text-white" : "text-dimWhite"
            } ${index === links.length - 1 ? "mr-5" : "mr-10"}`}
            onClick={() => setActive(nav.name)}
          >
             <NavLink to={nav.link}>{nav.name}</NavLink>
          </li>
        ))}
      </ul>
      
      {/* MOBILE NAVBAR - on small devices it's hidden*/}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        {/* hamburger */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
        onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {links.map((nav, index) => (
              <li
                key={nav.name}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.name ? "text-white" : "text-dimWhite"
                } ${index === links.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.name)}
              >
                <NavLink to={nav.link}>{nav.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar