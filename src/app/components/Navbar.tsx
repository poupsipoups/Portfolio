"use client";
import React, {useEffect, useState} from 'react';
import Link from "next/link";
import NavLink from './NavLink';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const NavLinks = [
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    },
   ]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const [scrollOpacity, setScrollOpacity] = useState(0);
  

  return (
    <nav className='fixed top-0 left-0 right-0 z-10'>
        
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-4 z-12 absolute top-0 left-0 right-0 font-zilla mix-blend-difference'>
            
            <Link href={"/"} className='text-xl md:text-xl font-semibold text-[#DEEAF7] hover:text-[#AFE54B] font-jost'>Pauline Gobé</Link>
            <div className='mobile-menu block md:hidden z-12'>
                {navbarOpen? (
                    <button 
                    onClick={()=> setNavbarOpen(false)} 
                    className='flex items-center px-3 py-2 border rounded border-white text-white hover:text-[#AFE54B] hover:border-[#AFE54B]'>
                        <XMarkIcon className='h-5 w-5' ></XMarkIcon>
                    </button>
                ) :
                (
                    <button 
                    onClick={()=> setNavbarOpen(true)} 
                    className='flex items-center px-3 py-2 border rounded border-white text-white hover:text-[#AFE54B] hover:border-[#AFE54B]'>
                        <Bars3Icon className='h-5 w-5'></Bars3Icon>
                    </button>
                    
                )
                }
            </div>
            <div className='menu hidden md:block md:w-auto z-12' id="navbar">
            <div></div>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-5'>
                    {
                        NavLinks.map((link, index)=>{
                            return(
                            <li key={index}><NavLink href={link.path} title={link.title}></NavLink> </li>
                        )})
                    }
                </ul>
            </div>
        </div>

        
        {navbarOpen? <MenuOverlay links={NavLinks}/> : null}
    </nav>
  )
}

export  default Navbar;