import React from 'react';
import NavLink from './NavLink';
import { List } from 'postcss/lib/list';
import Link from 'next/link';

interface Link {
    path: string;
    title: string;
  }

interface MenuOverlayProps {
    links: Link[]
  }

export const MenuOverlay: React.FC<MenuOverlayProps> = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>{
        links.map((link: { path: string; title: string; }, index: React.Key | null | undefined)=> (
        <li key={index}><NavLink href={link.path} title={link.title}/></li>))}</ul>
  )
}

export default MenuOverlay;