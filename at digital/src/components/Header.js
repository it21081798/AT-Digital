import React, { useState } from 'react';
import logo from '../assets/White Logo.png';
import Close from '../assets/close.svg';
import Menu from '../assets/Group 2.svg';


const Header = () => {
  const [open, setOpen] = useState(false);

  const menuLink = [

    {
        name:"HOME",
        link:"/"
    },
    {
      name: "SERVICES",
      link: "/" 
    },
    {
      name: "ABOUT US",
      link: "/"
    },
    {
      name: "CONTACT US",
      link: "/"
    },
    {
      name: "CAREERS",
      link: "/" 
    }
  ];


  return (
    <header className="bg-[#6B3CC9] w-full h-[70px] md:flex md:h-[70px] items-center justify-between relative ">
      <img
        src={logo}
        alt='logo'
        className='px-[3%] md:pb-4 pt-3.5 md:ml-0 flex justify-center items-center xl:h-[100%] md:h-[80%] h-[70%]'
      />
      <img
        src={open ? Close : Menu}
        className="z-100 absolute top-7 right-5 cursor-pointer md:hidden w-10 mt-[-10px]" onClick={() => setOpen(!open)} alt="" />

<div className={`md:flex md:h-10 my-3 px-3 py-4 w-full bg-white md:bg-transparent lg:bg-transparent flex md:flex-row flex-col justify-center md:justify-end md:mx-0 lg:mx-[70px] xl:mx-[50px] md:place-items-center place-items-start duration-100 ease-linear bg-gradient-to-b from-light-grey to-slate-400 md:bg-gradient-to-b md:from-slate-950/0 md:to-slate-900/0 ${!open ? "hidden md:flex" : "block md:left-0"}`}>
  <ul className='md:flex md:gap-2 lg:gap-0 xl:gap-8 md:px-2 text-start items-center justify-center'>
    {menuLink.map((link, index) => (
      <li key={index} className={`lg:ml-4 md:ml-4 text-xl xl:text-[17px] lg:text-[16px] text-white md:text-[15px] text-[15.5px] font-medium lg:place-items-end md:px-0.5 py-3 cursor-pointer rounded-2xl ${open ? "text-black" : ""}`}>
          <a href={link.link}>{link.name}</a>
      </li>
    ))}
  </ul>
</div>







    </header>
  )
}

export default Header;
