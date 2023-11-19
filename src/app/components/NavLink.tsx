import Link from "next/link"

interface NavLinkProps {
    href: string;
    title: string;
  }

const NavLink:React.FC<NavLinkProps> = ({href, title}) =>{
    return(
        <Link 
        href={href} 
        className='block py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#aaf540]'>
            {title}
        </Link>
    )
};



export default NavLink;