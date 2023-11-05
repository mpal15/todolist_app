import React,{useState,useEffect} from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

const TodoList = () =>{
    let[todo,setTodo] = useState([]);
    const[des,SetDes] = useState('');
    const[date,SetDate] = useState();
    const[edit,setEdit] = useState(false);
    const[index,setIndex] = useState(-1);

    const navigate = useNavigate();
    useEffect(()=>{
     let user =localStorage.getItem("login")
     if(user){
       user = JSON.parse(user);
       let data = localStorage.getItem("user");
       if(data){
        data = JSON.parse(data);
        let value =  data.find((item)=>item.email===user.email)
        setTodo([...value.todo])
       }
     }
     else{
     navigate("/");
     }
    },[])

    useEffect(()=>{
        if(todo.length !== 0){
       let user = localStorage.getItem('login');
       if(user){
        user = JSON.parse(user);
        let data = localStorage.getItem("user");
        if(data){
            data =  JSON.parse(data);
            data = data.map((item)=>{
                if(item.email === user.email){
                    item.todo = [...todo]
                }
                return item;
            })
            localStorage.setItem('user',JSON.stringify(data));
        }
       }
    }
    },[todo])
    
    function handlesubmit(e){
        e.preventDefault();
        let data = {
            description:des,
            date
             }
             setTodo([...todo,data]);
             SetDes('');
             SetDate('');
    }
    function handledelete(index){
       todo = todo.filter((item,i)=>index!==i)
       if (todo.length === 0){
        let user = localStorage.getItem("login");
        if(user){
            user = JSON.parse(user);
            let users = localStorage.getItem("user")
            if(users){
                users = JSON.parse(users);
               users =  users.map((item)=>{
                    if(item.email === user.email){
                        item.todo=[]
                    }
                    return item
                })
                localStorage.setItem("user",JSON.stringify(users))
            }
        }
    }
    setTodo(todo)

    }
    function  handleEditsubmit(e){
        e.preventDefault();
        if(index !== -1){
           todo = todo.map((item,i)=>{
           if(index===i){
            item.description = des
            item.date = date
           }
           return item
            })
            setTodo(todo);
            setIndex(-1);
            setEdit(false);
            SetDes('')
            SetDate('');
        }

    }
    function handleEdit(index){
        setIndex(index)
        setEdit(true)


    }
    return(
        <>
       <div className="container">
       <form onSubmit={(e)=> handlesubmit(e)}>
            <h1>Todolist</h1>
            <div className="row my-3">
                <div className="col-3">
                Description:
                </div>
                <div className="col-9">
                <input type="text"  value = {des} onChange={ (e)=>SetDes(e.target.value)} className="form form-control" placeholder="enter the todo"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3">
                Date:
                </div>
                <div className="col-9">
                <input type="date" value={date} onChange={ (e)=>SetDate(e.target.value)} className="form form-control"/>
                </div>
            </div>
           
           
            <input type="submit" className="btn btn-primary"/>
        </form>
        <hr/>
        <h3 className="text-center">Todos</h3>
        {todo.map((item,index)=> (
             <div className="row">
            <div className="col">{item.description}</div>
            <div className="col">{item.date}</div>
            <div className="col"><button className="btn btn-dark" onClick={()=>handleEdit(index)}>Edit</button></div>
            <div className="col"><button className="btn btn-danger" onClick={()=>handledelete(index)}>Delete</button></div>
        
       </div>))}
       </div>

     {edit?<div className="edit">
     <form onSubmit={(e)=> handleEditsubmit(e)}>
            <div className="row my-3">
                <div className="col-3">
                Description:
                </div>
                <div className="col-9">
                <input type="text"  value = {des} onChange={ (e)=>SetDes(e.target.value)} className="form form-control" placeholder="enter the todo"/>
                </div>
            </div>
            <div className="row my-3">
                <div className="col-3">
                Date:
                </div>
                <div className="col-9">
                <input type="date" value={date} onChange={ (e)=>SetDate(e.target.value)} className="form form-control"/>
                </div>
            </div>
           
           
            <input type="submit" className="btn btn-primary"/>
        </form>
</div>:""}  
        </>
    )
}
export default TodoList;