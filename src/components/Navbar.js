import React from 'react'
import {  Link,NavLink } from 'react-router-dom'

const Navbar = ({openLinks,toggle}) => {
  return (
    <nav className='navbar'>
        <Link className='toggleButton' onClick={openLinks}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
        </Link>
        <div className="brandtitle"> <NavLink className='brandname' to={'/'}>BrandName</NavLink> </div>
        <div className="navitems">
           <ul className={`navlinks ${toggle?'active':''}`}>
            <li><NavLink  className='navlink' to={'/first'}>FirstLink</NavLink> </li>
            <li><NavLink className='navlink' to={'/second'}>SecondLink</NavLink></li>
            <li><NavLink  className='navlink' to={'/third'}>ThirdLink</NavLink></li>
           </ul>
        </div>
    </nav>


    )
}

export default Navbar