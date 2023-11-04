import React,{useState} from "react";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";


const Login = ()=>{
const [email,setEmail] = useState('')
const [password,setPassword] = useState('');
const navigate = useNavigate();

function handleSubmit(e){
    e.preventDefault();
    let user = localStorage.getItem("user");
    if(user){
        user =JSON.parse(user);
       var logindata =  user.find((item)=>item.email === email)
       if(logindata){
         if(logindata.password === password){
            toast.success("suceesfully")
            localStorage.setItem(
            "login",JSON.stringify(logindata))
            navigate('/todo')
         }
         else{
            toast.error("password wrong");
            setPassword('');
         }
       }
       else{
        navigate('/register');
        toast.error("user does not exit");
       }
    }else{
        navigate('/register');
        toast.error("user does not exit");
    }
}
    return(
      <>
      <form onSubmit={(e)=>handleSubmit(e)} >
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"  onChange = { (e)=> setEmail(e.target.value)}className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password"  onChange = { (e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit"  className="btn btn-primary">Submit</button>
  
</form>
</>
    )
}

export default Login;