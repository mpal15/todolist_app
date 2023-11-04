import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Todolist from "./Pages/TodoList";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify"
import {createBrowserRouter,RouterProvider} from "react-router-dom"


function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Navbar/>,
      children:[
        {
          index:true,
          element:<Login/>
        },
        {
          path:'/register',
          element:<Register />
        },
        {
          path:"/todo",
          element: <Todolist/>
        }
      ]
    },
   
  ])
  return (
   <>
   <ToastContainer />
   <RouterProvider  router={router}/>  
 
   </>
  );
}

export default App;
