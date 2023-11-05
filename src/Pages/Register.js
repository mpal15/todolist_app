import {useState} from "react";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = ()=>{
const [username,setUserName] = useState('');
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');
const [confirmpassword,setConfirmPassword] = useState('');
let navigate = useNavigate();

function handleSubmit(e){
  e.preventDefault();
  if(password === confirmpassword){
    let user = localStorage.getItem('user');
    if(user){
       user = JSON.parse(user);
       user.push(JSON.stringify({
        username:username,
        email:email,
        password:password,
        todo:[]
       }))
       setEmail('');
       setUserName('')
       setPassword('')
       localStorage.setItem("user",JSON.stringify(user))
       
    }
    else{
        localStorage.setItem("user",JSON.stringify([{
            username:username,
            email:email,
            password:password,
            todo:[]
        }]))
    }
    navigate('/');
    toast.success("todo add successfully")
  }
  else{
    setPassword('');
    setConfirmPassword('');
    toast.success("wrong password")
  }

}

    return(
      <>
       <form  onSubmit={(e)=>handleSubmit(e)}>
       <div className="mb-3">
    <label  className="form-label">Username</label>
    <input type="text" onChange = {(e)=> setUserName(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" onChange = {(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" onChange = {(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Confirm password</label>
    <input type="password" onChange = {(e)=> setConfirmPassword(e.target.value)} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Register</button>
  
</form></>
    )
}

export default Register;