import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

         <nav className='d-flex space-around align-center admin-nav'>
               <NavLink className='admin-navlink' to= "/admin/restaurant">New Restaurant</NavLink>
               <NavLink className='admin-navlink' to= "/admin/restaurant-list">Available Restaurants</NavLink>
         </nav>

    </div>
  )
}

export default Navbar