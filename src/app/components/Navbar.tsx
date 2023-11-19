"use client";
import React, {useState} from 'react';
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

  return (
    <nav className='fixed top-0 left-0 right-0 z-10'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-8 py-4'>
            <Link href={"/"} className='text-2xl md:text-5xl font-semibold text-white hover:text-[#aaf540]'>Pauline Gobé</Link>
            <div className='mobile-menu block md:hidden'>
                {navbarOpen? (
                    <button 
                    onClick={()=> setNavbarOpen(false)} 
                    className='flex items-center px-3 py-2 border rounded border-white text-white hover:text-[#aaf540] hover:border-[#aaf540]'>
                        <XMarkIcon className='h-5 w-5' ></XMarkIcon>
                    </button>
                ) :
                (
                    <button 
                    onClick={()=> setNavbarOpen(true)} 
                    className='flex items-center px-3 py-2 border rounded border-white text-white hover:text-[#aaf540] hover:border-[#aaf540]'>
                        <Bars3Icon className='h-5 w-5'></Bars3Icon>
                    </button>
                    
                )
                }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
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