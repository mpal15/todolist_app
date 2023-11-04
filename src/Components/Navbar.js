import React from "react";
import {Outlet} from 'react-router-dom';


const Navbar = ()=>{

    return(
       <>
       <nav className="navbar navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/">
        <span>TodoApp</span>
      <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" />
    </a>
  </div>
  <button type="submit" className="btn btn-dark">Register</button>
  <button type="submit" className="btn btn-danger">Logout</button>
</nav>
       <Outlet />
       </>

    )
}

export default Navbar;