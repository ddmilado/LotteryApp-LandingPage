import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styles from '../styles/Global';
import assets from '../assets';

const Navbar = ({banner})=> {

  function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
  return(




    <nav className={` flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
  {[
    ['Coinante', '/'],
    ['HowToPlay', '/howtoplay'],
    ['Contact', '/contact'],
    ['About Us', '/aboutus'],

  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
  )
}







export default Navbar