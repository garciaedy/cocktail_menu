import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.svg";

export default class componentName extends Component {
  render() {
    return (
      <nav className="navbar">
        
      <div className="nav-center">
        <img src={logo} alt="cocktail db logo" className="logo"/>
        <ul className="nav-links">
        <li> 
          <Link to="/" > Home</Link>
        </li>
        <li> 
          <Link to="/about" > about</Link>
        </li>
        </ul>
      </div>

      </nav>
    )
  }
}
