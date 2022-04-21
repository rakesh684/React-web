import React from "react";

export default function Header(){
    return(
      <header >
           <nav className='nav-item-container'>
                  <img className="nav-logo" src="./logo192.png"  />
                  <ul className="nav-items">
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>
                  </ul>
            </nav>
    </header>
    )
    
  }