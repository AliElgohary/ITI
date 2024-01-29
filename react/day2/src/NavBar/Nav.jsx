

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

    render() {
        return (
           <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <h5 className='text-white'>Navbar</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
  
        <li className="nav-item">
          <Link className="nav-link" to={"about"}> About </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"category"}> Category </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"brand"}> Brand </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"contact"}> Conatct </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"home"}> Home </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to={"products"}> Product </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"settings"}> Settings </Link>
        </li>
      </ul>

    </div>
  </div>
</nav>

        );
    }
}

export default NavBar;
