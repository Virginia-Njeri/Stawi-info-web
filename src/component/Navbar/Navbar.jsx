import React from "react";
import { Link } from "react-router-dom";
// import {HashLink as Link} from 'react-router-hash-link';
import "./navbar.css";
import logo from "../images/StawiBrood_Logo-removebg-preview.png";

function Navbar() {
  return (
    <div className="navbar" id="About">
      <nav className="header">

         <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </label>

        {/* <div className="logo">
          <img src={logo} alt=""  />
        </div> */}
        
        <ul>
          <li>
            <a className="active"  href="#About" smooth={true} duration={1000}>
              About
            </a>
          </li>
          <li>
            <a href="#product">Our product</a>
          </li>
          <li>
            <a href="#Team-stawi">Our Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> 
      </nav>
    </div>
  );
}
export default Navbar;
