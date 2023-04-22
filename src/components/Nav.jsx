import React from 'react'
import {Link, NavLink} from "react-router-dom"

export const Nav = () => {
  return (
    <>
    {/* created  Nav and implimented sigle page application using react-router-dom library*/}
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a class="navbar-brand c-red" href="#" style={{ color :"red" }}><Link to={"/"}>LOGO</Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a class="nav-link active" aria-current="page" href="#">City</a>
            </li>
            <li className="nav-item">
            <span class="nav-link" href="#"><NavLink to={"/selling"}>BUY</NavLink></span>
            </li>
            <li className="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Rent
            </a>
            <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
            </li>
            <li className="nav-item">
            <NavLink  className="nav-link disabled"> Projects</NavLink>
            </li>

            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Agents
            </a>
            <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>

            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More Services
            </a>
            <ul className="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </ul>
        <form className="d-flex" role="search">
          <button className="btn btn-outline-success p-1" type="submit">Sell or Rent Property</button>
          <button className="btn btn-outline-success" type="submit" onClick={(e)=> e.preventDefault() } > <Link to={"/login"}>Login</Link> </button>
        </form>
        </div>
    </div>
    </nav>
    </>
  )
}
