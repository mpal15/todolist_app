import React,{useState,useEffect} from "react";
import {Outlet} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Contest from "../Contestapi";
import {toast} from "react-toastify";



const Navbar = ()=>{
 const [button,setButton]  = useState(false);
 const Navigate =  useNavigate();
useEffect(()=>{
  let user = localStorage.getItem("login");
  if(user){
    setButton(!button);
  }
},[]);

function handlelogout(){
  localStorage.removeItem("login");
  setButton(!button);
  toast.success("successfully logout")
  Navigate("/");




}
    return(
     

       <Contest.Provider value={{setButton,button}}>
       <nav className="navbar navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/">
        <span>TodoApp</span>
    </a>
  </div>
 {button?<button type="submit" onClick ={handlelogout} className="btn btn-danger">Logout</button>:<>
 <button type="submit" onClick={()=> Navigate("/register")} className="btn btn-dark">Register</button>
 <button type="submit" onClick={()=> Navigate("/")} className="btn btn-info">Login</button>
  </>}
  
</nav>
       <Outlet />
       </Contest.Provider>

      

    )
}

export default Navbar;