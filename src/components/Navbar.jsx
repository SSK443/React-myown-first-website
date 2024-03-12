import React, { useState } from 'react'
import './navbar.css';
import { Link,NavLink } from 'react-router-dom';






function Navbar() {
  const[menu,setmenu]=useState(false)
  return (
  <>
  <nav>
        <img style={{height:'56px'}} src='https://www.ultraedit.com/wp-content/uploads/2023/01/UE-Logo-1.webp' alt="ecece" />
        <div className='menu' onClick={()=>{
          setmenu(!menu)
        }}><i class="fa-solid fa-bars fa-2x"></i></div>
    <ul className={menu?'open':''}>
          <li><NavLink>Products  <i class="fa-solid fa-caret-down"></i></NavLink></li>
          <li><NavLink>Pricing  <i class="fa-solid fa-caret-down"></i></NavLink></li>
          <li><NavLink>Resources  <i class="fa-solid fa-caret-down"></i></NavLink></li>
          <li><NavLink>About us  <i class="fa-solid fa-caret-down"></i></NavLink></li>
          <li><NavLink>Security and compliance  <i class="fa-solid fa-caret-down"></i></NavLink></li>
          <li><NavLink><i class="fa-solid fa-language fa-2x"></i></NavLink></li>
    </ul>
  </nav>

  
  </>
  )
}

export default Navbar